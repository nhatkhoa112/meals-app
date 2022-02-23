import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          Meals <span>App</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <NavLink to="/">
            {' '}
            <li>Home</li>
          </NavLink>
          <NavLink to="/categories">
            {' '}
            <li>Categories</li>
          </NavLink>
          <NavLink to="/random">
            {' '}
            <li>Random</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
