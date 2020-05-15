import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

class bookedRegistries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        await axios.get(URL+'registry/booked', {
            headers: {'Authorization': 'Bearer '+ token}
        }).then(res => {
            this.setState({
                bookings: res.data
            })
        })
    }
    render() {
        return (
            <div>
                BOOKED REGIStries           
            </div>
        )
    }
}

export default bookedRegistries
