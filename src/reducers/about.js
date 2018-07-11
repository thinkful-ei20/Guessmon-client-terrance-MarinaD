import { OPEN_ABOUT, CLOSE_ABOUT } from '../actions/about';

const initialState = {
  isOpen: false
};

export default function aboutReducer(state = initialState, action){
  if (action.type === OPEN_ABOUT){
    return {
      ...state,
      isOpen: true
    };
  }

  if (action.type === CLOSE_ABOUT){
    return {
      ...state,
      isOpen: false
    };
  }
  return state;
}