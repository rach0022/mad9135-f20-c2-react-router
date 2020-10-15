import React from 'react'
import './Albums.css'

function Albums({ albums, error }) {

    //Now to check if we have photos or an error
    if (!albums) return null
    if (error) return (<div>{error.message}</div>)

    const albumElements = albums.map(album => <li key={album.id}>{album.title}</li>)

    return (
        <div className="page">
            <div className="album-menu">
                <h1>All Albums</h1>
                {albumElements}
            </div>
        </div>
    )
}

export default Albums
