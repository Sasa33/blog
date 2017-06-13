import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItem extends Component {
    render() {
        const activeClass = this.props.style

        return (
            <li className={"App-nav-item " + activeClass}>
                <Link to={this.props.linkTo}>{this.props.title}</Link>
            </li>
        )
    }

}

export default NavItem
