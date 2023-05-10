import '../styles/Books.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const checkBooks = (state) => state.books.books;

const Books = () => {
  const books = useSelector(checkBooks);
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

export default connect(checkBooks)(Books);
