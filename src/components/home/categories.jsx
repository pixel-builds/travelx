import React from 'react';
import './categories.css';
import CategoryItem from './categoryItem';
import axios from 'axios';
import { URL } from '../../url';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [''],
            isLoading: true
        }
    }

    async componentDidMount() {
        const categories = await this.getItem("categories");
        if (!categories) {
            await axios.get(URL+'categories')
            .then(async res => {
                await this.dispatch("categories", res.data)
                this.componentDidMount()
            }).catch(e => {
                this.setState({ categories: categories })
            })
        } else {
            this.setState({ categories: categories, isLoading: false});
        }
    }

    async dispatch(key, data) {
        return await window.sessionStorage.setItem(key, JSON.stringify(data));
    }

    async getItem(key) {
        return await JSON.parse(sessionStorage.getItem(key))
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
