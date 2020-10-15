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
                <h4>#{post.id}: <em>{post.title}</em></h4>
                <article>{post.body}</article>
            </div>
        </li>
    )

    //now return our formatted JSX element
    return (
        <div className="page">
            <div className="posts-menu">
                <header>
                    <h1>All Posts</h1>
                    <p>Time: <em>{new Date().toString()}</em></p>
                </header>
                <main>
                    <ul>
                        {postElements}
                    </ul>
                </main>
            </div>
        </div>
    )
}

export default Posts
