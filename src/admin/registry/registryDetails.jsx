import React from 'react'
import { URL } from '../../url';
import axios from 'axios';

export default class RegistryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registry: {}
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        const {match: {params}} = this.props;
        await axios.get(URL+'registry/'+params.id, {
            headers: {'Authorization': 'Bearer '+token}
        }).then(res => {
            this.setState({registry: res.data})
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <div>
                DETAILS
            </div>
        )
    }
}
