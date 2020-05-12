import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt from 'jwt-decode';

import { Button } from 'react-bootstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            toLogin: false,
            bookings: []
        }
    }
    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        let user = await JSON.parse(window.sessionStorage.getItem("user"));
        if (!token) return this.setState({ toLogin: true });
        if (!user) {
            const payload = await jwt(token);
            await axios.get('http://localhost:4444/auth/users/' + payload.id, {
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(async res => {
                await window.sessionStorage.setItem("user", JSON.stringify(res.data));
                user = res.data;
            }).catch(e => {
                console.log(e);
            })
        }

        await axios.get('http://localhost:4444/registry/user/' + user._id, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((res) => {
                this.setState({
                    bookings: res.data
                })
            }).catch(e => {
                console.log(e);
            })
    }
    render() {
        if (this.state.toLogin === true) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;