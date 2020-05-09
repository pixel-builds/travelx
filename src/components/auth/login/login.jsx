import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './login.css';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            toProfile: false
        }

        this.submit = this.submit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    async submit(e) {
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        await axios.post('http://localhost:4444/auth/login', data)
        .then( (res) => {
            this.setItem("token", res.data.token);
            return this.setState({ toProfile: true })
        }).catch( (e) => {
            console.log(e)
        })
    }

    setItem(key, item) {
        return window.localStorage.setItem(key, JSON.stringify(item))
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        });
    }    

    render() {

        if (this.state.toProfile === true) {
            return <Redirect to='/profile' />
        }

        return (
            <section>
                <h1 className="heading">LogIn</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.emailChange} value={this.state.email} type="text" placeholder="Email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.passwordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="warning" onClick={this.submit}>
                        Login
                    </Button>
                </Form>
            </section>
        )
    }
}

export default Login;