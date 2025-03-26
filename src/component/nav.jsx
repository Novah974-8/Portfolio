import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    padding: '10px 20px',
    marginBottom: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
  };

  const navItemStyle = {
    color: '#00AA00',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const navItemHoverStyle = {
    backgroundColor: '#00AA00',
    color: '#1e1e1e',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, navItemHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, { backgroundColor: 'transparent', color: '#00AA00' });
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/about"
        style={navItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        A propos
      </Link>
      <Link
        to="/projets"
        style={navItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Portfolio
      </Link>
      <Link
        to="/cv"
        style={navItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        CV
      </Link>
      <Link
        to="/contact"
        style={navItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;