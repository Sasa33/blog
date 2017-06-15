import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItem extends Component {
    render() {
        const { title, linkTo, style } = this.props;

        return (
            <li className={"App-nav-item " + style}>
                <Link to={linkTo}>{title}</Link>
            </li>
        )
    }

}

export default NavItem
