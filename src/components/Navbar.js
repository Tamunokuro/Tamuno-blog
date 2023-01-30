import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h3 className="logo">TAMUNO BLOG</h3>
        <ul className="Home-nav">
          <Link to="/"><li className="nav-Items">BLOGS</li></Link>
          <Link to="/communities"><li className="nav-Items">COMMUNITIES</li></Link>
          <Link to="/support"><li className="nav-Items">SUPPORT TAMUNO</li></Link>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
