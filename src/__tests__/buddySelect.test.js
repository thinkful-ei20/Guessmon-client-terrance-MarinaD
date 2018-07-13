import React from 'react';
import {shallow, mount} from 'enzyme';

import {BuddySelect} from '../components/buddySelect';

describe('<BuddySelect />', () => {
  it ('Renders without crashing', () => {
    shallow(<BuddySelect />);
  });
});