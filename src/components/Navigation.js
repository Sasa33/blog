import React, { Component } from 'react'
import NavItem from './NavItem'
import logo from '../logo.jpeg';

const navs = [
    {
        url: '/',
        title: 'Home',
        ref: 'home'
    },
    {
        url: '/about',
        title: 'About me',
        ref: 'about'
    }
];

class Navigation extends Component {
    // constructor(props) {
    //     super(props)
    // }

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
