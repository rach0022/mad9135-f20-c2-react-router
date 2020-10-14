import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.css'

function AppNav() {
    return (
        <nav className="AppNav">
            {/* Since users is home, The path '/' is chosen and exact to match path only */}
            <NavLink to="/">Users</NavLink>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/comments">Comments</NavLink>
        </nav>
    )
}

export default AppNav
