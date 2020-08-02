import { Link } from 'react-router-dom';
import React from 'react';

const Greeting = (props) => {

  if (props.currentUser) {
    return (
      <div>
        <div>
          <span>welcome {props.currentUser.username}</span>
        </div>
      <div className="logout-container">
        <button className='logout-button' onClick={props.logout} >
          <span className='logout-button-text'>Log Out</span>
        </button>
      </div>
    </div>
    )
  } else {
    return (
      <div className="login-button-container">
        <Link className='login-nav' to='/login'>
          <i class="fas fa-sign-in-alt"></i>
          <p className="login-button-text">SIGN IN</p>
        </Link>
      </div>
    );
  }
};

export default Greeting;