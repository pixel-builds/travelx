import React from 'react';
import './categories.css';
import CategoryItem from './categoryItem';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const categories = this.getItem("categories");
        if (!categories) {
            fetch('http://localhost:4444/categories')
            .then(res => res.json())
            .then((result) => {
                    this.dispatch("categories", result)
                    this.componentDidMount();
                }
            )
        } else {
            this.setState({
                categories: categories,
                isLoading: false
            })
        }
    }

    dispatch(key, data) {
        return window.sessionStorage.setItem(key, JSON.stringify(data));
    }

    getItem(key) {
        return JSON.parse(sessionStorage.getItem(key))
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
