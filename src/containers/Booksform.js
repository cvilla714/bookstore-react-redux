/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

const uniqid = require('uniqid');

export const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const Booksform = ({ createBook }) => {
  const [info, setInfo] = useState({
    id: uniqid.process(),
    name: '',
    category: '',
  });

  const handleChange = ({ target }) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(info);
    setInfo({
      id: uniqid.process(),
      name: '',
      category: '',
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="name" onChange={handleChange} value={info.name} />
        </label>
        <div className="row">
          <div className="input-field">
            <select name="category" onChange={handleChange} value={info.category}>
              <option value="" disabled>
                Select Book
              </option>
              {options.map((category) => (
                <option value={category} key={Math.random()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

Booksform.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const createBook = (book) => dispatch(createBookAction(book));

  return { createBook };
};

export default connect(null, mapDispatchToProps)(Booksform);
