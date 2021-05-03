import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { options } from '../containers/Booksform';

const CategoryFilter = ({ onSelect }) => {
  const [category, setCategory] = useState('All');

  const handleChange = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
    onSelect(category);
  };

  return (
    <div className="input-field">
      <select name="category" onChange={handleChange} value={category}>
        <option value="" disabled>
          Select Book
        </option>
        {options.map((category) => (
          <option value={category} key={Math.random()}>
            {category}
          </option>
        ))}
      </select>
      <p>{category}</p>
    </div>
  );
};

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
