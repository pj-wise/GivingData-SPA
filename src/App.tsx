import Search from './components/search/Search';
import BookList from './components/bookList/BookList';
import { BookListContextProvider } from './context/BookListContext';
import { SnackbarProvider } from 'notistack';

function App() {
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
