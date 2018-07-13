import reducer from "../reducers/auth";
import { setAuthToken, clearAuth, authRequest, authSuccess, authError } from "../actions/auth";

describe('Auth Reducer', () => {

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = reducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = reducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  it('Should return the correct state', () => {
    let state;
    let token = 'test token';
    state = reducer(state, setAuthToken(token));
    expect(state).toEqual({
      authToken: token,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should return the correct state', () => {
    let state;
    state = reducer(state, clearAuth());
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should return the correct state', () => {
    let state;
    state = reducer(state, authRequest());
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: true,
      error: null  
    });
  });
  
  it('Should return the correct state', () => {
    let state;
    let currentUser = 'test user';
    state = reducer(state, authSuccess(currentUser));
    expect(state).toEqual({
      authToken: null,
      currentUser,
      loading: false,
      error: null  
    });
  });

  it('Should return the correct state', () => {
    let state;
    let error = 'test error';
    state = reducer(state, authError(error));
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error 
    });
  });

});