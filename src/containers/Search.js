/* eslint-disable object-curly-newline */
import React, { useRef } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const Search = ({ searchBook, handleSelect }) => {
  const text = useRef('');

  const onChange = () => {
    searchBook(text.current.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">BookStoore CMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Books</Nav.Link>
          <Nav.Link href="#link">Categories</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="search"
            placeholder="Search Book"
            className="mr-sm-2"
            ref={text}
            onChange={onChange}
          />
          <CategoryFilter onSelect={handleSelect} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
Search.propTypes = {
  searchBook: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { searchBook })(Search);
