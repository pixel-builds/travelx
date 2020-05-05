import React from 'react';
import './home.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Categories from './categories';

class Home extends React.Component {
    render() {
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
                                Help us to help you plan new trips !
                            </Card.Text>
                            <Link to="register">
                            <Button variant="success">Sign Up</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </section>

                <Categories />
            </div>
        );
    }
}

export default Home;
