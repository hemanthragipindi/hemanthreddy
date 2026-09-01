import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Resume = () => {
  const { resume, experience, skills } = portfolioData;

  return (
    <section id="resume" style={styles.resumeSection}>
      
      <div style={styles.titleContainer}>
        <div style={styles.blueSquare}></div>
        <h2 style={styles.pageTitle}>Resume</h2>
      </div>

      <div style={styles.container}>
        
        {/* Experience Section */}
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Experience</h3>
          {resume.resumeUrl && (
            <a href={resume.resumeUrl} className="btn" style={styles.downloadBtn}>Download CV</a>
          )}
        </div>

        {experience.map((exp, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.leftColumn}>
              <p style={styles.date}>{exp.duration}</p>
              <p style={styles.organization}>{exp.organization}</p>
            </div>
            <div style={styles.rightColumn}>
              <h4 style={styles.role}>{exp.role}</h4>
              <p style={styles.description}>{exp.description}</p>
              {exp.responsibilities && <p style={styles.details}>• {exp.responsibilities}</p>}
              {exp.skillsGained && <p style={styles.details}>• {exp.skillsGained}</p>}
            </div>
          </div>
        ))}

        {/* Education Section */}
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Education</h3>
        </div>

        {resume.education.map((edu, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.leftColumn}>
              <p style={styles.date}>{edu.year}</p>
              <p style={styles.organization}>{edu.institution}</p>
            </div>
            <div style={styles.rightColumn}>
              <h4 style={styles.role}>{edu.degree}</h4>
              <p style={styles.details}> {edu.cgpa}</p>
            </div>
          </div>
        ))}

        {/* Professional Skillset Section */}
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Professional skillset</h3>
        </div>

        <div style={styles.card}>
          <div style={styles.skillsGrid}>
            {Object.keys(skills).map((category, idx) => (
              <div key={idx} style={styles.skillCategory}>
                <h4 style={{ fontSize: '16px', marginBottom: '10px', color: '#3b6e9c' }}>{category}</h4>
                <ul style={styles.skillList}>
                  {skills[category].map((skill, i) => (
                    <li key={i} style={styles.skillItem}>▪ {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  resumeSection: {
    backgroundColor: '#bfe1f1', /* Light blue matched from screenshot */
    padding: '80px 20px',
    fontFamily: 'var(--font-family)',
    color: '#000624'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '60px'
  },
  blueSquare: {
    width: '16px',
    height: '16px',
    backgroundColor: '#3b6e9c'
  },
  pageTitle: {
    fontSize: '36px',
    fontFamily: 'var(--font-headings)',
    color: '#000624'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '30px',
    marginBottom: '10px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    fontWeight: 'normal'
  },
  downloadBtn: {
    padding: '8px 24px',
    backgroundColor: '#000624',
    color: '#ffffff',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    fontWeight: 'bold',
    transition: '0.3s'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '10px' /* Space between consecutive cards */
  },
  leftColumn: {
    flex: '1 1 200px',
    borderRight: '1px solid #eee',
    paddingRight: '20px'
  },
  rightColumn: {
    flex: '2 1 400px'
  },
  date: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  organization: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4'
  },
  role: {
    fontSize: '18px',
    fontFamily: 'var(--font-headings)',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.5',
    marginBottom: '10px'
  },
  details: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    width: '100%'
  },
  skillCategory: {
    display: 'flex',
    flexDirection: 'column'
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  skillItem: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#000624',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
};

export default Resume;
