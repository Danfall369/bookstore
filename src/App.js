import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListBooks from './components/ListBooks';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" exact Component={ListBooks} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
