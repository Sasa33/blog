import React, { Component } from 'react'
import NavItem from './NavItem'

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
            <ul className="App-nav">
                {navItems}
            </ul>
        )
    }

}

export default Navigation
