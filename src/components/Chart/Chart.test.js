import React from 'react';
import {shallow} from 'enzyme';
import Chart from './Chart';

describe('<Chart>', function () {
  it('should render chart using given data', function () {
    expect(shallow(<Chart metrics={[]}/>)).toMatchSnapshot()
  });
});