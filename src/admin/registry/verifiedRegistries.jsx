import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

class VerifiedRegistries extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        await axios.get(URL+'registry/verified', {
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
                VerifiedRegistries
            </div>
        )
    }
}

export default VerifiedRegistries;