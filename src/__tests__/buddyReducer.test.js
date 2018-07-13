import buddyReducer from "../reducers/buddy";
import { openBuddies, closeBuddis, pickBuddy } from "../actions/buddy";

describe('buddyReducer', () => {

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = buddyReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      isOpen: false,
      pokemon: 'Pikachu'
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = buddyReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  it('Should set isOpen to true', () => {
    let state;
    state = buddyReducer(state, openBuddies());
    expect(state).toEqual({
      isOpen : true,
      pokemon: 'Pikachu'
    });
  });

  it('Should set isOpen to false', () => {
    let state;
    state = buddyReducer(state, closeBuddis());
    expect(state).toEqual({
      isOpen: false,
      pokemon: 'Pikachu'
    });
  });

  it('Should set buddy to pokemon', () => {
    let state;
    let buddy = 'test buddy';
    state = buddyReducer(state, pickBuddy(buddy));
    expect(state).toEqual({
      isOpen: false,
      pokemon: buddy
    });
  });
});