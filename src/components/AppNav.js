import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.css'

function AppNav() {
    return (
        <nav className="AppNav">
            {/* Since users is home, The path '/' is chosen and exact to match path only */}
            <NavLink to="/">Users</NavLink>
            <NavLink to="/albums">Albums</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    )
}

export default AppNav
