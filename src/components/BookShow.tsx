import styles from './BookShow.module.css';

interface Book {
  id: string;
  title: string;
  author?: string;
  description?: string;
  publishedYear?: number;
}

interface BookShowProps {
  book?: Book;
}

const BookShow = ({ book }: BookShowProps) => {
  if (!book) {
    return <div className={styles.notFound}>Book not found</div>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{book.title}</h3>

      {book.author && (
        <p className={styles.detail}>
          <strong className={styles.label}>Author:</strong> {book.author}
        </p>
      )}

      {book.publishedYear && (
        <p className={styles.detail}>
          <strong className={styles.label}>Published:</strong>{' '}
          {book.publishedYear}
        </p>
      )}

      {book.description && (
        <div className={styles.description}>
          <strong className={styles.descriptionLabel}>Description:</strong>
          <p className={styles.descriptionText}>{book.description}</p>
        </div>
      )}
      <button>Edit</button>
    </div>
  );
};

export default BookShow;
