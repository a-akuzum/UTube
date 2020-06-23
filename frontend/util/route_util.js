import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Redirect} from 'react-router-dom'

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route 
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props}/> : <Redirect to='/'/>
        }
    />
);

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.currentUserId)}
};

export const AuthRoute = withRouter(
    connect(mapStateToProps, nill)(Auth)
);
