import React, { useState, useEffect } from 'react'
import fetchJSON from '../modules/fetch.service.js'
import './Albums.css'

function Albums() {
    //First lets set up our varaibles with useState
    const [albums, setAlbums] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'albums' })
            .then(_albums => setAlbums(_albums))
            .catch(err => setErrors(err))
    }, [])

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
