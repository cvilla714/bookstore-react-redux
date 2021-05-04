import React from 'react';
import PropTypes from 'prop-types';
import { options } from '../containers/Booksform';

const CategoryFilter = ({ onSelect }) => (
  <div className="input-field">
    <select name="category" onChange={({ target }) => onSelect(target.value)}>
      {['All', ...options].map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
