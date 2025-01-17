import React from 'react'
import LoadingSpinner from './LoadingSpinner.js' // for the loading spinner while loading
import albumIcon from '../img/icon/album.png'
import CardIcon from './CardIcon.js'
import './Albums.css'

function Albums({ albums, error }) {

    //Now to check if we have photos or an error
    if (!albums) return <LoadingSpinner />
    if (error) return (<div>{error.message}</div>)

    const albumElements = albums.map(album =>
        <div key={album.id} className="card">
            <div className="card-content">
                <CardIcon image={albumIcon} />
                <p className="card-header-title">#{album.id}: {album.title}</p>
            </div>
        </div>
    )

    return (
        <div className="page">
            <div className="album-menu">
                <header>
                    <p className="title">All Albums</p>
                    <p className="subtitle">Time: <em>{new Date().toString()}</em></p>
                </header>
                <main>
                    {albumElements}
                </main>
            </div>
        </div>
    )
}

export default Albums
