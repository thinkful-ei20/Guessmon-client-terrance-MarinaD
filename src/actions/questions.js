
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// to 'post' to /api/questions include a question object and the userAnswer

// see the next question
// submit an answer to that questions
// see the results to that answer


export const postAnswer = (answer, auth) => dispatch => {
  return fetch(`${API_BASE_URL}/questions/${auth}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(answer)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      // add better err handling
      console.log(reason, message, location);
    });
};