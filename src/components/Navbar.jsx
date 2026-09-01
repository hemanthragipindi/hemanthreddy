import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const { personal } = portfolioData;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <div style={styles.blueSquare}></div>
        <Link to="/" style={styles.logoText}>{personal.name}</Link>
        <span style={styles.logoSub}>/ {personal.title}</span>
      </div>

      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>About Me</Link></li>
        <li><Link to="/resume" style={styles.link}>Resume</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/certifications" style={styles.link}>Certifications</Link></li>
        
        {/* Dropdown Menu */}
        <li 
          style={styles.dropdownContainer}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span style={{...styles.link, cursor: 'pointer'}}>More</span>
          
          {dropdownOpen && (
            <div style={styles.dropdownMenu}>
              <Link to="/skills" style={styles.dropdownItem}>Skills | Technologies</Link>
              <Link to="/experience" style={styles.dropdownItem}>Experience</Link>
              <Link to="/achievements" style={styles.dropdownItem}>Competitions, Hackathons and Achievement</Link>
              <Link to="/contact" style={styles.dropdownItem}>Contact</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    flexWrap: 'wrap',
    gap: '20px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  blueSquare: {
    width: '12px',
    height: '12px',
    backgroundColor: '#3b6e9c'
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000624',
    fontFamily: 'var(--font-headings)',
    letterSpacing: '0.5px'
  },
  logoSub: {
    fontSize: '14px',
    color: '#555',
    fontFamily: 'var(--font-family)',
    marginLeft: '5px'
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  link: {
    fontSize: '12px',
    color: '#000624',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textDecoration: 'none'
  },
  dropdownContainer: {
    position: 'relative',
    padding: '10px 0' /* Gives a bigger hover target so the menu doesn't disappear */
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#f4f4f4',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    padding: '10px 0',
    zIndex: 1001
  },
  dropdownItem: {
    padding: '12px 20px',
    fontSize: '11px',
    color: '#000624',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'right', /* Align items to the right as in screenshot */
    transition: 'background-color 0.2s',
    letterSpacing: '0.5px'
  }
};

export default Navbar;
