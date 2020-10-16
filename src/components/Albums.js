import React from 'react'
import './Albums.css'

function Albums({ albums, error, loadingRef }) {

    // This will act as a component did mount function, learned from here:
    // https://www.twilio.com/blog/react-choose-functional-components use effect with an empty dependancy array
    // Will act like a component did mount function
    React.useEffect(() => {
        // Check when the component mounted for testing 
        // console.log(`I mounted at ${new Date().toString()}`)
        loadingRef.current.classList = 'modal'
    }, [loadingRef]) //make sure to use the empty dependancy array 

    //Now to check if we have photos or an error
    if (!albums) return null
    if (error) return (<div>{error.message}</div>)

    const albumElements = albums.map(album =>
        <div key={album.id} className="card">
            <div className="card-header">
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
                    <ul>{albumElements}</ul>
                </main>
            </div>
        </div>
    )
}

export default Albums
