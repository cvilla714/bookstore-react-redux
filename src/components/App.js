import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/Booksform';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <BooksList />
      <div className="container">
        <div className="container-fluid">
          <h1 className="main-title">ADD A NEW BOOK</h1>
          <BooksForm />
        </div>
      </div>
    </div>
  );
};

export default App;
