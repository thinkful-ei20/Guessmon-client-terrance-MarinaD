import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestion} from '../actions/questions';
import QuestionCard from './question-card';
import requiresLogin from './requires-login';

export class MainPage extends React.Component {

  render() {
    // find a way to redirect to registration on logout    
    if (!this.props.loggedIn){
      return <div>Loading</div>;
    }
    
    if (this.props.error){
      return <div>{this.props.error.error}</div>;
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

export default requiresLogin()(connect(mapStateToProps)(MainPage));