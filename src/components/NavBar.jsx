import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navContainer">
    <h1 className="nav-title">Bookstore</h1>
    <ul className="navUl">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
