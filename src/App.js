import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Burger from './components/burger';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/'  exact strict component={Home} />
        <Route path='/sidebar'  exact strict component={Burger} />
      </div>
      </Router>
    );
  }
}

export default App;
