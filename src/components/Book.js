import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBinFill } from 'react-icons/ri';

const List = ({
  id, name, category, onDelete,
}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{category}</td>
    <td>
      {' '}
      <a href="#!" onClick={() => onDelete(id)}>
        <RiDeleteBinFill />
      </a>
    </td>
  </tr>
);

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
