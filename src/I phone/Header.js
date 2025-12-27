import React from "react"; 
import { Link } from "react-router-dom";   


const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <strong><span >i</span>Phone</strong> 
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/performance">Performance</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/accessories">Accessories</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/reviews">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;