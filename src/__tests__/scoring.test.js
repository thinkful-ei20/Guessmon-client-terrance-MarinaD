import React from 'react';
import {shallow, mount} from 'enzyme';

import {Scoring} from '../components/scoring';

describe('<Scoring />', () => {
  it ('Renders without crashing', () => {
    shallow(<Scoring />);
  });
});