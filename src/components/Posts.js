import React from 'react'
import LoadingSpinner from './LoadingSpinner.js' // for the loading spinner while loading
import './Posts.css'

function Posts({ posts, error }) {

    // Now check if we have posts and errors and return the appropriate type
    if (!posts) return <LoadingSpinner />
    if (error) return (<div>{error.message}</div>)

    //if we get here we have posts and no errors so lets map them to a JSX element and return that componenet
    const postElements = posts.map(post =>
        <div key={post.id} className="post card">
            <div className="card-header">
                <p className="card-header-title">#{post.id}: <em>{post.title}</em></p>
            </div>
            <div className="card-content">
                <article>{post.body}</article>
            </div>
        </div>
    )

    //now return our formatted JSX element
    return (
        <div className="page">
            <div className="posts-menu">
                <header>
                    <p className="title">All Posts</p>
                    <p className="subtitle">Time: <em>{new Date().toString()}</em></p>
                </header>
                <main>
                    {postElements}
                </main>
            </div>
        </div>
    )
}

export default Posts
