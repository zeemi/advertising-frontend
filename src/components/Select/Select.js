import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const Select = ({options, selectedOptions, setSelectedOptions}) => {
  const handleChange = selectedOptions => {
    setSelectedOptions(selectedOptions || []);
  };

  return <ReactSelect
    placeholder={'All'}
    isMulti
    value={selectedOptions}
    onChange={handleChange}
    options={options}

  />

};

Select.propTypes = {
  setSelectedOptions: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string
    })
  ),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string
    })
  ),
};

export default Select;