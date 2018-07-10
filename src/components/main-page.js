import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {postAnswer, fetchQuestion} from '../actions/questions';

class MainPage extends React.Component {
    

  render() {
    // find a way to redirect to registration on logout
    if (this.props.loggedIn){
      this.props.dispatch(fetchQuestion());
      this.props.dispatch(postAnswer({
        'silhouette': 'https://vignette.wikia.nocookie.net/joke-battles/images/0/0d/Pokemon-Pikachu-Silhouette-Stencil-thumb.jpg/revision/latest?cb=20180210155820',
        'filledIn': 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
        'answer': 'pikachu',
        'correct': 0,
        'total': 0,
        'm': 1
      }, 'pikachu'));
    }

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