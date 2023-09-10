import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onFilter, filter }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={onFilter} type="text" value={filter} />
    </div>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
