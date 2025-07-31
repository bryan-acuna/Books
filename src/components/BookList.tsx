import React from 'react';
import BookShow from './BookShow';
import styles from './BookList.module.css';

interface Book {
  id: string;
  title: string;
  author?: string;
}

interface BookListProps {
  books?: Book[];
}

const BookList = ({ books = [] }: BookListProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book List</h2>
      {books.length === 0 ? (
        <p className={styles.emptyState}>No books available</p>
      ) : (
        <div className={styles.booksGrid}>
          {books.map((book) => (
            <BookShow key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
