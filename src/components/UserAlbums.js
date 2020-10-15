import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchJSON from '../modules/fetch.service.js'
import './UserAlbums.css'

function UserAlbums() {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [albums, setAlbums] = useState()
    const [error, setErrors] = useState()

    //now lets use params and get the userId from the url
    const { userId } = useParams()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'albums', query: { userId } })
            .then(_albums => setAlbums(_albums))
            .catch(err => setErrors(err))
    }, [userId])

    // Now check if we have comments and errors and return the appropriate type
    if (!albums) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
    const albumElements = albums.map(album =>
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

export default UserAlbums
