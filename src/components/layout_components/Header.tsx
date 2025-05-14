import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="bg-light py-3">
      <nav className="container d-flex justify-content-between">
        <div>
          <Link to="/" className="btn btn-outline-primary me-2">
            Home
          </Link>
          <Link to="/about" className="btn btn-outline-primary">
            About
          </Link>
        </div>
        <Link to="/logout" className="btn btn-outline-danger">
          Logout
        </Link>
      </nav>
    </header>
  );
}

export default Header;
