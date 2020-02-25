import React, {useEffect, useState} from 'react';
import apiClient from "../../helpers/apiClient";
import CampaignsSelect from "../Select/CampaignsSelect";
import DataSourcesSelect from "../Select/DataSourcesSelect";
import './Filters.css';

const Filters = ({isFetching, setIsFetching, setMetrics}) => {
  const [selectedDataSource, setSelectedDataSource] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);

  const fetchMetrics = async () => {
    setIsFetching(true);
    const metrics = await apiClient.getMetrics(selectedCampaigns.map(campaign => campaign.value), selectedDataSource.map(source => source.value));
    setMetrics(metrics);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchMetrics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={'Filters'}>
    <h3>Filter dimension values</h3>
    <h4>Data sources</h4>
    <DataSourcesSelect setSelectedOptions={setSelectedDataSource} selectedOptions={selectedDataSource}/>
    <h4>Campaigns</h4>
    <CampaignsSelect setSelectedOptions={setSelectedCampaigns} selectedOptions={selectedCampaigns}/>
    <div className={'button-wrapper'}><button onClick={fetchMetrics} disabled={isFetching}>Apply</button></div>
  </div>;
};

export default Filters;