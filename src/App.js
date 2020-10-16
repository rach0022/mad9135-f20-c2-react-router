import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { HashRouter as Router, Switch, Route } from 'react-router-dom' //uncomment for deployment
// import logo from './logo.svg';
import './App.css';
//import modules
import useJSONAPIState from './modules/useJSONAPIState'
// import components
import AppNav from './components/AppNav.js'
import UserList from './components/UserList.js'
import Albums from './components/Albums.js'
import Posts from './components/Posts.js'
import UserPosts from './components/UserPosts.js'
import UserAlbums from './components/UserAlbums.js'
import UserDetails from './components/UserDetails.js'
import LoadingSpinner from './components/LoadingSpinner.js' // for the loading spinner while loading
import NotFound from './components/NotFound.js' // for 404 pages

function App() {

  //First fetch the users, posts and albums using my custom useJSONAPIState to the corresponding routes
  const [users, userErrors] = useJSONAPIState({ route: 'users' })
  const [posts, postErrors] = useJSONAPIState({ route: 'posts' })
  const [albums, albumErrors] = useJSONAPIState({ route: 'albums' })

  //create a ref for the loading spinner to be passed around
  const spinnerRef = useRef()

  return (
    <div className="React-Nav-App">
      <Router>
        {/* The custom AppHeader component located in ./components */}
        <LoadingSpinner loadingRef={spinnerRef} />
        <AppNav />

        {/* The Main Part of the application, users route is '/' */}
        <section className="section">

          <Switch>
            <Route exact path="/">
              <UserList users={users} error={userErrors} loadingRef={spinnerRef} />
            </Route>

            <Route exact path="/albums">
              <Albums albums={albums} error={albumErrors} loadingRef={spinnerRef} />
            </Route>

            <Route exact path="/posts">
              <Posts posts={posts} error={postErrors} loadingRef={spinnerRef} />
            </Route>

            <Route path="/posts/:userId">
              <UserPosts posts={posts} error={postErrors} users={users} loadingRef={spinnerRef} />
            </Route>

            <Route path="/albums/:userId">
              <UserAlbums albums={albums} error={albumErrors} users={users} loadingRef={spinnerRef} />
            </Route>

            <Route path="/users/:userId">
              <UserDetails users={users} error={userErrors} loadingRef={spinnerRef} />
            </Route>

            <Route>
              <NotFound loadingRef={spinnerRef} />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
