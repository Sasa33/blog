import React, { Component } from 'react'
import NavItem from './NavItem'

class Navigation extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <ul className="App-nav">
                <NavItem title="Home" linkTo="/" />
                <NavItem title="About me" linkTo="/" />
            </ul>
        )
    }

}

export default Navigation
