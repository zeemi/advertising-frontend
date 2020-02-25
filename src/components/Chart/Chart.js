import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import './Chart.css';

const Chart = ({metrics, isFetching}) => {

  return <div className={'Chart'}>
    <h3>Metrics for chosen data sources and campaigns</h3>
    <LineChart width={800} height={500} data={metrics}
               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey={'date'}/>
      <YAxis width={100} yAxisId='left' label={{value: 'Clicks', angle: -90, dx: -20}}/>
      <YAxis width={100} yAxisId='right' orientation='right'
             label={{value: 'Impressions', angle: 90, margin: 100, dx: 50}}/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <Line yAxisId='left' type="monotone" stroke="#8884d8" dataKey={'clicks'} dot={false}/>
      <Line yAxisId='right' type="monotone" stroke="#82ca9d" dataKey={'impressions'} dot={false}/>
    </LineChart>
    {isFetching ? 'loading...' : null}

  </div>;
};

export default Chart;