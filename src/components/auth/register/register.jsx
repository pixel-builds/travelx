import React from 'react';
import axios from 'axios';
import './register.css';

import { Link } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        }

        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);

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

    nameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    async submit(event) {
        event.preventDefault();
        const data = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
        axios.post('http://localhost:4444/auth/register', data)
        .then(res => {
            console.log(res)
            // TODO: link to login page
        }).catch( (e) => {
            console.log(e);
        })
    }

    render() {
        return (
            <section>
                <h1 className="heading"> Register </h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.emailChange} value={this.state.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.nameChange} value={this.state.name} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.passwordChange} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.submit} style={{ marginTop: 20 + 'px' }} variant="success">
                        Submit
                    </Button>
                </Form>
                <p>
                    <Link to={"/login"}>If already registered, Login</Link>
                </p>
            </section>
        )
    }
}

export default Register;