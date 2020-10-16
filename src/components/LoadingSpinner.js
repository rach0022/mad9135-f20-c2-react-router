import React from 'react'
import './LoadingSpinner.css'

function LoadingSpinner({ target = '' }) {
    // I will create a modal using the bulma framework to show the spinner
    // While loading is occuring. Add the class 'is-active' to show the spinner 
    return (
        <div className="modal">
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
