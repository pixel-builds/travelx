import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './components/home/home';
import Profile from './components/profile/profile';
import Search from './components/search/search';

import BottomBar from './components/nav/bottom-tab';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/search" component={Search} exact />
      </Switch>
      <BottomBar />
    </main>
  );
}

export default App;
