import { useState, createContext, ReactNode } from 'react';
import { iBookItems } from '../models/BooksDto';

type BookListContextProviderProps = {
  children: ReactNode;
};

export type BookListContextType = {
  bookList: iBookItems[];
  setBookList: (books: iBookItems[]) => void;
};

export const BookListContext = createContext<BookListContextType>({
  bookList: [],
  setBookList: () => {},
});

export const BookListContextProvider = ({
  children,
}: BookListContextProviderProps) => {
  const [bookList, setBookList] = useState<iBookItems[]>([]);

  return (
    <BookListContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BookListContext.Provider>
  );
};
