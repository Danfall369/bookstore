import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

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
    <img src="../asset/icons8-male-user-96.png" alt="" />
  </nav>
);

export default Navbar;
