import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
import NotFound from './components/NotFound.js'

function App() {

  const [users, userErrors] = useJSONAPIState({ route: 'users' })
  const [posts, postErrors] = useJSONAPIState({ route: 'posts' })
  const [albums, albumErrors] = useJSONAPIState({ route: 'albums' })

  return (
    <div className="React-Nav-App">
      <Router>
        {/* The custom AppHeader component located in ./components */}
        <AppNav />

        {/* The Main Part of the application, users route is '/' */}
        <main>

          <Switch>
            <Route exact path="/">
              <UserList users={users} error={userErrors} />
            </Route>

            <Route exact path="/albums">
              <Albums albums={albums} error={albumErrors} />
            </Route>

            <Route exact path="/posts">
              <Posts posts={posts} error={postErrors} />
            </Route>

            <Route path="/posts/:userId">
              <UserPosts posts={posts} error={postErrors} />
            </Route>

            <Route path="/albums/:userId">
              <UserAlbums albums={albums} error={albumErrors} />
            </Route>

            <Route path="/details/:userId">
              <UserDetails users={users} error={userErrors} />
            </Route>

            <Route>
              <NotFound />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
