import { setAuthToken, SET_AUTH_TOKEN, clearAuth, CLEAR_AUTH, authRequest, AUTH_REQUEST, authSuccess, AUTH_SUCCESS, authError, AUTH_ERROR } from "../actions/auth";

describe('Set Auth Token Action', () => {
  it('should return the action', () => {
    const token = 'test token';
    const action = setAuthToken(token);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(token);
  });
});

describe('Clear Auth Token Action', () => {
  it('should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('Auth Request Action', () => {
  it('should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('Auth Success Action', () => {
  it('should return the action', () => {
    const currentUser = 'test user';
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('Auth Error Action', () => {
  it('should return the action', () => {
    const error = 'test error';
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});
