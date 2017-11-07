import React, { Component } from 'react';
import './App.css';
import './css/font-awesome.min.css'
import Todo from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
