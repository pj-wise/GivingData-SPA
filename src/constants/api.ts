import googleAPI from './constants';

// env was working locally but was having issues with netlify not allowing it and causing build fails.
// const API_KEY = process.env.REACT_APP_API_KEY;
// note: this would typically be included as a env in the CI/CD pipeline but for the sake of
// this assesment I'm leaving it here so a new api key wont be necessary.

const API_KEY = 'AIzaSyBYY_xLDK6bYFKqEJU5-7Hy7oKt5p8ZEf0';
export const API = {
  searchBooks: (queryString: string) =>
    `${googleAPI}/volumes?q=${queryString}&key=${API_KEY}&maxResults=18&fields=items(id,volumeInfo(title, subtitle, categories, publishedDate, authors, description, infoLink, pageCount, previewLink, language, imageLinks))`,
};
