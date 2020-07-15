import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>Find contacts
    <input type='text' value={value} onChange={onChange}></input>
  </label>
);

export default Filter;