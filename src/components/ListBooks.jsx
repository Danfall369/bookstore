import '../styles/ListBooks.css';
import Books from './Books';
import AddBook from './AddBook';

const ListBooks = () => (
  <div className="list-conaitner">
    <Books />
    <AddBook />
  </div>
);

export default ListBooks;
