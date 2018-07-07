import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
