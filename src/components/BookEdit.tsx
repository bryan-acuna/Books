import React from 'react';

interface BookEditProps {
  bookId?: string;
}

const BookEdit = ({ bookId }) => {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          color: '#2c3e50',
          marginBottom: '1.5rem',
          fontSize: '1.8rem',
          textAlign: 'center',
        }}
      >
        Edit Book
      </h2>
      <div
        style={{
          padding: '1.5rem',
          background: '#fff',
          borderRadius: '4px',
          border: '1px solid #e1e8ed',
        }}
      >
        <p
          style={{
            color: '#7f8c8d',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Book editing form will be implemented here
        </p>
        {bookId && (
          <p
            style={{
              color: '#34495e',
              fontSize: '0.9rem',
              marginTop: '1rem',
            }}
          >
            Editing book ID: {bookId}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookEdit;
