import React from 'react';
import './category.css';

class CategoryDetails extends React.Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params);
    }

    render() {
        return (
            <p>CategoryDetails</p> 
        );
    }
}

export default CategoryDetails;
