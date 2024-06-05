import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  const authorNames = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{authorNames}</p>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;


