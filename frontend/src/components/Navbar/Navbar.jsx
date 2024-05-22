import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/transactionlist">Transactions</Link>
      </div>
    </nav>
  );
}

export default Navbar;
