import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MetricsDisplay from "./components/MetricsDisplay/MetricsDisplay";

function App() {
  return (
    <div className="App">
      <h1>Adverity Advertising Data ETL-V Challenge</h1>
      <Header/>
      <MetricsDisplay/>
    </div>
  );
}

export default App;
