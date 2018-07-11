import React from 'react';
import {connect} from 'react-redux';
import { postAnswer } from '../actions/questions';
import Scoring from './scoring.js';
import { resetResult, fetchQuestion } from '../actions/questions';

class QuestionCard extends React.Component {

  submitForm(e){
    e.preventDefault();
    const answer = (document.getElementById('user_guess').value);
    this.props.dispatch(postAnswer(this.props.question,answer));
  }

  onGuess() {
    this.props.dispatch(resetResult());
    this.props.dispatch(fetchQuestion());
  }

  render() {
    let displayMsg;
    let form;
    if (this.props.result === null) {
      displayMsg = 'Who\'s that pokémon?';
      
      form = <form 
        onSubmit={e=>this.submitForm(e)}
        className="card-form">
        <p>{displayMsg}</p>
        <input type="text" className="user-guess" name="user_guess" id="user_guess"/>
        <button type="submit" className="answer-sub-btn">Guess!</button>
      </form>;
    }

    let nextBtn;
    if (this.props.result !== null) {
      nextBtn = <button onClick={() => this.onGuess()}>Next</button>;
    }

    return (
      <main>
        <section className="main-section">
          <div className="card">
            <img className="pokemon-img" src={this.props.question.silhouette} alt="An unknown pokemon!" />
            <Scoring />
          </div>
          <div>
            {this.props.result === null ? form : nextBtn}
          </div>
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
