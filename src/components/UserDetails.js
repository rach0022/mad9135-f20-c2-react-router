import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './UserDetails.css'

//I am renaming the users prop to userDetails for use in this componenet
function UserDetails({ users: userDetails, error }) {
    //now lets use params and get the userId from the url
    const { userId } = useParams()

    // get a reference to the history from react usehistory() and then create a call back function
    // for a 'go home' button
    const appHistory = useHistory()

    function viewHome(ev) {
        appHistory.push('/') //send the user to home
    }

    // Now check if we have comments and errors and return the appropriate type
    if (userDetails) {
        //filter out the details of this specific user
        const filteredDetails = userDetails.filter(user => user.id === parseInt(userId))

        //if we get here we have comments and no errors so lets map them to a JSX element and return that componenet
        const detailsElements = filteredDetails.map(detail =>
            <div key={detail.id} className="userDetails card">
                <div className="user-info card-header">
                    <p className="title">{detail.name}</p>
                    <p className="subtitle">{detail.username}</p>

                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="general-details">
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
            </div>
        )

        //lets now return the detail element
        return (
            <div className="page">
                <div className="UserDetails">
                    <header>
                        <button className="button" onClick={viewHome}>Home</button>
                    </header>
                    <main>
                        <ul>
                            {detailsElements}
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

export default UserDetails
