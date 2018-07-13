import React from 'react';
import {shallow, mount} from 'enzyme';

import {MainPage} from '../components/main-page';

describe('<MainPage />', () => {
  it ('Renders without crashing', () => {
    shallow(<MainPage />);
  });
});