import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

const uniqid = require('uniqid');

const initialInfo = {
  id: uniqid.process(),
  name: '',
  category: '',
  chapters: 1,
  currentChapter: 1,
  author: '',
  chapterTitle: '',
};

const initialErrors = {
  name: '',
  category: '',
  author: '',
  chapterTitle: '',
};

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
  const [errors, setErrors] = useState(initialErrors);

  const [info, setInfo] = useState(initialInfo);

  const validate = () => {
    let name = '';
    let category = '';
    let author = '';
    let chapterTitle = '';

    if (!info.name) name = 'Empty name not allowed';
    if (!info.category) category = 'Empty category not allowed';
    if (!info.author) author = 'Empty author not allowed';
    if (!info.chapterTitle) chapterTitle = 'Empty Chapter title not allowed';

    if (name || category || chapterTitle || author) {
      setErrors((prev) => ({
        ...prev,
        name,
        category,
        author,
        chapterTitle,
      }));
      return false;
    }

    setErrors(initialErrors);

    return true;
  };

  const handleChange = ({ target }) => {
    let numberValidation = 1;
    if (
      (target.name === 'chapters' || target.name === 'currentChapter')
      && target.value < 1
    ) {
      numberValidation = 1;
    } else numberValidation = target.value;

    setInfo((prevInfo) => ({
      ...prevInfo,
      [target.name]: numberValidation,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      createBook(info);
      setInfo(initialInfo);
    }
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
              />
              <span>{errors.name}</span>
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
              />
              <span>{errors.chapterTitle}</span>
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
              />
            </label>
            <span>{errors.author}</span>
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
