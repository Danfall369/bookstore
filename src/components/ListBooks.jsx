import '../styles/ListBooks.css';
import Books from './Books';
import AddBook from './AddBook';
import NavBar from './NavBar';

const ListBooks = () => (
  <>
    <div className="list-conaitner">
      <NavBar />
      <Books />
      <hr className="line" />
      <AddBook />
    </div>
  </>
);

export default ListBooks;
