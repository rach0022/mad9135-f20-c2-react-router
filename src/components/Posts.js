import React from 'react'
import './Posts.css'

function Posts({ posts, error }) {

    // Now check if we have posts and errors and return the appropriate type
    if (!posts) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have posts and no errors so lets map them to a JSX element and return that componenet
    const postElements = posts.map(post =>
        <li key={post.id}>
            <div className="post">
                <h4>{post.title}</h4>
                <article>{post.body}</article>
            </div>
        </li>
    )

    //now return our formatted JSX element
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
