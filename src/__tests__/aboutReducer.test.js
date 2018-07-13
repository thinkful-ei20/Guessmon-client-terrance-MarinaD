import aboutReducer from '../reducers/about';
import { openAbout, closeAbout } from '../actions/about';

describe('aboutReducer', () => {

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = aboutReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      isOpen: false
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = aboutReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  it('Should set isOpen to true', () => {
    let state;
    state = aboutReducer(state, openAbout());
    expect(state).toEqual({
      isOpen : true
    });
  });

  it('Should set isOpen to false', () => {
    let state;
    state = aboutReducer(state, closeAbout());
    expect(state).toEqual({
      isOpen: false
    });
  });
});