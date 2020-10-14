import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store'
import UserContainer from './components/UserContainer';
import { Provider } from 'react-redux';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { AppRoute } from './router/app-route';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <h1>Hello World</h1>
      <UserContainer /> */}
      {/* <UserForm /> */}
      {/* <UserDetail />  */}
      {/* <Home /> */}
      <AppRoute />
      {/* <SignUp /> */}
    </div>
    </Provider>
    
  );
}

export default App;
