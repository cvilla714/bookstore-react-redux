/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const List = ({ id, name, author, category, onDelete }) => (
  <div className="card z-depth-2 row .card-fixer">
    <div className="col s7">
      <div className="card-info">
        <h6 className="header grey-text text-lighten-1">{category}</h6>
        <h5 className="header grey-text text-darken-4">{name}</h5>
        <p className="grey-text text-lighten-1">{author}</p>
      </div>
      <div className="buttons-container">
        <a href="!#" className="btn-flat">
          Comments
        </a>
        <a href="#!" onClick={() => onDelete(id)} className="btn-flat">
          Remove
        </a>
        <a href="!#" className="btn-flat">
          Edit
        </a>
      </div>
    </div>
    <div className="col s5 row">
      <div className="col s6">15%</div>
      <div className="col s6">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          <span>17</span>
        </p>
        <button className="waves-effect waves-light btn blue" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </div>
);

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
