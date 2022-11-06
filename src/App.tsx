import { useEffect, useState } from 'react';
import { BooksService } from './services/BooksService';
import Search from './components/search/Search';
import BookList from './components/bookList/BookList';
import { BookListContextProvider } from './context/BookListContext';
import { SnackbarProvider } from 'notistack';

function App() {
  const booksService = new BooksService();
  const tempQuery = 'fire and blood';
  // const [bookList, setBookList] = useState([]);

  return (
    <div className='App'>
      <SnackbarProvider>
        <BookListContextProvider>
          <Search />
          <BookList />
        </BookListContextProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
