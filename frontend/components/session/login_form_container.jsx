 
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import Login from './login_form';

const mSTP = ({ errors }) => (
    {
        errors: errors.session,
        navLink: <Link to="/signup">Not Valid Account Information - Sign Up Here!</Link>,
    }
);

const mDTP = dispatch => (
    {
        loginUser: user => dispatch(login(user)),
        logoutUser: ()=>dispatch(logout())
    }
);

export default connect(mSTP, mDTP)(Login);