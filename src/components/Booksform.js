/* eslint-disable react/jsx-key */
import React from 'react';

const Booksform = () => {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form action="">
        <input type="text" name="title" />
        {/* <label htmlFor="title">Title</label> */}
        <div className="row">
          <div className="input-field">
            <select name="category">
              <option value="" disabled>
                Select Book
              </option>
              {options.map((category) => (
                <option value={category}>
                  {category}
                  key=
                  {Math.random()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Booksform;
