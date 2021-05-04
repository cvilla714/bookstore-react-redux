/* eslint-disable object-curly-newline */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Book from '../components/Book';
import { deleteBookAction, filterBook } from '../actions/index';
import Search from './Search';

const BooksList = ({ books, filterCategory, deleteBookAction, filterBook, search }) => {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };

  const handleSelect = (category) => {
    filterBook(category);
  };

  const filteredBooks = () => {
    if (filterCategory !== 'All') {
      return books.filter((book) => book.category === filterCategory);
    }
    if (search !== '') {
      return books.filter((book) => book.name.includes(search));
    }
    return books;
  };

  return (
    <>
      <Search handleSelect={handleSelect} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks().map((book) => (
            <Book
              id={book.id}
              key={book.id}
              name={book.name}
              category={book.category}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
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

export default connect(mapStateToProps, { deleteBookAction, filterBook })(BooksList);
