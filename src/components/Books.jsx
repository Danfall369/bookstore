import '../styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const keys = Object.keys(books);
  const bookData = keys.map((key) => {
    const bookInfo = books[key][0];
    return {
      key,
      author: bookInfo.author,
      title: bookInfo.title,
      category: bookInfo.category,
    };
  });

  const handleRemove = () => {
    setIsLoading(true);
    const requests = bookData.map((book) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AfVl9Vr215PD59FDdYnx/books/${book.key}`));

    Promise.all(requests)
      .then(() => {
        dispatch(getBooks());
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <div className="books-container">
      <ul>
        {bookData.map((book) => (
          <li key={book.key}>
            <p>{book.category}</p>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button type="button" onClick={handleRemove}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
