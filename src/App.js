import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store'
import UserContainer from './components/UserContainer';
import { Provider } from 'react-redux';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Hello World</h1>
      <UserContainer />
      {/* <UserForm /> */}
      {/* <UserDetail /> */}
    </div>
    </Provider>
    
  );
}

export default App;
