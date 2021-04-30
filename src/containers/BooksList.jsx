import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
          <Book id={book.id} key={book.id} name={book.name} category={book.category} />
        ))}
      </tbody>
    </Table>
  </>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});
export default connect(mapStateToProps)(BooksList);
