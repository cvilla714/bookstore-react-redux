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
    chapters: 0,
    currentChapter: 0,
    author: '',
    chapterTitle: '',
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
      chapters: 0,
      currentChapter: 0,
      author: '',
      chapterTitle: '',
    });
  };

  return (
    <div className="">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="title" className="form-label">
            Title
            <input
              type="text"
              id="title"
              name="name"
              className="ml-2"
              onChange={handleChange}
              value={info.name}
            />
          </label>
          <div>
            <select
              name="category"
              className="form-select p-1 ml-2"
              onChange={handleChange}
              value={info.category}
            >
              <option value="" disabled>
                Category
              </option>
              {options.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="title" className="form-label ml-2">
            Chapters
            <input
              type="number"
              id="chapter"
              name="chapters"
              className="ml-2"
              onChange={handleChange}
              value={info.chapter}
            />
          </label>
          <label htmlFor="title" className="form-label ml-2">
            Current chapter
            <input
              type="number"
              id="currentChapter"
              className="ml-2"
              name="currentChapter"
              onChange={handleChange}
              value={info.currentChapter}
            />
          </label>
          <label htmlFor="chapterTitle" className="form-label ml-2">
            Chapter title
            <input
              type="text"
              id="chapterTitle"
              className="ml-2"
              name="chapterTitle"
              onChange={handleChange}
              value={info.chapterTitle}
            />
          </label>
          <label htmlFor="author" className="form-label ml-2">
            Author
            <input
              type="text"
              id="author"
              className="ml-2"
              name="author"
              onChange={handleChange}
              value={info.author}
            />
          </label>
          <button type="submit" className="btn-primary ml-2">
            Add Book
          </button>
        </div>
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
