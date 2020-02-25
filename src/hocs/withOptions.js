import React, {useState, useEffect} from 'react';
import apiClient from '../helpers/apiClient';

const withOptions = (WrappedComponent, apiMethod) => (props) => {
  const [options, setOptions] = useState([]);
  useEffect(()=>{
    const fetch = async () => {
      const response = await apiClient[apiMethod]();
      setOptions(response.map(option => ({value: option.id, label: option.name})))
    };
    fetch()
  }, []);

  return <WrappedComponent {...props} options={options}/>
};

export default withOptions;