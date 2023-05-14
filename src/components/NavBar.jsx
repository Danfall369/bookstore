import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import userIcon from '../asset/icon-user.png';

const Navbar = () => (
  <nav className="navContainer">
    <ul className="navUl">
      <h1 className="nav-title">Bookstore</h1>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <img src={userIcon} alt="user-icon" className="icon-user" />
  </nav>
);

export default Navbar;
