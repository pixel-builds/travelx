import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { withRouter } from 'react-router-dom';

import { Button } from 'react-bootstrap';

class Profile extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        
        this.signOut = this.signOut.bind(this);
    }

    async componentDidMount() {
        const user = await JSON.parse(window.sessionStorage.getItem("user"));
        if (!user) {
            const token = await this.getItem("token");
            if (!token) return window.open('http://localhost:3000', '_self')
            const user = jwt(token);
            console.log(user.id)
            await axios.get('http://localhost:4444/auth/users/'+user.id, {
                headers: {'Authorization': 'Bearer '+ token}
            }).then( async (res) => {
                await window.sessionStorage.setItem("user", JSON.stringify(res.data))
                this.componentDidMount();
            }).catch((e) => {
                console.log(e)
            })
        } else {
            this.setState({
                user: user
            });
            console.log(this.state.user.name)
        }
    }

    async getItem(key) {
        const item = await localStorage.getItem(key);
        return JSON.parse(item);
    }

    async signOut() {
        await window.localStorage.removeItem("token");
        await window.sessionStorage.removeItem("user");
        return window.open('http://localhost:3000', '_self');
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.user.name}</p>
                <Button onClick={this.signOut}>SignOut</Button>
            </div>
        );
    }
}

export default withRouter(Profile);