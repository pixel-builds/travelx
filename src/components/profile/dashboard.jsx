import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import jwt from 'jwt-decode';
import { URL } from '../../url';
import { Card } from 'react-bootstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            toLogin: false,
            registries: []
        }
    }
    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        let user = await JSON.parse(window.sessionStorage.getItem("user"));
        if (!token) return this.setState({ toLogin: true });
        if (!user) {
            const payload = await jwt(token);
            await axios.get(URL+'auth/users/' + payload.id, {
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(async res => {
                await window.sessionStorage.setItem("user", JSON.stringify(res.data));
                user = res.data;
                this.setState({ user: user })
            }).catch(e => {
                console.log(e);
            })
        } else {
            this.setState({ user: user })
        }

        await axios.get(URL+'registry/user/' + user._id, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((res) => {
                this.setState({
                    registries: res.data
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
            <div style={{ padding: 3+'%', display: 'block' }}>
            <h1 className="heading">Your Bookings</h1>
            {
                this.state.registries.map((item, key) => {
                    return (
                        <Card key={key} style={{ marginTop: 6+'%' }}>
                        <Card.Body>
                            <Card.Title>{item._id}</Card.Title>
                            <Card.Title>Category: {item.category}</Card.Title>
                            <div>
                                <Link to={"/dashboard/"+item._id}>Details</Link>
                                <Link style={{ marginLeft:20+'px' }} to="/">User</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    );
                })
            }
            <p><br/></p>
        </div>
        );
    }
}

export default Dashboard;