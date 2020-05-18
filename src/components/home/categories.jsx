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
            await axios.get(URL+'categories')
            .then(async res => {
                const categories = res.data;
                this.setState({ categories: categories, isLoading: false })
            }).catch(e => {
                console.log(e);
            })
    }

    render() {
        let loading = this.state.isLoading;
        return (
            <div className="container">
                <span>{loading ? 'Loading.....' : ''}</span>
                {this.state.categories.map((item, k) => { return (<CategoryItem key={k} category={item} />); })}
            </div>
        );
    }
}


export default Categories;
