import React from 'react';
// import './App.css';

import {Route, Switch} from 'react-router-dom';

import Home from './components/home/home';
import Profile from './components/profile/profile';
import Search from './components/search/search';
import Dashboard from './components/profile/dashboard';
import BookingDetails from './components/booking-details/booking';
import CategoryDetails from './components/category-details/category';
import Register from './components/auth/register/register';
import Login from './components/auth/login/login'

import BottomBar from './components/nav/bottom-tab';
require('./App.css');


class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
  
          <Route path="/bookings/:id" component={BookingDetails} />
          <Route path="/categories/:name" component={CategoryDetails} />
          <Route component = {Error} />
        </Switch>
        <BottomBar />
      </main>
    );
  }
}

export default App;
