import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={styles.expSection}>
      
      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>My Experience<br/>Internships and Work</h2>
        </div>
      </div>

      {/* Full-width List Section */}
      <div style={styles.listContainer}>
        {experience.map((exp, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              style={{
                ...styles.expRow, 
                flexDirection: isEven ? 'row' : 'row-reverse'
              }}
            >
              {/* Visual Side (Image or Logo Grid) */}
              <div style={styles.visualSide}>
                {exp.image ? (
                  <img src={exp.image} alt="Experience" style={styles.image} />
                ) : (
                  <div style={styles.visualPlaceholder}>
                    <span style={styles.placeholderText}>[ADD EXPERIENCE IMAGE OR LOGO COLLAGE]</span>
                  </div>
                )}
              </div>

              {/* Text Side */}
              <div style={styles.textSide}>
                <div style={styles.textContent}>
                  <h3 style={styles.roleTitle}>
                    {exp.organization || 'Organization'} - {exp.role || 'Role'} <br/>
                    ({exp.duration || 'Duration'})
                  </h3>
                  
                  {exp.description && (
                    <div style={styles.textBlock}>
                      <strong>Overview:</strong>
                      <p>{exp.description}</p>
                    </div>
                  )}

                  {exp.responsibilities && (
                    <div style={styles.textBlock}>
                      <strong>Roles and Responsibilities:</strong>
                      <p>• {exp.responsibilities}</p>
                    </div>
                  )}
                  
                  {exp.skillsGained && (
                    <div style={styles.textBlock}>
                      <strong>Tech stack used:</strong> {exp.skillsGained}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

const styles = {
  expSection: {
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh'
  },
  bannerContainer: {
    width: '100%',
    height: '250px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerOverlay: {
    backgroundColor: '#ffffff',
    padding: '20px 40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    textAlign: 'center'
  },
  bannerTitle: {
    fontSize: '24px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: 0,
    lineHeight: '1.4'
  },
  listContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  expRow: {
    display: 'flex',
    width: '100%',
    minHeight: '400px', /* Ensure it takes up a good chunk of screen like the screenshot */
    borderTop: '1px solid #eaeaea'
  },
  visualSide: {
    flex: '1 1 50%',
    display: 'flex'
  },
  visualPlaceholder: {
    width: '100%',
    height: '100%',
    minHeight: '300px',
    backgroundColor: '#f6efe9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
  },
  placeholderText: {
    fontSize: '12px',
    color: '#999',
    letterSpacing: '1px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    backgroundColor: '#fbfbfb',
    padding: '20px'
  },
  textSide: {
    flex: '1 1 50%',
    backgroundColor: '#fbfbfb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  textContent: {
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left'
  },
  roleTitle: {
    fontSize: '18px',
    fontFamily: 'var(--font-headings)',
    lineHeight: '1.4',
    margin: 0,
    color: '#000624',
    textAlign: 'center', /* Title was centered in the screenshot */
    marginBottom: '10px'
  },
  textBlock: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#444'
  }
};

export default Experience;
