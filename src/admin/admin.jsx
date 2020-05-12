import React from 'react';
import jwt from 'jwt-decode';

import { Redirect } from 'react-router-dom';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false
    }
  }

  async componentDidMount() {
    const token = await JSON.parse(window.localStorage.getItem("token"));
    if (!token) return this.setState({ toHome: true });
    const user = await jwt(token);
    if (user.role !== 'admin') return this.setState({ toHome: true });
  }
  
  render() {
    if(this.state.toHome === true) {
      return <Redirect to="/" />
    }
    return (
        <main>
          lol
        </main>
    );
  }
}

export default Admin;
