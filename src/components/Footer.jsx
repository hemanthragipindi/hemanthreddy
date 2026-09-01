import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal, socials } = portfolioData;

  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <p style={styles.text}>© 2026 by {personal.name}.</p>
      </div>
      
      <div style={styles.right}>
        <div style={styles.column}>
          <p style={styles.label}>Call</p>
          <p style={styles.value}>{'+91 88856 35532'}</p>
        </div>
        
        <div style={styles.column}>
          <p style={styles.label}>Write</p>
          <p style={styles.value}>{personal.email || 'info@mysite.com'}</p>
        </div>
        
        <div style={styles.column}>
          <p style={styles.label}>Follow</p>
          <div style={styles.socials}>
            {socials.linkedin && <a href={socials.linkedin} style={styles.icon}>IN</a>}
            {socials.github && <a href={socials.github} style={styles.icon}>GH</a>}
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#ffffff',
    padding: '30px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #eaeaea',
    fontFamily: 'var(--font-family)',
    color: '#000624'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  text: {
    fontSize: '11px',
    margin: 0,
    color: '#555'
  },
  right: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '11px',
    fontWeight: 'bold',
    margin: 0,
    textTransform: 'capitalize'
  },
  value: {
    fontSize: '11px',
    margin: 0,
    color: '#555'
  },
  socials: {
    display: 'flex',
    gap: '10px'
  },
  icon: {
    fontSize: '11px',
    textDecoration: 'none',
    color: '#555',
    fontWeight: 'bold'
  }
};

export default Footer;
