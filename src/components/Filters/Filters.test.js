import React from 'react';
import {mount, shallow} from 'enzyme';
import Filters from './Filters';
import apiClient from '../../helpers/apiClient';
import {create, act} from 'react-test-renderer';
import {render, fireEvent, waitForElement} from '@testing-library/react'
import {act as reactDomAct} from 'react-dom/test-utils';

jest.mock('../../helpers/apiClient', () => ({
  getMetrics: jest.fn(),
  getDataSources: jest.fn().mockResolvedValue([
    {
      "id": 1,
      "name": "google"
    },
    {
      "id": 2,
      "name": "facebook"
    }]),
  getCampaigns: jest.fn().mockResolvedValue([
    {
      "id": 3,
      "name": "Summer Offer 2019 - Prio 1"
    },
    {
      "id": 4,
      "name": "Summer Offer 2019 - Prio 2"
    }])
}));


describe('<Filters>', function () {
  beforeEach(function () {
    apiClient.getMetrics.mockReset();
  });

  it('should render apply button', function () {
    expect(shallow(<Filters/>)).toMatchSnapshot()
  });

  it('should call fetch metrics', async function () {
    await act(async () => {
      create(<Filters setIsFetching={() => {
      }} setMetrics={() => {
      }}/>)
    });
    expect(apiClient.getMetrics).toHaveBeenCalledWith([], [])
  });

  it('should call fetch metrics on button "apply" click', async function () {
    let rendered;
    await reactDomAct(async () => {
      rendered = render(<Filters setIsFetching={() => {
      }} setMetrics={() => {
      }}/>)
    });

    apiClient.getMetrics.mockReset();
    fireEvent.click(rendered.getByText('Apply'));
    expect(apiClient.getMetrics).toHaveBeenCalledWith([], []);

  });


  it('should call fetch campaigns', async function () {
    await act(async () => create(<Filters setIsFetching={() => {
    }} setMetrics={() => {
    }}/>));
    expect(apiClient.getCampaigns).toHaveBeenCalled()
  });

  it('should call fetch data sources', async function () {
    await act(async () => {
      create(<Filters setIsFetching={() => {
      }} setMetrics={() => {
      }}/>)
    });
    expect(apiClient.getDataSources).toHaveBeenCalled()
  });
});