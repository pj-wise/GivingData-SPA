import { API } from '../constants/api';
import axios from 'axios';

export class BooksService {
  getBooks = async (queryString: string) => {
    const response = await axios
      .get(API.searchBooks(queryString))
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return response;
  };
}
