import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation active="home" />
        </div>
      </div>
    );
  }
}

export default App;
