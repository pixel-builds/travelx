import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import {URL} from '../../url';
import { Button } from 'react-bootstrap';

class Profile extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            user: {},
            toHome: false
        }
        
        this.signOut = this.signOut.bind(this);
    }

    async componentDidMount() {
        const user = await JSON.parse(window.sessionStorage.getItem("user"));
        if (!user) {
            const token = await this.getItem("token");
            if (!token) return this.setState({ toHome: true })
            const user = jwt(token);
            await axios.get(URL+'auth/users/'+user.id, {
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
        }
    }

    async getItem(key) {
        const item = await localStorage.getItem(key);
        return JSON.parse(item);
    }

    async signOut() {
        await window.localStorage.removeItem("token");
        await window.sessionStorage.removeItem("user");
        return this.setState({ toHome: true })
    }

    render() {

        if (this.state.toHome === true){
            return <Redirect to="/" />
        }

        return (
            <div>
                <p>Hello, {this.state.user.name}</p>
                <Button onClick={this.signOut}>SignOut</Button>
            </div>
        );
    }
}

export default Profile;