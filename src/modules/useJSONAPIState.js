import { useState, useEffect } from 'react'
import fetchJSON from '../modules/fetch.service.js'

//our own custom useEffect for pulling data from the JSON API
function useJSONAPIState({ route = 'users' }) {
    // First set up some state varibles with the useState to then use the hooks api to fetch data
    const [state, setState] = useState()
    const [error, setErrors] = useState()

    // Now using our FetchJSON function and the useEFffect function from React we can fetch
    // The JSON data for the photos and set either that or an error (if failed)
    useEffect(() => {
        fetchJSON({ route })
            .then(_state => setState(_state))
            .catch(err => setErrors(err))
    }, [route])
    return [state, error]
}

export default useJSONAPIState
