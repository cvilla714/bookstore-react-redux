import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Book from '../components/Book';
import { deleteBookAction, filterBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filterCategory, deleteBookAction, filterBook,
}) => {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };

  const handleSelect = (category) => {
    filterBook(category);
  };

  const filteredBooks = () => {
    if (filterCategory !== 'All') {
      return books.filter((book) => book.category.toUpperCase() === filterCategory.toUpperCase());
    }

    return books;
  };

  return (
    <>
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
      <CategoryFilter onSelect={handleSelect} />
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.book,
  filterCategory: state.filter,
});

export default connect(mapStateToProps, { deleteBookAction, filterBook })(
  BooksList,
);
