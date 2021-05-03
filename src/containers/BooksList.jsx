import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Book from '../components/Book';
import { deleteBookAction, filterBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, deleteBookAction, filterBook }) => {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };

  const handleSelect = (category) => {
    console.log(category);
    filterBook(category, books);
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
          {books.book.map((book) => (
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
  books: PropTypes.objectOf(Array).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});
export default connect(mapStateToProps, { deleteBookAction, filterBook })(BooksList);
