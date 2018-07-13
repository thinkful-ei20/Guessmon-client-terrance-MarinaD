import React from 'react';
import {connect} from 'react-redux';
import { postAnswer } from '../actions/questions';
import Scoring from './scoring.js';
import { resetResult, fetchQuestion } from '../actions/questions';

export class QuestionCard extends React.Component {

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
    let name;
    let imageSrc = this.props.question.silhouette;
    if (this.props.result !== null) {
      nextBtn = <button onClick={() => this.onGuess()}>Next</button>;
      imageSrc = this.props.question.filledIn;
      name = <p>{this.props.question.answer}</p>;
    }

    let cardClass;
    let buddyMsg;
    if (this.props.result === true){
      cardClass = 'card-success';
      buddyMsg = `Nice! You got it! ${this.props.buddy} is happy!`;
    } else if (this.props.result === false){
      cardClass = 'card-fail';
      buddyMsg = `Uh oh, not quite. ${this.props.buddy} is sad...`;
    } else {
      cardClass = 'card-blank';
    } 
  
    return (
      <main>
        <section className="main-section">
          <div className={cardClass}>
            <img className="pokemon-img" src={imageSrc} alt="An unknown pokemon!" />
            {name}
            {buddyMsg}
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
    result: state.data.result,
    buddy: state.buddy.pokemon
  };
};

export default connect(mapStateToProps)(QuestionCard);
