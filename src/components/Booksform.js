/* eslint-disable react/jsx-key */
import React from 'react';

const Booksform = () => {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form action="">
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" />
        </label>
        <div className="row">
          <div className="input-field">
            <select name="category">
              <option value="" disabled>
                Select Book
              </option>
              {options.map((category) => (
                <option value={category} key={Math.random()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default Booksform;
