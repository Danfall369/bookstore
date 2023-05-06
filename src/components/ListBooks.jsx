import '../styles/ListBooks.css';
import Books from './Books';
import AddBook from './AddBook';

const ListBooks = () => (
  <>
    <div className="list-conaitner">
      <Books />
    </div>

    <AddBook />

  </>
);

export default ListBooks;
