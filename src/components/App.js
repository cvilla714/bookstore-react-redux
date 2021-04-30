import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/Booksform';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
