
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookSelfPage';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;







