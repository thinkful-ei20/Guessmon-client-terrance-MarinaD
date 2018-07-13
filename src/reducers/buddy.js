import { PICK_BUDDY, CLOSE_BUDDIES, OPEN_BUDDIES } from '../actions/buddy';

const initialState = {
  isOpen: false,
  pokemon: 'Pikachu'
};

export default function buddyReducer(state=initialState, action){
  if (action.type === PICK_BUDDY){
    return {
      ...state,
      pokemon : action.buddy
    };
  }

  if (action.type === CLOSE_BUDDIES){
    return {
      ...state,
      isOpen: false
    };
  }

  if (action.type === OPEN_BUDDIES) {
    return {
      ...state,
      isOpen: true
    };
  }

  return state;
}