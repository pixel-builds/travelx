import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import jwt from 'jwt-decode';
import {URL} from '../../url';
import { Form, Button } from 'react-bootstrap';

function TheForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async entry => {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        const userId = await jwt(token).id;
        const data = {
            name: entry.name,
            description: entry.description,
            category: entry.category,
            userId: userId
        }
        console.log(data)
        await axios.post(URL+'bookings', data, {
            headers: {'Authorization': 'Bearer '+token}
        }).then(res => {
            console.log(res.data);
            const bform = document.getElementById("booking");
            bform.reset();
        }).catch(e => {
            alert("Check the form again !");
            console.log(e);
        })
    };

    return (
        <div style={{ padding: 2 + '%' }}>
            <h1 className="heading">Create Booking</h1>
            <Form id="booking" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Form.Label htmlFor="name">Place Name</Form.Label>
                    <Form.Control name="name" ref={register} />
                </div>
                <br />
                <div>
                    <Form.Label htmlFor="category">category</Form.Label>
                    <Form.Control name="category" ref={register} />
                </div>
                <br />
                <div>
                    <Form.Label htmlFor="description">Place Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="description"ref={register} />
                </div>
                <p></p>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

class CreateBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <TheForm />;
    }
}

export default CreateBooking;