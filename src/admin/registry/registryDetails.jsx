import React from 'react'
import { URL } from '../../url';
import axios from 'axios';

export default class RegistryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registry: {},
            booking: {},
            user: {}
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        const {match: {params}} = this.props;
        await axios.get(URL+'registry/'+params.id, {
            headers: {'Authorization': 'Bearer '+token}
        }).then(async res => {
            this.setState({registry: res.data})
            await axios.get(URL+'bookings/'+this.state.registry.bookingId)
            .then(res => {
                this.setState({booking: res.data})
            }).catch(e => {
                console.log(e)
            })
            await axios.get(URL+'auth/users/'+ this.state.registry.userId, {
                headers: { 'Authorization': 'Bearer '+token }
            }).then(res => {
                this.setState({ user: res.data })
            })
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <div>
                <h1 className="heading">{this.state.booking.name}</h1>
                <p>Booked By -> {this.state.user.name}</p>
            </div>
        )
    }
}
