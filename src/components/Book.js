import React from 'react';
import PropTypes from 'prop-types';

const List = ({ id, name, category }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{category}</td>
  </tr>
);

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default List;
