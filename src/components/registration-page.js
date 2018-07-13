import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's main-page
  if (props.loggedIn) {
    return <Redirect to="/main-page" />;
  }
  return (
    <div className="home">
      <h2>Register for Foo App</h2>
      <RegistrationForm />
      <Link to="/"><button className="login-btn btn-highlight">Login</button></Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
