import React from 'react';
import './category.css';

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
        fetch('http://localhost:4444/categories/' + params.name)
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

        fetch('http://localhost:4444/categories/' + params.name + '/bookings')
        .then(res => res.json())
        .then( (result) => {
            console.log(result)
            this.setState({
                bookings: result
            })
            console.log(this.state)
        }, (error) => {
            console.log(error)
        })    
    }


    render() {
        let loading = this.state.isLoading;
        return (
            <div className="main">
                <span>{loading ? 'Loading.....' : ''}</span>
                <h1 className="heading-2" style={{fontSize:3.1 + 'rem'}}>{this.state.category.name}</h1>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil natus autem ea ipsum sed dicta eius. Eos officiis veniam placeat totam! Tempora placeat, neque tempore nihil ducimus quasi aspernatur!</p>
                <img alt="img" className="img" src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                {this.state.bookings.map((item, k) => {return <h1 className="heading">{item.name}</h1>}) }
            </div>
        );
    }
}

export default CategoryDetails;
