import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import { openAbout, closeAbout } from '../actions/about';
import { openBuddies } from '../actions/buddy';
import { login } from '../actions/auth';
import BuddySelect from './buddySelect';
import './landing-page.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's main-page
  if (props.loggedIn) {
    return <Redirect to="/main-page" />;
  }
  let about = <div ></div>;
  let buddySelect = <div></div>;
  if (props.aboutIsOpen) {
    about =
      <div aria-live="polite" className="about-container">
        <h2 className="about-title">The Pokemon Learning Game!</h2>
        <p className="about-text"> Guess the pokemon name based on the silluette.</p>
        <button className="close-btn btn-highlight"
          onClick={() => props.dispatch(closeAbout())}
        >close</button>
      </div>;
  }

  if (props.buddyIsOpen) {
    buddySelect = <BuddySelect />;
  }



  return (
    <main>
      <section className="home-section">
        <button className=" about-btn btn-highlight"
          onClick={() => props.dispatch(openAbout())}
        >What is this?</button>
        {about}
        <button className="buddy-btn btn-highlight"
          onClick={() => props.dispatch(openBuddies())}
        >
          Pick A Buddy</button>
        {buddySelect}
        <p className="buddy-text">Your current buddy is <span>{props.buddy}.</span></p>
        <LoginForm />
        <Link to="/register"><button className="register-btn btn-highlight">Register</button></Link>
        <p>Or log in with the <a onClick={() => props.dispatch(login('demouser', 'password10'))}>
          demo </a> 
         account.</p>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  aboutIsOpen: state.about.isOpen,
  buddyIsOpen: state.buddy.isOpen,
  buddy: state.buddy.pokemon
});

export default connect(mapStateToProps)(LandingPage);
