import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import components
import AppNav from './components/AppNav.js'
import Users from './components/Users.js'
import Photos from './components/Photos.js'
import Comments from './components/Comments.js'
import NotFound from './components/NotFound.js'

function App() {
  return (
    <div className="React-Nav-App">
      <Router>
        {/* The custom AppHeader component located in ./components */}
        <AppNav />

        {/* The Main Part of the application, users route is '/' */}
        <main>
          <Switch>
            <Route exact path="/"><Users /></Route>
            <Route path="/photos"><Photos /></Route>
            <Route path="/comments"><Comments /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
