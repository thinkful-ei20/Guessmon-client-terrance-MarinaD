export const PICK_BUDDY = 'PICK_BUDDY';
export const pickBuddy = buddy => {
  return {
    type: PICK_BUDDY,
    buddy
  };
};

export const OPEN_BUDDIES = 'OPEN_BUDDIES';
export const openBuddies = () => {
  return {
    type: OPEN_BUDDIES
  };
};

export const CLOSE_BUDDIES = 'CLOSE_BUDDIES';
export const closeBuddis = () => {
  return {
    type: CLOSE_BUDDIES
  };
};