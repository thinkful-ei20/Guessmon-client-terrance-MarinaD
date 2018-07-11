import { REQUEST_ANSWER, ANSWER_SUCCESS, ANSWER_ERROR, QUESTION_SUCCESS, RESET_RESULT } from '../actions/questions';

const initialState = {
  currentQuestion : {},
  result: null,
  loading: false,
  error: null
};

export default function questionReducer(state = initialState, action){
  if (action.type === REQUEST_ANSWER){
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === ANSWER_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      result: action.result.result
    };
  }

  if (action.type === QUESTION_SUCCESS){
    return {
      ...state,
      loading: false,
      currentQuestion: action.question
    };
  }

  if (action.type === ANSWER_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }

  if (action.type === RESET_RESULT){
    return {
      ...state,
      result: null
    };
  }
  return state;
}