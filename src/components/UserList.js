import React from 'react'
import { Link } from 'react-router-dom'
import './UserList.css'

function Users({ users, error }) {

    //if we get back no users lets return nothing for the user list or if we have an error show it
    if (!users) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we verify we have users so lets map our array to a new array with JSX and return the user list
    const userElements = users.map(user =>
        <li key={user.id}>
            <div className="user">
                <p>{user.name}</p>
                <Link to={`/albums/${user.id}`}>Albums</Link>
                <Link to={`/posts/${user.id}`}>Posts</Link>
                <Link to={`/details/${user.id}`}>Details</Link>
            </div>
        </li>
    )

    return (
        <div className="page">
            <div className="users-list">
                <h1>Users</h1>
                <ul>{userElements}</ul>
            </div>
        </div>
    )
}

export default Users
