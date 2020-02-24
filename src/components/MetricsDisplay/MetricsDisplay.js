import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import Filters from '../Filters/Filters';

const MetricsDisplay = () => {
  const [metrics, setMetrics] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  return <React.Fragment>
    <Filters isFetching={isFetching} setIsFetching={setIsFetching} setMetrics={setMetrics}/>
    <Chart isFetching={isFetching} metrics={metrics}/>
  </React.Fragment>
};

export default MetricsDisplay;