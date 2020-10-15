import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchJSON from '../modules/fetch.service.js'
import './UserPosts.css'

function UserPosts() {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [posts, setPosts] = useState()
    const [error, setErrors] = useState()

    //now lets use params and get the userId from the url
    const { userId } = useParams()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'posts', query: { userId } })
            .then(_posts => setPosts(_posts))
            .catch(err => setErrors(err))
    }, [userId])

    // Now check if we have comments and errors and return the appropriate type
    if (!posts) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
    const postElements = posts.map(post => <li key={post.id}>{post.title}</li>)

    return (
        <div className="page">
            <div className="UserPosts">
                <h1>Users Posts</h1>
                <ul>
                    {postElements}
                </ul>
            </div>
        </div>
    )
}

export default UserPosts
