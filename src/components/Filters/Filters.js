import React, {useEffect} from 'react';
import apiClient from "../../helpers/apiClient";


const Filters = ({isFetching, setIsFetching, setMetrics}) => {
  const fetchMetrics = async () => {
    setIsFetching(true);
    const metrics = await apiClient.getMetrics([], []);
    setMetrics(metrics);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchMetrics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    Filters
    <button onClick={fetchMetrics} disabled={isFetching}>Apply</button>
  </div>
};

export default Filters;