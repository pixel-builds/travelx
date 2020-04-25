import React from 'react';
import './categories.css'

import { Link } from 'react-router-dom';

class CategoryItem extends React.Component {

    render() {
        return (
            <div className="item">
                <Link to={{ pathname: `/categories/${this.props.category.name}` }}>{this.props.category.name}</Link>
            </div>
        );
    }
}

export default CategoryItem;