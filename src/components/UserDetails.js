import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchJSON from '../modules/fetch.service.js'
import './UserDetails.css'

function UserDetails() {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [userDetails, setUserDetails] = useState()
    const [error, setErrors] = useState()

    //now lets use params and get the userId from the url
    const { userId } = useParams()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route: 'users', query: { id: userId } })
            .then(_details => setUserDetails(_details))
            .catch(err => setErrors(err))
    }, [userId])

    // Now check if we have comments and errors and return the appropriate type
    if (!userDetails) return null
    if (error) return (<div>{error.message}</div>)

    //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
    const detailsElements = userDetails.map(detail =>
        <div key={detail.id} className="userDetails">
            <div className="user-info">
                <div className="general-details">
                    <p className="name">{detail.name}</p>
                    <p className="username">{detail.username}</p>
                    <p className="email">{detail.email}</p>
                    <p className="phone">{detail.phone}</p>
                    <a href={detail.website}>{detail.website}</a>
                </div>
                <div className="address-info">
                    <p className="street">{detail.address.street}</p>
                    <p className="suite">{detail.address.suite}</p>
                    <p className="city">{detail.address.city}</p>
                    <p className="zipcode">{detail.address.zipcode}</p>
                    <p className="coordinates">{detail.address.geo.lat}, {detail.address.geo.lng}</p>
                </div>
                <div className="company">
                    <p className="company-name">{detail.company.name}</p>
                    <p className="company-phrase">{detail.company.catchPhrase}</p>
                    <p className="company-bs">{detail.company.bs}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="page">
            <div className="UserDetails">
                <h1>Detailed View of User</h1>
                <ul>
                    {detailsElements}
                </ul>
            </div>
        </div>
    )
}

export default UserDetails
