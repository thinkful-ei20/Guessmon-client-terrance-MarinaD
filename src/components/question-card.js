import React from 'react';
import {connect} from 'react-redux';
import { postAnswer } from '../actions/questions';
import Scoring from './scoring.js';

class QuestionCard extends React.Component {

  submitForm(e){
    e.preventDefault();
    const answer = (document.getElementById('user_guess').value);
    this.props.dispatch(postAnswer(this.props.question,answer));
  }

  render() {
    let displayMsg;
    if (this.props.result === null) {
      displayMsg = 'Who\'s that pokémon?';
    }

    return (
      <main>
        <section className="main-section">
          <div className="card">
            <img className="pokemon-img" src={this.props.question.silhouette} alt="An unknown pokemon!" />
            <Scoring />
          </div>
          <form 
            onSubmit={e=>this.submitForm(e)}
            className="card-form">
            <p>{displayMsg}</p>
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
    question: state.data.currentQuestion,
    result: state.data.result
  };
};

export default connect(mapStateToProps)(QuestionCard);
