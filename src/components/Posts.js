import React, { useState, useEffect } from 'react'
import fetchJSON from '../modules/fetch.service.js'
import './Posts.css'

function Posts() {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [posts, setPosts] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'posts' })
            .then(_posts => setPosts(_posts))
            .catch(err => setErrors(err))
    }, [])

    // Now check if we have comments and errors and return the appropriate type
    if (!posts) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
    const postElements = posts.map(post =>
        <li key={post.id}>
            <div className="post">
                <h4>{post.title}</h4>
                <article>{post.body}</article>
            </div>
        </li>
    )


    return (
        <div className="page">
            <div className="posts-menu">
                <h1>Posts</h1>
                <ul>
                    {postElements}
                </ul>
            </div>

        </div>
    )
}

export default Posts
