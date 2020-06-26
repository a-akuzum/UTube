import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

  if (props.currentUser) {
    return (
      <div className="">
        <button 
          className=''
          onClick={props.logout} >
          <span className=''>Log Out</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="">
        <Link className='' to='/login'>
          <p className="">SIGN IN</p>
        </Link>
      </div>
    );
  }
};

export default Greeting;