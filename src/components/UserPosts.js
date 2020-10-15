import React from 'react'
import { useParams } from 'react-router-dom'
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
            <li key={post.id}>
                <h5>{post.title}</h5>
                <article>{post.body}</article>
            </li>
        )

        return (
            <div className="page">
                <div className="UserPosts">
                    <header>
                        <h1>{user.name} Posts</h1>
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
    if (error) return (<div>{error.message}</div>)

    //if we reach this point return null
    return null
}

export default UserPosts
