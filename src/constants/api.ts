import googleAPI from './constants';

const API_KEY = process.env.REACT_APP_API_KEY;
export const API = {
  searchBooks: (queryString: string) =>
    `${googleAPI}/volumes?q=${queryString}&key=${API_KEY}&maxResults=18&fields=items(id,volumeInfo(title, subtitle, categories, publishedDate, authors, description, infoLink, pageCount, previewLink, language, imageLinks))`,
};
