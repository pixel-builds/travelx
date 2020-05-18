import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BookingsAdmin extends React.Component {

    render() {
        return (
            <div style={{ padding: 4+'%' }}>
                <Link to="bookings/create">
                    <Button block>Create Booking</Button>
                </Link>
            </div>
        );
    }
}

export default BookingsAdmin;