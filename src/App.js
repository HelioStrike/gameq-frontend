import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Constants from './constants';
import './App.css';

import Home from './views/home/home';
import SignUp from './views/signup/signup';
import Contribute from './views/contribute/contribute';
import AddData from './views/data/addData/addData';
import NotFound from './views/notFound/notFound';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Switch>
        <Route exact path={Constants.PATHS.HOME} component={Home} />
        <Route exact path={Constants.PATHS.APIKEY} component={SignUp} />
        <Route exact path={Constants.PATHS.CONTRIBUTE} component={Contribute} />
        <Route exact path={Constants.PATHS.ADDDATA} component={AddData} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
