import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './UserDetails.css'

//I am renaming the users prop to userDetails for use in this componenet
function UserDetails({ users: userDetails, error, loadingRef }) {

    // This will act as a component did mount function, learned from here:
    // https://www.twilio.com/blog/react-choose-functional-components use effect with an empty dependancy array
    // Will act like a component did mount function
    React.useEffect(() => {
        // Check when the component mounted for testing 
        // console.log(`I mounted at ${new Date().toString()}`)
        loadingRef.current.classList = 'modal'
    }, [loadingRef]) //make sure to use the empty dependancy array 

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
            <div key={detail.id} className="userDetails">

                <div className="general-details card">
                    <div className="card-header">
                        <p className="card-header-title">Contact</p>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p className="email subtitle">{detail.email}</p>
                            <p className="phone">{detail.phone}</p>
                            <a href={detail.website}>{detail.website}</a>
                        </div>
                    </div>
                </div>
                <div className="general-details card">
                    <div className="card-header">
                        <p className="card-header-title">Address</p>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p className="city">{detail.address.city}</p>
                            <p className="street">{detail.address.street}</p>
                            <p className="suite">{detail.address.suite}</p>
                            <p className="zipcode">{detail.address.zipcode}</p>
                            <p className="coordinates">{detail.address.geo.lat}, {detail.address.geo.lng}</p>
                        </div>
                    </div>
                </div>

                <div className="general-details card">
                    <div className="card-header">
                        <p className="card-header-title">Buisness</p>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p className="subtitle">{detail.company.name}</p>
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
                        <p className="title">{filteredDetails[0].name}</p>
                        <p className="subtitle">{filteredDetails[0].username}</p>
                    </header>
                    <main>
                        {detailsElements}
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
