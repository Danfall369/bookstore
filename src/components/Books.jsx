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
          <li className="info" key={book.key}>
            <p className="category">{book.category}</p>
            <h2 className="book-title">{book.title}</h2>
            <h3 className="author">{book.author}</h3>
            <br />
            <div className="buttons-container">
              <button type="button" className="action-buttons">Comments</button>
              <button type="button" className="action-buttons" onClick={handleRemove}>Remove</button>
              <button type="button" className="action-buttons">Edit</button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="circle" />
      <div className="status">
        <h2 className="percent">0%</h2>
        <p className="completed">Completed</p>
      </div>
      <div className="progress">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <h3 className="chapter">Chapter 1</h3>
        <button type="button" className="update-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Books;
