import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {postAnswer, fetchQuestion} from '../actions/questions';
import QuestionCard from './question-card';

class MainPage extends React.Component {
    

  submitForm(e){
    e.preventDefault();
    console.log(document.getElementById("user_guess").value);
  }

  render() {
    // find a way to redirect to registration on logout    
    if (!this.props.loggedIn){
      return <div>Loading</div>;
    }
    else {
      
    }
   
    return (
      <main>
        <section className="main-section">
          <div className="card">
            <button onClick={() => this.props.dispatch(fetchQuestion())}>Get question</button>
            <img className="pokemon-img" src={'https://vignette.wikia.nocookie.net/pokemon/images/6/6b/175Togepi.png/revision/latest/scale-to-width-down/200?cb=20140329013336'} alt="The Pokemon Togepi"/>
            <p>display text will go here</p>
          </div>
          <form className="card-form" onSubmit={e => this.submitForm(e)}>
            <input type="text" className="user-guess" name="user_guess" id="user_guess"/>
            <button type="submit" className="answer-sub-btn">Guess!</button>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    loading: state.data.loading,
    error: state.data.error,
    question: state.data.currentQuestion
  };
  
};

export default connect(mapStateToProps)(MainPage);