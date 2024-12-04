import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setTitle }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setTitle(input);
  };

  return (
    <nav className="navbar">
      <img src='favicon.ico' alt="logo-navbar" className='logo-navbar' />
      <div className="navbar-brand">Movie App</div>
      <form onSubmit={handleSearch} className="navbar-form">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter movie title" 
          className="navbar-input" 
        />
        <button type="submit" className="navbar-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
