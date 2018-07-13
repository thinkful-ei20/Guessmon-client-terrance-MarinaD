import { openAbout, OPEN_ABOUT, closeAbout, CLOSE_ABOUT } from '../actions/about';

describe('Open About Action', () => {
  it('should return the action', () => {
    const action = openAbout();
    expect(action.type).toEqual(OPEN_ABOUT);
  });
});

describe('Close About Action', () => {
  it('should return the action', () => {
    const action = closeAbout();
    expect(action.type).toEqual(CLOSE_ABOUT);
  });
});