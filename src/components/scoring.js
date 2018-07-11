import React from 'react';
import { connect } from 'react-redux';

class Scoring extends React.Component {
  render() {

    let percentage;
    if (this.props.result === true) {
      percentage = 'Your current percentage for this question is ';
      percentage += Math.round((this.props.correct + 1) / (this.props.total + 1) * 100);
      percentage +=  '%.';
    } else if (this.props.result === false) {
      percentage = 'Your current percentage for this question is ';
      percentage += Math.round(this.props.correct / (this.props.total + 1) * 100);
      percentage +=  '%.';
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