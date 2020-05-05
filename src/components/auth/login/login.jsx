import React from 'react';
import axios from 'axios';

import './login.css';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
            console.log(res.data.token)
        }).catch( (e) => {
            console.log(e)
        })
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