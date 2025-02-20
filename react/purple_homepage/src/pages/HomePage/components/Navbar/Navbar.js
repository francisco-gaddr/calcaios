import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/signup">About</Link>
        <Link to="/dashboard">Contacts</Link>
      </div>
      {/* <div className="navbar-links-access">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div> */}
    </div>
  );
}

export default Navbar; 