import React from 'react';
import Categories from '../../components/home/categories';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class CategoryAdmin extends React.Component {

    render() {
        return (
        <div className="admin-cat" style={{ textAlign: 'center' }}>
            <Categories />
            <Link to="category/create">
                <br/>
            <Button variant="success">Create</Button>
            </Link>
        </div>
        );
    }
}

export default CategoryAdmin;
