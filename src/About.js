import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import Navigation from "./components/Navigation";

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Navigation active="about"/>
                </div>
                <div>This is about me page!</div>
            </div>
        );
    }
}

export default About;
