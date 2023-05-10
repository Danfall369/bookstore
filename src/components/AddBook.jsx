import '../styles/AddBook.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [bookData, setBooks] = useState({
    title: '',
    author: '',
  });
  const booksArrLen = useSelector((state) => state.books.length);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'book-title':
        setBooks({ ...bookData, title: e.target.value });
        break;
      case 'book-author':
        setBooks({ ...bookData, author: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksArrLen === 0 ? 0 : booksArrLen + 1,
      title: bookData.title,
      author: bookData.author,
    };
    dispatch(addBook(newBook));
    setBooks({ title: '', author: '' });
  };

  return (
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          id="Title"
          value={bookData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Author"
          id="Author"
          value={bookData.author}
          onChange={handleChange}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
