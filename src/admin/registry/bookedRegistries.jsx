import React from 'react';
import axios from 'axios';
import { URL } from '../../url';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class BookedRegistries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registries: []
        }
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        await axios.get(URL + 'registry/booked', {
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(res => {
            this.setState({
                registries: res.data
            })
        })
    }

    render() {
        return (
            <div style={{ padding: 3+'%', display: 'block' }}>
                <h1 className="heading"> Booked Registries </h1>
                {
                    this.state.registries.map((item, key) => {
                        return (
                            <Card key={key} style={{ marginTop: 6+'%' }}>
                            <Card.Body>
                                <Card.Title>{item._id}</Card.Title>
                                <Card.Title>Category: {item.category}</Card.Title>
                                <div>
                                    <Link to={"/admin/registry/"+item._id}>Details</Link>
                                    <Link style={{ marginLeft:20+'px' }} to="/">User</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        );
                    })
                }
                <p><br/></p>
            </div>
        )
    }
}

export default BookedRegistries
