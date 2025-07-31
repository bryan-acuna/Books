import React, { useState, type FormEvent } from 'react';
import styles from './BookCreate.module.css';

const BookCreate = ({ addBook }) => {
  const [newBook, setNewBook] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const generateId = () => crypto.randomUUID();
    const book = {
      id: generateId,
      title: newBook,
    };
    addBook(book);
    setNewBook('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Add a Book</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          className={styles.input}
          placeholder="Enter book title"
        />
        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
