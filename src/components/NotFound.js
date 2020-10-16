import React from 'react'

function NotFound({ loadingRef }) {

    // This will act as a component did mount function, learned from here:
    // https://www.twilio.com/blog/react-choose-functional-components use effect with an empty dependancy array
    // Will act like a component did mount function
    React.useEffect(() => {
        // Check when the component mounted for testing 
        // console.log(`I mounted at ${new Date().toString()}`)
        loadingRef.current.classList = 'modal'
    }, [loadingRef]) //make sure to use the empty dependancy array 

    return (
        <div className="404-error page">
            <header>
                <h1>404 Error!</h1>
            </header>
        </div>
    )
}

export default NotFound
