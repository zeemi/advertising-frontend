import React from 'react';


const withDomainData = (WrappedComponent) => (props) => {
  const options = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' },
  ];

  return <WrappedComponent {...props} options={options}/>
};

export default withDomainData;