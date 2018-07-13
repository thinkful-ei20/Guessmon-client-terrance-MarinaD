import questionReducer from "../reducers/questions";
import { requestAnswer, answerSuccess, questionSuccess, answerError, resetResult } from "../actions/questions";

describe('Questions Reducer', () => {
  it('Should set the initial state when nothing is passed in', ()=>{
    const state = questionReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      currentQuestion : {},
      result: null,
      loading: false,
      error: null
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = questionReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  it ('Should return loading', ()=>{
    let state;
    state = questionReducer(state, requestAnswer());
    expect(state).toEqual({
      currentQuestion : {},
      result: null,
      loading: true,
      error: null
    });
  });

  it ('Should return result', ()=>{
    let state;
    let result = {result : 'testResult'};
    state = questionReducer(state, answerSuccess(result));
    expect(state).toEqual({
      currentQuestion : {},
      result: 'testResult',
      loading: false,
      error: null
    });
  });

  it ('Should return question', ()=>{
    let state;
    let question = 'test question';
    state = questionReducer(state, questionSuccess(question));
    expect(state).toEqual({
      currentQuestion : question,
      result: null,
      loading: false,
      error: null
    });
  });

  it ('Should return error', ()=>{
    let state;
    let error = 'test error';
    state = questionReducer(state, answerError(error));
    expect(state).toEqual({
      currentQuestion : {},
      result: null,
      loading: false,
      error
    });
  });

  it ('Should return reset', ()=>{
    let state;
    state = questionReducer(state, resetResult());
    expect(state).toEqual({
      currentQuestion : {},
      result: null,
      loading: false,
      error: null
    });
  });
});