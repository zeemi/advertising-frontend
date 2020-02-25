import React from 'react';
import {mount, shallow} from 'enzyme';
import Filters from './Filters';
import apiClient from '../../helpers/apiClient';


jest.mock('../../helpers/apiClient', () => ({getMetrics: jest.fn()}));

describe('<Filters>', function () {
  beforeEach(function () {
    apiClient.getMetrics.mockReset();
  });

  it('should render apply button', function () {
    expect(shallow(<Filters/>)).toMatchSnapshot()
  });

  it('should call fetch metrics', function () {
    const wrapper = mount(<Filters setIsFetching={()=>{}} setMetrics={()=>{}}/>);
    expect(apiClient.getMetrics).toHaveBeenCalledWith([], [])
  });

  it('should call fetch metrics on button "apply" click', function () {
    const wrapper = mount(<Filters setIsFetching={()=>{}} setMetrics={()=>{}}/>);
    apiClient.getMetrics.mockReset();
    wrapper.find('button').simulate('click');
    expect(apiClient.getMetrics).toHaveBeenCalledWith([], [])
  });

});