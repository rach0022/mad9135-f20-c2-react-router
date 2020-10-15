import React from 'react'
import { useParams } from 'react-router-dom'
import './UserAlbums.css'

function UserAlbums({ albums: userAlbums, error, users }) {
    //first lets use params and get the userId from the url
    const { userId } = useParams()

    //if we have users lets find the spefic user entry and or just have null
    const user = (users) ? users.find(u => u.id === parseInt(userId)) : { name: 'null' }

    // Now check if we have comments and errors and return the appropriate type
    if (userAlbums) {
        //now lets filter out the albums by the user id
        const filteredAlbums = userAlbums.filter(album => album.userId === parseInt(userId))

        //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
        const albumElements = filteredAlbums.map(album =>
            <div key={album.id} className="card">
                <div className="card-header">
                    <p className="card-header-title">{album.title}</p>
                </div>
            </div>
        )

        return (
            <div className="page">
                <div className="UserAlbums">
                    <header>
                        <p className="title">{user.name} Albums</p>
                    </header>
                    <main>
                        <ul>
                            {albumElements}
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

export default UserAlbums
