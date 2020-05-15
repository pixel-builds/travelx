import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

class CategoryAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        const categories = await JSON.parse(window.sessionStorage.getItem("categories"));
        if (!categories) {
            await axios.get(URL+'categories').then(res => {
                this.setState({categories: res.data});
            })
        } else {
            this.setState({ categories: categories });
        }
    }
    render() {
        return <div>CAT</div>;
    }
}

export default CategoryAdmin;
