import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

describe('<Header>', function () {
  it('should render proper text', function () {
    expect(shallow(<Header/>)).toMatchSnapshot();
  });
});