import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App>', function () {
  it('should render header and metric display', function () {
    expect(shallow(<App/>)).toMatchSnapshot()
  });
});