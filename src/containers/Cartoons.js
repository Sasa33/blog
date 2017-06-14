import React, { Component } from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";

class Cartoons extends Component {
    render() {
        return (
            <div className="Cartoons">
                <Navigation active="cartoons"/>
                <div>This page will list all the cartoons I have watched!</div>
            </div>
        );
    }
}

export default Cartoons;
