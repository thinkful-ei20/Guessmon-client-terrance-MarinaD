import { pickBuddy, PICK_BUDDY, openBuddies, OPEN_BUDDIES, closeBuddis, CLOSE_BUDDIES } from "../actions/buddy";


describe('Pick Buddy Action', () => {
  it('should return the action', () => {
    const buddy = 'test buddy';
    const action = pickBuddy(buddy);
    expect(action.type).toEqual(PICK_BUDDY);
    expect(action.buddy).toEqual(buddy);
  });
});

describe('Open Buddy Action', () => {
  it('should return the action', () => {
    const action = openBuddies();
    expect(action.type).toEqual(OPEN_BUDDIES);
  });
});

describe('Close Buddy Action', () => {
  it('should return the action', () => {
    const action = closeBuddis();
    expect(action.type).toEqual(CLOSE_BUDDIES);
  });
});