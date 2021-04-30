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
          {/* {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.category}</td>
            </tr>
          ))} */}
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

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       category: PropTypes.string.isRequired,
//     })
//   ),
// };

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

// BooksList.propTypes = {
//   books: PropTypes.objectOf(PropTypes.any).isRequired,
// };

const mapStateToProps = (state) => ({
  books: state,
});
export default connect(mapStateToProps, null)(BooksList);
