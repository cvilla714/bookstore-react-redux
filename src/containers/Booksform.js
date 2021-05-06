import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

const uniqid = require('uniqid');

export const options = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const Booksform = ({ createBook }) => {
  const [info, setInfo] = useState({
    id: uniqid.process(),
    name: '',
    category: '',
    chapters: 1,
    currentChapter: 1,
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
          <div className="col s12">
            <label htmlFor="title" className="form-label col s4">
              Title
              <input
                type="text"
                id="title"
                name="name"
                className="ml-2"
                onChange={handleChange}
                value={info.name}
                required
              />
            </label>
            <div className="col s4">
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
            <label htmlFor="title" className="form-label ml-2 col s4">
              Chapters
              <input
                type="number"
                id="chapter"
                name="chapters"
                className="ml-2"
                onChange={handleChange}
                value={info.chapters}
                required
              />
            </label>
          </div>
          <div className="cols12">
            <label htmlFor="title" className="form-label ml-2 col s4">
              Current chapter
              <input
                type="number"
                id="currentChapter"
                className="ml-2"
                name="currentChapter"
                onChange={handleChange}
                value={info.currentChapter}
                required
              />
            </label>
            <label htmlFor="chapterTitle" className="form-label ml-2 col s4">
              Chapter title
              <input
                type="text"
                id="chapterTitle"
                className="ml-2"
                name="chapterTitle"
                onChange={handleChange}
                value={info.chapterTitle}
                required
              />
            </label>
            <label htmlFor="author" className="form-label ml-2 col s4">
              Author
              <input
                type="text"
                id="author"
                className="ml-2"
                name="author"
                onChange={handleChange}
                value={info.author}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="waves-effect waves-light btn blue right"
          >
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
