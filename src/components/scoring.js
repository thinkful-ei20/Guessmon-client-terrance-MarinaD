import React from 'react';
import { connect } from 'react-redux';

class Scoring extends React.Component {
  render() {

    let percentage;
    if (this.props.result !== null) {
      percentage = 'Your current percentage for this question is ';
      percentage += this.props.total / this.props.correct;
      percentage += '&percnt.';
    }

    return (
      <div className="scoring-container">
        <p className="percentage">{percentage}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    correct: state.data.currentQuestion.correct,
    total: state.data.currentQuestion.total,
    result: state.data.result 
  };
};

export default connect(mapStateToProps)(Scoring);