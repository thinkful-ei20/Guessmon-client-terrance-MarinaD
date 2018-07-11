import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import { openAbout, closeAbout } from '../actions/about';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's main-page
  if (props.loggedIn) {
    return <Redirect to="/main-page" />;
  }
  let about = <div></div>;
  if (props.isOpen){
    about = 
    <div>
      <h2>The Pokemon Learning Game!</h2>
      <p> Guess the pokemon's name based on the silluette.</p>
      <button
        onClick={()=>props.dispatch(closeAbout())}
      >close</button>
    </div>;
  }
  return (
    <div className="home">
      <button
        onClick={()=> props.dispatch(openAbout())}
      >What is this?</button>
      {about}
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  isOpen: state.about.isOpen
});

export default connect(mapStateToProps)(LandingPage);
