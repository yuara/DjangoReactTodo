import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './todos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
