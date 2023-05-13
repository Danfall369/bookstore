import '../styles/AddBook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getBooks, postBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const [Books, setaddBooks] = useState({
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setaddBooks({
      ...Books,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBooks({
      ...Books,
      item_id: uuid(),
    })).then(() => {
      setaddBooks({
        title: '',
        author: '',
        category: '',
      });
      dispatch(getBooks());
    }).catch(() => {
    });
  };

  const categories = [
    'Action',
    'science-fiction',
    'horror',
    'action',
    'romance',
  ];

  return (
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" required onChange={handleChange} value={Books.title} />
        <input type="text" name="author" placeholder="Author" required onChange={handleChange} value={Books.author} />
        <select name="category" value={Books.category} onChange={handleChange}>
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
