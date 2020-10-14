import React, { useState, useEffect } from 'react'
import fetchJSON from '../modules/fetch.service.js'
import './Comments.css'

function Comments() {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [comments, setComments] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'comments' })
            .then(_comments => setComments(_comments))
            .catch(err => setErrors(err))
    }, [])

    // Now check if we have comments and errors and return the appropriate type
    if (!comments) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
    const commentElements = comments.map(comment => <li key={comment.id}>Email: {comment.email} Title: {comment.title} Comment: {comment.body}</li>)


    return (
        <div className="comments-menu page">
            <h1>Comments</h1>
            <ul>
                {commentElements}
            </ul>
        </div>
    )
}

export default Comments
