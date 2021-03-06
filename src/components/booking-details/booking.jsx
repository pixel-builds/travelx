import React from 'react';
import './booking.css';
import axios from 'axios';

import { URL } from '../../url';

import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BookingDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toLogin: false,
            toDashboard: false,
            toSearch: false,
            booking: {},
            token: ''
        }

        this.book = this.book.bind(this);
    }

    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"))
        if (!token) return this.setState({ toLogin: true });
        this.setState({ token: token })
        const {match: {params} } = this.props;
        await axios.get(URL+'bookings/'+ params.id)
        .then( (res) => {
            this.setState({
                booking: res.data
            })
        }).catch(e => {
            return this.setState({ toSearch: true });
        })
    }

    async book() {
        await axios.post(URL+'registry', {
            category: this.state.booking.category,
            bookingId: this.state.booking._id
        }, {
            headers: {'Authorization' : 'Bearer '+ this.state.token}
        }).then( (res) => {
            console.log(res.data);
            this.setState({ toDashboard: true })
        }).catch(e => {
            console.log(e)
        })
    }

    
    render(){
        if(this.state.toSearch === true) {
            return <Redirect to={"/search"} />
        }
        if(this.state.toDashboard === true) {
            return <Redirect to={"/dashboard"} />
        }
        if(this.state.toLogin === true) {
            return <Redirect to={"/login"} />
        }
        return (
            <div className="booking">
                <h1 className="heading">{this.state.booking.name}</h1>
                <p>{this.state.booking.description}</p>
                <Button onClick={this.book} variant="success">Book!</Button>
            </div>
        );
    }
}

export default BookingDetails;
