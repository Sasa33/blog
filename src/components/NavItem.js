import React, { Component } from 'react'

class NavItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <li className="App-nav-item">
                <a href={this.props.linkTo}>{this.props.title}</a>
            </li>
        )
    }

}

export default NavItem
