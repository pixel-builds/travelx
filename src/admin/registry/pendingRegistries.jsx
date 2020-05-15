import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

export class PendingRegistries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registries: []
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        await axios.get(URL+'registry/pending', {
            headers: {'Authorization': 'Bearer '+ token}
        }).then(res => {
            this.setState({
                registries: res.data
            })
        })
    }

    render() {
        return (
            <div>
                PENDING
            </div>
        )
    }
}

export default PendingRegistries
