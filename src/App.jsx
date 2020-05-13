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
import Login from './components/auth/login/login';

import Admin from './admin/admin';
import BookingsAdmin from './admin/bookings/bookings';
import RegistryAdmin from './admin/registry/registry';
import CategoryAdmin from './admin/categories/categories';
import VerifiedRegistries from './admin/registry/verifiedRegistries';
import BookedRegistries from './admin/registry/bookedRegistries';
import CreateBooking from './admin/bookings/createBooking';
import CreateCategories from './admin/categories/createCategories'
import RegistryDetails from './admin/registry/registryDetails';

import BottomBar from './components/nav/bottom-tab';
require('./App.css');


class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/admin" component = {Admin} />
          <Route path="/admin/bookings" exact component = {BookingsAdmin} />
          <Route path="/admin/category" exact component = {CategoryAdmin} />
          <Route path="/admin/registries" exact component = {RegistryAdmin} />
          <Route path="/admin/registries/verified" component = {VerifiedRegistries} />
          <Route path="/admin/registries/booked" component = {BookedRegistries} />
          <Route path="/admin/category/create" component = {CreateCategories} />
          <Route path="/admin/bookings/create" component = {CreateBooking} />
          <Route path="/admin/registry/:id" component = {RegistryDetails} />

          <Route exact path="/" component={Home} />
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
