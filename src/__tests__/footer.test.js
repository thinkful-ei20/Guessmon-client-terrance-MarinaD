import React from 'react';
import {shallow, mount} from 'enzyme';

import MainFooter from '../components/app';

describe('<MainFooter />', () => {
  it ('Renders without crashing', () => {
    shallow(<MainFooter />);
  });
});