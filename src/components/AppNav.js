import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.css'

function AppNav() {
    // Need to create 2 refs, 1 for the menu and one for the navburger
    const menuRef = React.createRef()
    const burgerRef = React.createRef()

    function toggleMenu(ev) {
        menuRef.current.classList.toggle('is-active')
        burgerRef.current.classList.toggle('is-active')
    }

    // Now inside the JSX I will set the refs inside the burger and menu to access them inside a function
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className="title navbar-item">React Nav</NavLink>
                {/* eslint-disable-next-line */}
                <a ref={burgerRef} onClick={toggleMenu} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu" ref={menuRef} >
                <div className="navbar-end">
                    <NavLink to="/" className="navbar-item" onClick={toggleMenu} >Users</NavLink>
                    <NavLink to="/albums" className="navbar-item" onClick={toggleMenu} >Albums</NavLink>
                    <NavLink to="/posts" className="navbar-item" onClick={toggleMenu} >Posts</NavLink>
                </div>
            </div>

            {/* Since users is home, The path '/' is chosen and exact to match path only */}

        </nav>
    )
}

export default AppNav
