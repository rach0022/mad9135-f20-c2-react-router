import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import fetchJSON from '../modules/fetch.service.js'
import './UserList.css'

function Users() {
    // console.log(users)
    // First lets set some variables with useState for the user and an error
    const [users, setUsers] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the users and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'users' })
            .then(_users => setUsers(_users))
            .catch(err => setErrors(err))
    }, [])

    //if we get back no users lets return nothing for the user list or if we have an error show it
    if (!users) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we verify we have users so lets map our array to a new array with JSX and return the user list
    const userElements = users.map(user =>
        <li key={user.id}>
            <div className="user">
                <p>{user.name}</p>
                <Link to={`/posts/${user.id}`}>Posts</Link>
                <Link to={`/albums/${user.id}`}>Albums</Link>
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
