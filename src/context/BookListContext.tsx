import React, { useState, createContext, ReactNode } from 'react';
import { iBookItems } from '../models/BooksDto';

type BookListContextProviderProps = {
  children: ReactNode;
};

export type BookListContext = {
  bookList: iBookItems[];
  setBookList: (books: iBookItems[]) => void;
};

export const BookListContext = createContext<BookListContext>({
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
