import React, {useEffect, useState} from 'react';
import apiClient from "../../helpers/apiClient";
import Select from "../Select/Select";
import withDomainData from '../../hocs/withDomainData';

const DataSourcesSelect = withDomainData(Select);
const CampaignsSelect = withDomainData(Select);

const Filters = ({isFetching, setIsFetching, setMetrics}) => {
  const [selectedDataSource, setSelectedDataSource] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);

  const fetchMetrics = async () => {
    setIsFetching(true);
    const metrics = await apiClient.getMetrics(selectedCampaigns.map(campaign=>campaign.value), selectedDataSource.map(source => source.value));
    setMetrics(metrics);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchMetrics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    Filters
    <CampaignsSelect setSelectedOptions={setSelectedCampaigns} selectedOptions={selectedCampaigns}/>
    <DataSourcesSelect setSelectedOptions={setSelectedDataSource} selectedOptions={selectedDataSource}/>
    <button onClick={fetchMetrics} disabled={isFetching}>Apply</button>
  </div>
};

export default Filters;