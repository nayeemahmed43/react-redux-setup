import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
// import HomeContainer from '../components/business/home/home-container';
// import About from '../components/business/about';
// import AuthRoute from './auth-route';
import Solutions from '../components/Solutions';
import NavBar from '../components/Basic/NavBar';
import Home from '../components/Home';
import SignUp from '../components/SignUp';



export const AppRoute = () => (
    <>
    
    <Router>
    <NavBar></NavBar>
        <Switch>
        <Route path="/solutions">
             <Solutions></Solutions>
        </Route>
        <Route exact path="/">
              <Home />
        </Route>
        <Route path="/signup">
              <SignUp />
        </Route>
        </Switch>
    </Router>
    </>
);