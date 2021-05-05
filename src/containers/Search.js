/* eslint-disable object-curly-newline */
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
      <div className="nav-wrapper white">
        <div className="row">
          <div className="col s12 m4 l2">
            <a href="!#" className="brand-logo blue-text darken-2">
              BookStoore CMS
            </a>
          </div>
          <div className="col s12 m4 l5">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="sass.html" className="brown-text">
                  Books
                </a>
              </li>
              <li>
                <a href="badges.html blue" className="brown-text text-lighten-3">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="col s12 m4 l5">
            {' '}
            <div className="row">
              <div className="col m6 l6">
                <div className="input-field moving-left">
                  <label className="active" htmlFor="first_name2">
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
              <div className="col m6 l6">
                <div className="moving-left">
                  <CategoryFilter onSelect={handleSelect} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  // <Navbar bg="light" expand="lg">
  //   <Navbar.Brand href="#home">BookStoore CMS</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav.Link className="mr-auto">
  //       <Nav.Link href="#home">Books</Nav.Link>
  //       <Nav.Link href="#link">Categories</Nav.Link>
  //     </Nav.Link>
  //     <Form inline>
  //       <FormControl
  //         type="search"
  //         placeholder="Search Book"
  //         className="mr-sm-2"
  //         ref={text}
  //         onChange={onChange}
  //       />
  //       <CategoryFilter onSelect={handleSelect} />
  //     </Form>
  //   </Navbar.Collapse>
  // </Navbar>
  );
};
Search.propTypes = {
  searchBook: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   search: state.search,
// });

export default connect(null, { searchBook })(Search);
