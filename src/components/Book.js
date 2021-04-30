import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBinFill } from 'react-icons/ri';
import { connect } from 'react-redux';
import { deleteBookAction } from '../actions/index';

const List = ({
  id, name, category, deleteBook,
}) => {
  const onDelete = () => {
    deleteBook(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        {' '}
        <a href="#!" onClick={onDelete}>
          <RiDeleteBinFill />
        </a>
      </td>
    </tr>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const deleteBook = (bookid) => dispatch(deleteBookAction(bookid));

  return { deleteBook };
};

export default connect(null, mapDispatchToProps)(List);
