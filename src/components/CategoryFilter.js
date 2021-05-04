import React from 'react';
import PropTypes from 'prop-types';
import { options } from '../containers/Booksform';

const CategoryFilter = ({ onSelect }) => (
  // const [category, setCategory] = useState('All');

  // const handleChange = (e) => {
  // console.log(e.target.value);
  //   setCategory(e.target.value);
  //   onSelect(category);
  // };

  <div className="input-field">
    <select name="category" onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled>
        Select Book
      </option>
      {['All', ...options].map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
    {/* <p>{category}</p> */}
  </div>
);

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
