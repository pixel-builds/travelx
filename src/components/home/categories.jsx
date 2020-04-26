import React from 'react';
import './categories.css';
import CategoryItem from './categoryItem';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [''],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:4444/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        categories: result,
                        isLoading: false
                    })
                }
            )
    }

    render() {
        let loading = this.state.isLoading;
        return (
            <div className="container">
                <span>{loading ? 'Loading.....' : ''}</span>
                {this.state.categories.map((item, k) => { return <CategoryItem key={k} category={item} /> })}
            </div>
        );
    }
}


export default Categories;
