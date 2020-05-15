import React from 'react';
import './home.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';

import Categories from './categories';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            isAdmin: false
        }
    }

    async componentDidMount() {
        const token = await this.getItem("token")
        this.setState({
            token: token
        })
        if (!token) return
        const user = await jwt(token);
        if (user.role === 'admin') return this.setState({ isAdmin: true });
    }
 
    async getItem(key) {
        const item = await localStorage.getItem(key);
        return JSON.parse(item);
    }

    render() {
        const token = this.state.token;
        let isAdmin = this.state.isAdmin;
        return (
            <div className="main">
                <section className="head">
                    <h1 className="heading">Travelx</h1>
                </section>

                <section className="info">
                    <Card style={{display: 'inline-block', margin: 0 + ' auto' }}>
                        <Card.Body>
                            <Card.Title>Welcome !</Card.Title>
                            <Card.Text>
                                Help us to help you plan a new trip !
                            </Card.Text>
                            {token
                            ? <Link to="search"><Button variant="success">Search</Button></Link>
                            : <Link to="register"><Button variant="success">Sign Up</Button> </Link>
                            }
                            {isAdmin
                            ? <div style= {{paddingTop: 10+ 'px'}}><Link to="/admin"><Button variant="danger">Admin Panel</Button></Link></div>
                            : null
                            }
                        </Card.Body>
                    </Card>
                </section>

                <Categories />
                <p><br/></p>
            </div>
        );
    }
}

export default Home;
