import React, { Component } from 'react'
import NavItem from './NavItem'
import logo from '../../logo.jpeg';
import './style.css'

const navs = [
    {
        url: '/',
        title: 'Home',
        ref: 'home'
    },
    {
        url: '/cartoons',
        title: 'Cartoons',
        ref: 'cartoons'
    },
    {
        url: '/about',
        title: 'About me',
        ref: 'about'
    }
];

class Navigation extends Component {
    render() {
        const navItems = navs.map((nav) => (
            <NavItem title={nav.title} linkTo={nav.url} style={this.props.active === nav.ref ? 'active' : ''} />
        ))
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="App-nav">
                    {navItems}
                </ul>
            </div>
        )
    }

}

export default Navigation
