import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => setBooks(response.data.docs))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.some((b) => b.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
      <button onClick={() => window.location.href = '/bookshelf'}>Go to My Bookshelf</button>
    </div>
  );
};

export default BookSearchPage;








