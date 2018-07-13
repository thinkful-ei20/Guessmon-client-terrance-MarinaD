import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration-page.css';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's main-page
  if (props.loggedIn) {
    return <Redirect to="/main-page" />;
  }
  return (
    <main>
      <section className="home-section">
        <h2 className="register-title">Create Your Trainer</h2>
        <RegistrationForm />
        <Link to="/"><button className="login-btn btn-highlight">Login</button></Link>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
