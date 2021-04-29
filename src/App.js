import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import BooksList from './components/BooksList';
import BooksForm from './components/Booksform';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
