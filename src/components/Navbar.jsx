import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/"  className="logo">
          <h2>PomoFocus</h2>
        </Link>
    

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
