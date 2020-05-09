import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            toLogin: false,
            bookings: []
        }
    }
    async componentDidMount() {
        const token = await JSON.parse(window.localStorage.getItem("token"));
        const user = await JSON.parse(window.sessionStorage.getItem("user"));
        if (!user) return this.setState({ toLogin: true });
        if (!token) return this.setState({ toLogin: true });

        await axios.get('http://localhost:4444/registry/user/'+user._id, {
            headers: {'Authorization': 'Bearer '+ token} 
        })
        .then( (res) => {
            this.setState({
                bookings: res.data
            })
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        if(this.state.toLogin === true) {
            return <Redirect to="/login" />
        }
        return (
            <p>DashBoard</p>
        );
    }
}

export default Dashboard;