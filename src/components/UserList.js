import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './UserList.css'

function Users({ users, error }) {

    //first lets get a refrerence to the history using useHistory()
    const appHistory = useHistory()

    //lets create a callback functions to run when the user clicks on the .user div that will load the details view
    function viewDetails(ev) {
        //get the reference to the user id by splitting the id string on the hypen and taking the second element (1)
        appHistory.push(`/details/${ev.currentTarget.id.split('-')[1]}`)
    }

    //lets create a callback function for the links that stops the event bubbling
    const stopEventBubbling = ev => ev.stopPropagation()

    //if we get back no users lets return nothing for the user list or if we have an error show it
    if (!users) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we verify we have users so lets map our array to a new array with JSX and return the user list
    const userElements = users.map(user =>
        <li key={user.id} id={`user-${user.id}`} onClick={viewDetails}>
            <div className="user">
                <div className="user-details">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                </div>
                <div className="buttons">
                    <Link to={`/albums/${user.id}`} onClick={stopEventBubbling} className="link">Albums</Link>
                    <Link to={`/posts/${user.id}`} onClick={stopEventBubbling} className="link">Posts</Link>
                </div>
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
