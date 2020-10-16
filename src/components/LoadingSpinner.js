import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './LoadingSpinner.css'

function LoadingSpinner() {
    // first create a reference to the current location
    const location = useLocation()
    // const loadingRef = useRef() //I will use a ref for the modal div

    // now with useState I will set the 'target' variable with the location
    // to show where we are loading
    const [target, setTarget] = useState('')

    // now using the useEffect() function I will listen for a location change
    //add the location to the depandancies array 
    // and using the value of location.pathname I will either show the path name or show Home (for path '/')
    useEffect(() => setTarget((location.pathname !== '/') ? location.pathname.toUpperCase().split('/')[1] : 'HOME'), [location])


    // create a modal using the bulma framework to show the spinner
    return (
        <div className="modal is-active">
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
