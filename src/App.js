import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import ListBooks from './components/ListBooks';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" exact Component={ListBooks} />
          <Route path="/categories" Component={Categories} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
