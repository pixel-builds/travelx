import React from 'react';
import './booking.css';

class BookingDetails extends React.Component {

    componentDidMount() {
        const {match: {params} } = this.props;
        console.log(params.id)
    }
    render(){
        return (
            <p>Booking Details</p>
        );
    }
}

export default BookingDetails;
