import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner.js' // for the loading spinner while loading
import './UserPosts.css'

function UserPosts({ posts: userPosts, error, users }) {
    //first lets get the userId from the url
    const { userId } = useParams()

    //if we have users lets find the spefic user entry and or just have null
    const user = (users) ? users.find(u => u.id === parseInt(userId)) : { name: 'null' }

    // Now check if we have comments and errors and return the appropriate type
    if (userPosts) {
        //first filter out the posts once we confirm we have some
        const filteredPosts = userPosts.filter(post => post.userId === parseInt(userId))

        //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
        const postElements = filteredPosts.map(post =>
            <div key={post.id} className="post card">
                <div className="card-header">
                    <p className="card-header-title">#{post.id}: <em>{post.title}</em></p>
                </div>
                <div className="card-content">
                    <article>{post.body}</article>
                </div>
            </div>
        )

        return (
            <div className="page">
                <div className="UserPosts">
                    <header>
                        <p className="title">{user.name} Posts</p>
                    </header>
                    <main>
                        {postElements}
                    </main>
                </div>
            </div>
        )
    }
    if (error) return (<div>{error.message}</div>)

    //if we reach this point return null
    return <LoadingSpinner />
}

export default UserPosts
