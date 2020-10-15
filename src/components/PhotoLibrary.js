import React, { useState, useEffect } from 'react'
import fetchJSON from '../modules/fetch.service.js'
import './PhotoLibrary.css'

function PhotoLibrary({ limit }) {
    //First lets set up our varaibles with useState
    const [photos, setPhotos] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'photos' })
            .then(_photos => setPhotos(_photos))
            .catch(err => setErrors(err))
    }, [])

    //Now to check if we have photos or an error
    if (!photos) return null
    if (error) return (<div>{error.message}</div>)

    const photoElements = photos.slice(0, limit).map(image => <img key={image.id} src={image.thumbnailUrl} title={image.title} alt={image.title} style={{ width: '40px', height: '40px' }} />)

    return (
        <div className="page">
            <div className="photos-menu">
                <h1>Photos</h1>
                {photoElements}
            </div>
        </div>
    )
}

export default PhotoLibrary
