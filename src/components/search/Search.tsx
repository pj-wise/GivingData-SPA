import React, { useState, useEffect, useContext } from 'react';
import { BooksService } from '../../services/BooksService';
import { BookListContext } from '../../context/BookListContext';
import { TextField, Button } from '@mui/material';
import { useSnackbar } from 'notistack';

const Search = () => {
  const { setBookList } = useContext(BookListContext);
  const booksService = new BooksService();
  const [queryString, setQueryString] = useState('Ice and Fire');
  const [input, setInput] = useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    booksService.getBooks(queryString).then((res) => {
      setBookList(res.items);
    });
  }, [queryString]);

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault();
    setInput((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input !== '') {
      setQueryString(input);

      return;
    }

    enqueueSnackbar('Please enter a search term.', { variant: 'error' });
  };

  return (
    <form onSubmit={handleSubmit} className='search-container'>
      <TextField
        onChange={handleChange}
        className='search-input'
        placeholder='Find a book'
      />
      <Button
        variant='contained'
        color='primary'
        className='submit-btn'
        type='submit'
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
