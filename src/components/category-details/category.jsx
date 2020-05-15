import React from 'react';
import './category.css';
import {URL} from '../../url';
import { Link } from 'react-router-dom';

class CategoryDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            category: '',
            bookings: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(URL+'categories/' + params.name)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoading: false,
                    category: result
                })
            }, (error) => {
                this.setState({ isLoading: true })
                console.log(error)
            })

        fetch(URL+'categories/' + params.name + '/bookings')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    bookings: result
                })
            }, (error) => {
                console.log(error)
            })
    }


    render() {
        let loading = this.state.isLoading;
        return (
            <div className="main">
                <span>{loading ? 'Loading.....' : ''}</span>
                <h1 className="heading-2" style={{ fontSize: 3.1 + 'rem' }}>{this.state.category.name}</h1>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil natus autem ea ipsum sed dicta eius. Eos officiis veniam placeat totam! Tempora placeat, neque tempore nihil ducimus quasi aspernatur!</p><br/>
                {this.state.bookings.map((item, k) => { 
                    return <Link to={"/bookings/"+ item._id}>
                        <h1 className="heading booking-heading">{item.name}</h1>
                        <p>{item.description}</p>
                        <p><br/></p>
                    </Link>
                })}
            </div>
        );
    }
}

export default CategoryDetails;
