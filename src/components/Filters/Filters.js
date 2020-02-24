import React from 'react';
import apiClient from "../../helpers/apiClient";


const Filters = ({isFetching, setIsFetching, setMetrics}) => {
  const handleOnClick = async () => {
    setIsFetching(true);
    const metrics = await apiClient.getMetrics([], []);
    setMetrics(metrics);
    setIsFetching(false);
  };

  return <div>
    Filters
    <button onClick={handleOnClick} disabled={isFetching}>Apply</button>
  </div>
};

export default Filters;