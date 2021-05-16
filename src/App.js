import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import Register from './pages/Register'
import notFound from './pages/404'

import firebase from './utils/firebase'

function App() {
  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuthenticated: true, isLoading: false });
      } else {
        // No user is signed in.
        setValues({ isAuthenticated: false, isLoading: false });
      }
      console.log("useEffect", user);
    });
  }, [])

  if (values.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <PublicRoute
          component={Login}
          path="/login"
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <PrivateRoute
          component={Home}
          isAuthenticated={values.isAuthenticated}
          path="/home"
        />
        <PublicRoute
          component={Profile}
          path='/profile'
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <PublicRoute
          component={Aboutus}
          path='/aboutus'
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <PublicRoute
          component={Register}
          path='/register'
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <Route
          component={notFound}
        />
      </Switch>
    </Router>
  );
}

export default App;
