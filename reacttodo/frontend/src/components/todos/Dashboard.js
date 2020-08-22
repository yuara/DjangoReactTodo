import React, { Component } from 'react';
import TodoList from './TodoList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Todo Create From</div>
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;
