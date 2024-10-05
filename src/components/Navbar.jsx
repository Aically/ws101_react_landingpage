import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href="#courses">Courses</a>
          <ul>
            <li><a href="#html-css">HTML & CSS</a></li>
            <li><a href="#javascript">JavaScript</a></li>
            <li><a href="#responsive-design">Responsive Design</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <button className="sign-in">Sign In</button>
        <select>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
