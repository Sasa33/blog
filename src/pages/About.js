import React, { Component } from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";

class About extends Component {
    render() {
        return (
            <div className="About">
                <Navigation active="about"/>
                <div>This is about me page!</div>
            </div>
        );
    }
}

export default About;
