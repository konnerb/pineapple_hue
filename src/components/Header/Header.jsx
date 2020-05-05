import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header__title links"><h1>Pineapplehue</h1></NavLink>
            <div className="header__page-links">
                <NavLink to="/about" className="links" activeClassName="selected">About</NavLink>
            </div>
        </header>
    )
} 