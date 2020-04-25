import React from 'react';
import './booking.css';

class BookingDetails extends React.Component {

    componentDidMount() {
        const {match: {params} } = this.props;
        console.log(params.id)
    }
    render(){
        return (
            <h1 className="heading">Booking Details</h1>
        );
    }
}

export default BookingDetails;
