/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const BooksList = ({ books }) => {
  console.log(books);

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
          <tr>
            <td>1</td>
            <td>Harry Potter</td>
            <td>Sci-fi</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Star trek</td>
            <td>Sci-fi</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  books: state,
});
export default connect(mapStateToProps, null)(BooksList);
