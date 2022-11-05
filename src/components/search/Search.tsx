import React, { useEffect } from 'react';
import { BooksService } from '../../services/BooksService';
import './Search.scss';

const Search = () => {
  const booksService = new BooksService();
  const tempQuery = 'fire and blood';

  useEffect(() => {
    booksService.getBooks(tempQuery).then((res) => console.log({ res }));
  }, []);

  return (
    <div className='search-container'>
      <input className='search-input' placeholder='Find a book' />
    </div>
  );
};

export default Search;
