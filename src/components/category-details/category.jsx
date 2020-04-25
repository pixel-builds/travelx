import React from 'react';
import './category.css';

class CategoryDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            category: ''
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch('http://localhost:4444/categories/' + params.name)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    isLoading: false,
                    category: result
                })
            }, (error) => {
                this.setState({isLoading: true})
                console.log(error)
            })
    }

    render() {
        let loading = this.state.isLoading;
        return (
            <div>
                <span>{loading ? 'Loading.....' : ''}</span>
                <h1 className="heading-2">{this.state.category.name}</h1>
            </div>
        );
    }
}

export default CategoryDetails;
