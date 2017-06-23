import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ title, linkTo, style }) => (
    <li className={"App-nav-item " + style}>
        <Link to={linkTo}>{title}</Link>
    </li>
);

export default NavItem
