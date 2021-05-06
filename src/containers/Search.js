import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import { searchBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const Search = ({ searchBook, handleSelect }) => {
  const text = useRef('');

  const onChange = () => {
    searchBook(text.current.value);
    M.updateTextFields();
  };

  return (
    <nav>
      <div className="nav-wrapper row white">
        <div className="col s7 row">
          <div className="col s3">
            <a href="!#" className="brand-logo blue-text darken-2 ">
              BookStore CMS
            </a>
          </div>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>
              <a href="sass.html" className="black-text">
                Books
              </a>
            </li>
            <li>
              <a href="collapsible.html" className="black-text">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right col s5 row">
          <div className="col s6">
            <CategoryFilter onSelect={handleSelect} />
          </div>
          <label className="active col s6" htmlFor="first_name2">
            <input
              id="first_name2"
              type="search"
              name="active"
              className="validate moreroom"
              placeholder="Search by book name"
              ref={text}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </nav>
  );
};
Search.propTypes = {
  searchBook: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default connect(null, { searchBook })(Search);
