import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { deleteBookAction, filterBook } from '../actions/index';
import Search from './Search';

const BooksList = ({
  books,
  filterCategory,
  deleteBookAction,
  filterBook,
  search,
}) => {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };

  const handleSelect = (category) => {
    filterBook(category);
  };

  const filteredBooks = () => {
    if (filterCategory !== 'All') {
      const filteredByCategory = books.filter(
        (book) => book.category === filterCategory,
      );
      if (search !== '') {
        return filteredByCategory.filter((book) => book.name.includes(search));
      }
      return filteredByCategory;
    }
    if (search !== '') {
      return books.filter((book) => book.name.includes(search));
    }
    return books;
  };

  return (
    <>
      <Search handleSelect={handleSelect} />
      <div className="container">
        {filteredBooks().map((book) => (
          <Book
            id={book.id}
            key={book.id}
            name={book.name}
            author={book.author}
            category={book.category}
            chapters={book.chapters}
            currentChapter={book.currentChapter}
            chapterTitle={book.chapterTitle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.book,
  filterCategory: state.filter,
  search: state.search,
});

export default connect(mapStateToProps, { deleteBookAction, filterBook })(
  BooksList,
);
