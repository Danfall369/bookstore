import '../styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="books-container">
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>{book.category}</p>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
