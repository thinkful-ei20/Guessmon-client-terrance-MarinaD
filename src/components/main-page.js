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
      <main>
        <section className="main-section">
          <div className="card">
            <img className="pokemon-img" src="https://vignette.wikia.nocookie.net/pokemon/images/6/6b/175Togepi.png/revision/latest/scale-to-width-down/200?cb=20140329013336" alt="The Pokemon Togepi"/>
            <p>display text will go here</p>
          </div>
          <form className="card-form">
            <input type="text" className="user-guess" name="user_guess"/>
            <button type="submit" className="answer-sub-btn">Guess!</button>
          </form>
        </section>
      </main>
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