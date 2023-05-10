import '../styles/AddBook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [Books, setaddBooks] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setaddBooks({
      ...Books,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...Books,
      item_id: uuid(),
    }));
  };

  return (
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmint}>
        <input type="text" name="title" placeholder="Book Title" onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
