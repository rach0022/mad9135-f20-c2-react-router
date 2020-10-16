import React from 'react'

function CardIcon({ image }) {
    return (
        <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                    <img src={image} alt="user icon" ></img>
                </figure>
            </div>
        </div>
    )
}

export default CardIcon
