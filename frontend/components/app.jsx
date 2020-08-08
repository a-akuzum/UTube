import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash';
import Modal from './modal/modal'


const App = () => {
  return (
    <div>
      {/* <Modal /> */}
      
      <Switch>
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Redirect to='/'/>
        <Route path='/' component={Splash} />
      </Switch>
      
    </div>
  )
}

export default App;