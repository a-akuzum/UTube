import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  let sideFunc = props.expand ?
  props.collapseSidebar : props.expandSidebar;
  
  if (props.useModal) sideFunc = props.modal ?
    props.closeModal : props.openModal;
  
  return (
    <div className=''>
      <div className=''>
        <div
          className=''
          onClick={sideFunc}>
          <i className=""></i>
        </div>

        <div className=''>
          <Link to='/' className=''>
            <i className=""></i>
            <span className=''>UTube</span>
          </Link>
        </div>
      </div>


      <div className=''>
        <div className="">
          <Link to='/upload' >
              <i className=""></i>
          </Link>
        </div>
        <GreetingContainer />
      </div>
    </div>
  );
};

export default Nav;