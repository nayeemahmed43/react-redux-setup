import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomeContainer from '../components/business/home/home-container';
import About from '../components/business/about';
import AuthRoute from './auth-route';


export const AppRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <AuthRoute exact path="/" component={HomeContainer} />
            <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
    </BrowserRouter>
);