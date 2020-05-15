import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

class BookingsAdmin extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        await axios.get(URL+'bookings')
        .then(res => {
            this.setState({
                bookings: res.data
            })
        })
    }

    render() {
        return <div>BOOKINGS</div>
    }
}

export default BookingsAdmin;