const BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * @typedef {Object} JSONAPI_Object
 * @property {string} route the specified route to retrive data (users, comments, photos)
 * @property {string} query the specified query like ?userId:9 as 'user:Id:9'
 */

/**
 * Get the latest JSON placeholder data from the JSON Placeholder API
 * @param {JSONAPI_Object} options
 * @returns {Object} The JSON Results from the Placeholder API
 * @see https://jsonplaceholder.typicode.com/
 */
export async function fetchJSON({ route = 'users', query = null }) {
    const url = query ? `${BASE_URL}/${route}` : `${BASE_URL}/${route}?${query}`
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}

export default fetchJSON