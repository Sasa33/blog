import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItem extends Component {
    render() {
        const { title, linkTo, activeClass } = this.props;

        return (
            <li className={"App-nav-item " + activeClass}>
                <Link to={linkTo}>{title}</Link>
            </li>
        )
    }

}

export default NavItem
