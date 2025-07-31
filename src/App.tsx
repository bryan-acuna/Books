import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([
    { id: '1', title: 'Harry Potter' },
    { id: '2', title: 'Harry Potter 2' },
  ]);

  const handleAddBook = (book) => {
    setBooks((prevTotal) => [...prevTotal, book]);
  };

  return (
    <div className="App">
      <BookCreate addBook={handleAddBook} />
      <BookList books={books} />
    </div>
  );
};

export default App;
