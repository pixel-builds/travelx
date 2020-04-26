import React from 'react';
import './categories.css'

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CategoryItem extends React.Component {

    render() {
        return (
            <Link className="item" to={{ pathname: `/categories/${this.props.category.name}` }}>
                <Button variant="secondary" className="item-button">{this.props.category.name}</Button>
            </Link>
        );
    }
}

export default CategoryItem;