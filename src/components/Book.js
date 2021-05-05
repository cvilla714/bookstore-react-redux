/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBinFill } from 'react-icons/ri';

const List = ({ id, name, category, onDelete }) => (
  <div className="row">
    <div className="col s4">
      <div className="col s12 m7">
        <h4 className="header">{category}</h4>
        <h2 className="header">{name}</h2>
        <div className="card horizontal w-100">
          <div classNameName="row">
            <div classNameName="col s4">
              <div className="card-action">
                <a href="!#">Comments</a>
              </div>
            </div>
            <div classNameName="col s4">
              <div className="card-action">
                <a href="#!" onClick={() => onDelete(id)}>
                  <RiDeleteBinFill />
                </a>
              </div>
            </div>
            <div classNameName="col s4">
              <div className="card-action">
                <a href="!#">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  // <tr>
  //   <td>{id}</td>
  //   <td>{name}</td>
  //   <td>{category}</td>
  //   <td>
  //     {' '}
  //     <a href="#!" onClick={() => onDelete(id)}>
  //       <RiDeleteBinFill />
  //     </a>
  //   </td>
  // </tr>
);

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
