import React, { useContext } from 'react';
import Book from './book/Book';
import { BookListContext } from '../../context/BookListContext';
import './BookList.scss';

const BookList = () => {
  const { bookList } = useContext(BookListContext);
  console.log({ bookList });
  return (
    <div className='book-list-container'>
      {bookList.map((book) => {
        return <Book key={book.id} details={book.volumeInfo} />;
      })}
    </div>
  );
};

export default BookList;
