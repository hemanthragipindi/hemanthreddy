import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" style={styles.aboutSection}>
      <h2 style={styles.sectionTitle}>About Me</h2>
      
      <div style={styles.content}>
        <p style={styles.textLead}>
          {personal.about}
        </p>
        
        <p style={styles.textInfo}>
          <strong>Academic Background:</strong> {personal.academicBackground}
        </p>
        <p style={styles.textInfo}>
          <strong>Career Interests:</strong> {personal.careerInterests}
        </p>
        <p style={styles.textInfo}>
          <strong>Technical Interests:</strong> {personal.technicalInterests}
        </p>
        <p style={styles.textInfo}>
          <strong>Location:</strong> {personal.location}
        </p>
      </div>

      <div style={styles.actions}>
        <a href="#resume" className="btn" style={styles.btnPrimary}>Resume</a>
        <a href="#projects" className="btn" style={styles.btnSecondary}>PROJECTS</a>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: {
    backgroundColor: '#ffffff',
    padding: '80px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: '44px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    marginBottom: '40px',
    fontWeight: 'normal'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center', /* Centered like in the Wix site */
    marginBottom: '40px',
    padding: '0 15px'
  },
  textLead: {
    marginBottom: '30px',
    fontSize: '25px',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    lineHeight: '1.4'
  },
  textInfo: {
    marginBottom: '15px',
    fontSize: '17px',
    fontFamily: 'var(--font-family)',
    color: '#000624'
  },
  actions: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnPrimary: {
    padding: '12px 30px',
    backgroundColor: '#000624',
    color: '#ffffff',
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '2px solid #000624'
  },
  btnSecondary: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#000624',
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '2px solid #000624'
  }
};

export default About;
