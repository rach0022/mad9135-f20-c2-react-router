import React from 'react'
import { useParams } from 'react-router-dom'
import './UserAlbums.css'

function UserAlbums({ albums: userAlbums, error }) {
    //first lets use params and get the userId from the url
    const { userId } = useParams()

    // Now check if we have comments and errors and return the appropriate type
    if (userAlbums) {
        //now lets filter out the albums by the user id
        const filteredAlbums = userAlbums.filter(album => album.userId === parseInt(userId))

        //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
        const albumElements = filteredAlbums.map(album =>
            <li key={album.id}>{album.title}</li>
        )

        return (
            <div className="page">
                <div className="UserAlbums">
                    <h1>Users Albums</h1>
                    <ul>
                        {albumElements}
                    </ul>
                </div>
            </div>
        )
    }
    if (error) return (<div>{error.message}</div>)

    //if we reach this point return null
    return null
}

export default UserAlbums
