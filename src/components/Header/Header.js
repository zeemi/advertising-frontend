import React from 'react';
import './Header.css'

const Header = ()=>{
  return <div className={'Header'}>
    <h3>Select zero to N Datasources</h3>
    <h3>Select zero to N Campaigns</h3>
    <div>(where zero means "All")</div>
    <h3>Hitting "Apply", filters the chart to show a timeseries for both Click and Impressions for given Datasources and Campaigns - logical AND</h3>
  </div>
};

export default Header;