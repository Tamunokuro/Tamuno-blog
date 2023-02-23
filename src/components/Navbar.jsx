import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function MyNavbar() {
  return (
    <Navbar className="Home d-flex" expand="lg" sticky="top bg-white">
      <div className="Home-header">
        <Link to="/" className="logo">TAMUNO BLOG</Link>
        <ul className="Home-nav">
          <Link to="/blogs"><li className="nav-Items">BLOGS</li></Link>
          <Link to="/communities"><li className="nav-Items">COMMUNITIES</li></Link>
          <Link to="/support"><li className="nav-Items">SUPPORT TAMUNO</li></Link>
        </ul>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
