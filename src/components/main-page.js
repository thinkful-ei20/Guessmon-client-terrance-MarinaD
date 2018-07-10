import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {postAnswer} from '../actions/questions';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    // find a way to redirect to registration on logout
    console.log(this.props.authToken);


    return (
      <div>
        <p>Just testing this out.</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const {currentUser} = state.auth;
  return {
    loggedIn: state.auth.currentUser !== null,
    authToken: state.auth.authToken,
    // username: state.auth.currentUser.username,
    // name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
  
};

export default connect(mapStateToProps)(MainPage);