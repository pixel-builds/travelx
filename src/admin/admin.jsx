import React from 'react';
import jwt from 'jwt-decode';
import './admin.css';

import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
    if (this.state.toHome === true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1 className="heading">Admin</h1>
        <section className="admin-links">
          <Link to="/admin/registries/pending"><Button block className="admin-link" variant="danger">Pending</Button></Link> <br />
          <Link to="/admin/registries/booked"><Button block className="admin-link" variant="warning">Booked</Button></Link> <br />
          <Link to="/admin/registries/verified"><Button block className="admin-link" variant="success">Vefified</Button></Link>        
        </section>
        <p><br/></p>
        <section className="admin-links">
          <h2 className="heading">Manage</h2>
          <Link to="/admin/bookings"><Button block className="admin-link" variant="info">Bookings</Button></Link> <br />
          <Link to="/admin/category"><Button block className="admin-link" variant="info">Categories</Button></Link>        
        </section>
      </div>
    );
  }
}

export default Admin;
