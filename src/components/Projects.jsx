import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ title, description, technologies, features, github, demo, image }) => (
  <div style={styles.card}>
    <div style={styles.leftColumn}>
      <h3 style={styles.projectTitle}>{title}</h3>
      <p style={styles.description}>{description}</p>
      
      {technologies && (
        <div style={styles.techStack}>
           {technologies}
        </div>
      )}
      
      {features && (
        <div style={styles.features}>
          <strong>Key Features:</strong> {features}
        </div>
      )}

      <div style={styles.actions}>
        {github && <a href={github} style={styles.btnSecondary}>GitHub</a>}
        {demo && <a href={demo} style={styles.btnSecondary}>Demo</a>}
      </div>
    </div>
    
    <div style={styles.rightColumn}>
       {image ? (
          <img src={image} alt={title} style={styles.projectImage} />
       ) : (
          <div style={styles.imagePlaceholder}></div>
       )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" style={styles.projectsSection}>
      
      <div style={styles.titleContainer}>
        <div style={styles.blueSquare}></div>
        <h2 style={styles.pageTitle}>Projects</h2>
      </div>
      
      <p style={styles.subtitle}>Here are some of my recent projects. Feel free to check them out.</p>
      
      <div style={styles.container}>
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  projectsSection: {
    backgroundColor: '#ffffff',
    padding: '80px 20px',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px'
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
  subtitle: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#555',
    marginBottom: '60px'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },
  card: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap-reverse', /* So image goes to top on mobile */
    gap: '30px',
    marginBottom: '20px',
    paddingBottom: '40px',
    borderBottom: '1px solid #eaeaea'
  },
  leftColumn: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rightColumn: {
    flex: '1 1 300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagePlaceholder: {
    width: '100%',
    height: '250px',
    backgroundColor: '#f6efe9',
    boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.05)',
    borderRadius: '8px'
  },
  projectImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    backgroundColor: '#f6efe9'
  },
  projectTitle: {
    fontSize: '22px',
    fontFamily: 'var(--font-headings)',
    marginBottom: '15px',
    color: '#3b6e9c' /* Using the blue accent color */
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px'
  },
  techStack: {
    fontSize: '13px',
    color: '#777',
    marginBottom: '15px',
    fontStyle: 'italic'
  },
  features: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '25px',
    lineHeight: '1.5'
  },
  actions: {
    display: 'flex',
    gap: '15px'
  },
  btnSecondary: {
    padding: '8px 20px',
    backgroundColor: 'transparent',
    color: '#000624',
    border: '1px solid #000624',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    fontWeight: 'bold',
    transition: 'all 0.3s'
  }
};

export default Projects;
