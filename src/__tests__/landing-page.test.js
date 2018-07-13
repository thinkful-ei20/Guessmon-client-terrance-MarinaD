import React from 'react';
import {shallow, mount} from 'enzyme';

import {LandingPage} from '../components/landing-page';

describe('<Landing Page />', () => {
  it ('Renders without crashing', () => {
    shallow(<LandingPage />);
  });
});