import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
      <div className="container-xl">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="https://www.reshot.com/preview-assets/icons/G8KFMDH5V4/inventory-management-G8KFMDH5V4.svg" className="h-8" alt="..." style={{ height: '50px' }}/>
        </NavLink>
        {/* Navbar toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* Nav */}
          <div className="navbar-nav mx-lg-auto">
            <NavLink className="nav-item nav-link" to="/" activeclassname="active" exact>Dashboard</NavLink>
            <NavLink className="nav-item nav-link" to="/product" activeclassname="active">Product Management</NavLink>
            <NavLink className="nav-item nav-link" to="/order" activeclassname="active">Orders</NavLink>
          </div>
          {/* My Name */}
          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
              Arnab
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
