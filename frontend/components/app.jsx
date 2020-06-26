import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash';


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/' component={Splash} />
        <Redirect to='/' component={Splash} />
      </Switch>
    </div>
  )
}

export default App;