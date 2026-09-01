import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" style={styles.achievementsSection}>
      
      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>Milestones</h2>
          <p style={styles.bannerSubtitle}>Competitions, Hackathons, & Achievements</p>
          <p style={styles.bannerDescription}>
            Welcome to my showcase of accomplishments! This page highlights my journey through various competitions, innovative hackathons, and notable achievements. Explore the projects I've tackled, the challenges I've overcome, and the milestones I've reached. Each experience reflects my skills, creativity, and dedication to continuous growth.
          </p>
        </div>
      </div>

      {/* List Section */}
      <div style={styles.listContainer}>
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              style={{
                ...styles.itemRow, 
                flexDirection: isEven ? 'row' : 'row-reverse'
              }}
            >
              {/* Image Side */}
              <div style={styles.imageWrapper}>
                {achievement.image ? (
                  <img src={achievement.image} alt={achievement.title} style={styles.image} />
                ) : (
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.placeholderText}>[ADD ACHIEVEMENT IMAGE]</span>
                  </div>
                )}
              </div>

              {/* Text Side */}
              <div style={{
                ...styles.textWrapper,
                alignItems: isEven ? 'flex-start' : 'flex-end',
                textAlign: isEven ? 'left' : 'right'
              }}>
                <h3 style={styles.itemTitle}>
                  {achievement.title || '[ADD TITLE]'}
                </h3>
                <p style={styles.itemDescription}>
                  {achievement.description || '[ADD DESCRIPTION]'}
                </p>
                <p style={styles.itemOrganization}>
                  {achievement.organization} - {achievement.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

const styles = {
  achievementsSection: {
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh',
    paddingBottom: '80px'
  },
  bannerContainer: {
    width: '100%',
    height: '350px', /* Taller to accommodate text */
    backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '60px'
  },
  bannerOverlay: {
    backgroundColor: '#ffffff',
    padding: '30px 40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    textAlign: 'left'
  },
  bannerTitle: {
    fontSize: '28px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: '0 0 5px 0'
  },
  bannerSubtitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000624',
    margin: '0 0 10px 0'
  },
  bannerDescription: {
    fontSize: '11px',
    color: '#555',
    lineHeight: '1.6',
    margin: 0
  },
  listContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 0',
    borderBottom: '1px solid #eaeaea',
    gap: '40px'
  },
  imageWrapper: {
    flex: '1 1 300px',
    height: '180px',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f6efe9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.05)',
  },
  placeholderText: {
    fontSize: '10px',
    color: '#999',
    letterSpacing: '1px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.05)',
  },
  textWrapper: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000624',
    lineHeight: '1.4',
    marginBottom: '10px'
  },
  itemDescription: {
    fontSize: '13px',
    color: '#333',
    lineHeight: '1.5',
    marginBottom: '10px'
  },
  itemOrganization: {
    fontSize: '11px',
    color: '#777',
    fontStyle: 'italic',
    margin: 0
  }
};

export default Achievements;
