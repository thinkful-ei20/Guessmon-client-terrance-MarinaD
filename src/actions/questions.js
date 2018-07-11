
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


/***** POST ANSWER ******/
export const REQUEST_ANSWER = 'REQUEST_ANSWER';
export const requestAnswer = () => {
  return {
    type: REQUEST_ANSWER 
  };
};

export const ANSWER_SUCCESS = 'ANSWER_SUCCESS';
export const answerSuccess = result => {
  return {
    type: ANSWER_SUCCESS,
    result
  };
};

export const ANSWER_ERROR = 'ANSWER_ERROR';
export const answerError = error => {
  return {
    type: ANSWER_ERROR,
    error
  };
};

export const RESET_RESULT = 'RESET_RESULT';
export const resetResult = () => {
  return {
    type: RESET_RESULT
  };
};

export const postAnswer = (question, answer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;
  dispatch(requestAnswer());
  return fetch(`${API_BASE_URL}/questions/${userId}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${authToken}`
    },
    body: JSON.stringify({
      question,
      userAnswer: answer
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(result => dispatch(answerSuccess(result)))
    .catch(err => {
      dispatch(answerError(err));
    });
};

/***** GET QUESTION ******/

export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = question => {
  return {
    type: QUESTION_SUCCESS,
    question
  };
};

export const fetchQuestion = () => (dispatch, getState) =>{
  dispatch(requestAnswer());
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;
  return fetch(`${API_BASE_URL}/questions/${userId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${authToken}`
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(result => dispatch(questionSuccess(result)))
    .catch(err => {
      console.log(err);
      dispatch(answerError(err));
    });
};
