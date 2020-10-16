import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner.js' // for the loading spinner while loading
import './UserList.css'

function Users({ users, error }) {

    //first lets get a refrerence to the history using useHistory()
    const appHistory = useHistory()

    //lets create a callback functions to run when the user clicks on the .user div that will load the details view
    function viewDetails(ev) {
        //get the reference to the user id by splitting the id string on the hypen and taking the second element (1)
        appHistory.push(`/users/${ev.currentTarget.id.split('-')[1]}`)
    }

    //lets create a callback function for the links that stops the event bubbling
    const stopEventBubbling = ev => ev.stopPropagation()

    //if we get back no users lets return nothing for the user list or if we have an error show it
    if (!users) return <LoadingSpinner />
    if (error) return (<div>{error.message}</div>)

    //if we get here we verify we have users so lets map our array to a new array with JSX and return the user list
    const userElements = users.map(user =>
        <div className="user card" key={user.id} id={`user-${user.id}`} onClick={viewDetails} >
            <div className="user-details card-content">
                <p className="title is-4">{user.name}</p>
                <p className="subtitle is-6">{user.email}</p>
                <p>{user.company.name}</p>
            </div>
            <div className="card-footer">
                <Link to={`/albums/${user.id}`} onClick={stopEventBubbling} className="button link card-footer-item">Albums</Link>
                <Link to={`/posts/${user.id}`} onClick={stopEventBubbling} className="button link card-footer-item">Posts</Link>
            </div>
        </div>
    )

    return (
        <div className="page">
            <div className="users-list">
                <header>
                    <p className="title">All Users</p>
                    <p className="subtitle">Time: <em>{new Date().toString()}</em></p>
                </header>
                <main>
                    {userElements}
                </main>
            </div>
        </div>
    )
}

export default Users
