import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {postAnswer, fetchQuestion} from '../actions/questions';
import QuestionCard from './question-card';

class MainPage extends React.Component {
    

  submitForm(e){
    e.preventDefault();
    const answer = (document.getElementById('user_guess').value);
  }

  render() {
    // find a way to redirect to registration on logout    
    if (!this.props.loggedIn){
      return <div>Loading</div>;
    }
    
    if (this.props.error){
      return <div>{this.props.error}</div>;
    }

    if (this.props.question.answer){
      return <QuestionCard />;
    }

    return (
      <main>
        <button
          onClick={()=>this.props.dispatch(fetchQuestion())}
        >Start!</button>
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