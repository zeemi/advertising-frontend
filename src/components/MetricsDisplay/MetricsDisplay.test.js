import React from 'react';
import {shallow} from 'enzyme';
import MetricsDisplay from './MetricsDisplay';

describe('<MetricsDisplay>', function () {
  it('should render filters and chart', function () {
    expect(shallow(<MetricsDisplay/>)).toMatchSnapshot()
  });
});