import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './LoadingSpinner.css'

function LoadingSpinner({ loadingRef }) {

    // This will act as a component did mount function, learned from here:
    // https://www.twilio.com/blog/react-choose-functional-components use effect with an empty dependancy array
    // Will act like a component did mount function
    React.useEffect(() => {
        // Check when the component mounted for testing 
        // console.log(`I mounted at ${new Date().toString()}`)
        loadingRef.current.classList = 'modal'
    }, [loadingRef]) //make sure to use the empty dependancy array 

    // first create a reference to the current location
    const location = useLocation()
    // const loadingRef = useRef() //I will use a ref for the modal div

    // now with useState I will set the 'target' variable with the location
    // to show where we are loading
    const [target, setTarget] = useState('')

    // now using the useEffect() function I will listen for a location change 
    useEffect(() => {
        console.log(location, location.pathname.split('/'), loadingRef.current) //lets test out and see what I have 

        //for the testing lets send the path only to the loading module
        //first turn on the 'is-active' class and switch the target
        setTarget(location.pathname)
        loadingRef.current.classList = 'modal is-active'

    }, [location, loadingRef]) //add the location ahd the loadingRef to the dependancies array 

    // I will create a modal using the bulma framework to show the spinner
    // While loading is occuring. Add the class 'is-active' to show the spinner 
    return (
        <div className="modal" ref={loadingRef}>
            <div className="modal-background"></div>
            <div className="modal-content">
                {/* This is where my loading spinner will go, contained in a bulma box */}
                <div className="box">
                    <p className="title is-1 has-text-centered">Loading {target}</p>
                    <div className="spinner-box">
                        <div className="spinner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner
