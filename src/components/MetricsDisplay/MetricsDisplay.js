import React, {useState} from 'react';
import Chart from '../Chart/Chart';
import Filters from '../Filters/Filters';
import './MetricsDisplay.css';

const MetricsDisplay = () => {
  const [metrics, setMetrics] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  return <div className={'MetricsDisplay'}>
    <div className={'filters'}><Filters isFetching={isFetching} setIsFetching={setIsFetching} setMetrics={setMetrics}/></div>
    <div className={'chart'}><Chart isFetching={isFetching} metrics={metrics}/></div>
  </div>
};

export default MetricsDisplay;