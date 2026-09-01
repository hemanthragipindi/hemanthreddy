import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.overlay}></div>
      
      {/* Top Left Blue Block */}
      <div style={styles.topLeftBlueBlock}></div>

      <div style={styles.container}>
        
        {/* Left Column: Floating Card */}
        <div style={styles.card}>
          <div style={styles.profileWrapper}>
            {personal.profileImage ? (
               <img src={personal.profileImage} alt={personal.name} style={styles.profileImage} />
            ) : (
               <img src="https://static.wixstatic.com/media/188c5c_92dca0ba95504989b81c747daf91a13a~mv2.jpeg/v1/fill/w_205,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aarav%20mehta.jpeg" alt="Placeholder" style={styles.profileImage} />
            )}
          </div>
          
          <h1 style={styles.cardTitle}>{personal.name}</h1>
          <hr style={styles.divider} />
          <h2 style={styles.cardSubtitle}>{personal.title}</h2>
          
          <div style={styles.cardSocials}>
            {socials.youtube && <a href={socials.youtube} style={styles.socialIcon}>YT</a>}
            {socials.facebook && <a href={socials.facebook} style={styles.socialIcon}>FB</a>}
            {socials.twitter && <a href={socials.twitter} style={styles.socialIcon}>TW</a>}
            {socials.linkedin && <a href={socials.linkedin} style={styles.socialIcon}>IN</a>}
            {socials.instagram && <a href={socials.instagram} style={styles.socialIcon}>IG</a>}
          </div>
        </div>

        {/* Right Column: About Content */}
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutTitle}>About Me</h2>
          
          <div style={styles.aboutText}>
            <p style={{ margin: '0 0 15px 0' }}>{personal.about}</p>
            <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px' }}>
              <li>Full-Stack Development</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing.</li>
            </ul>
            <p style={{ margin: 0 }}>
              I'm deeply committed to building innovative and scalable applications that tackle real-world problems through technology.
            </p>
          </div>
          
          <div style={styles.actions}>
            <Link to="/resume" className="btn" style={styles.btnSolid}>Resume</Link>
            <Link to="/projects" className="btn" style={styles.btnOutline}>PROJECTS</Link>
          </div>

          <p style={styles.footerText}>
            With a strong foundation in both front-end and back-end development, I'm eager to contribute to impactful projects and continue growing in this exciting field. Currently, I'm pursuing my B.Tech in Computer Science & Engineering and constantly honing my skills in emerging technologies to stay at the forefront of software development.
          </p>
        </div>

      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f8f8f8',
    backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)', /* Increased opacity for better contrast */
    zIndex: 1
  },
  topLeftBlueBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '35%',
    height: '100px',
    backgroundColor: '#88a6bd', /* Matching the blue strip from target */
    zIndex: 2
  },
  container: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '60px',
    maxWidth: '1000px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px'
  },
  card: {
    backgroundColor: '#f6efe9', /* Creamy beige to match target */
    borderRadius: '4px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 300px',
    maxWidth: '350px'
  },
  profileWrapper: {
    marginBottom: '20px'
  },
  profileImage: {
    width: '100%', 
    height: 'auto',
    maxWidth: '180px',
    borderRadius: '12px',
    objectFit: 'contain',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  cardTitle: {
    fontSize: '26px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    marginBottom: '10px'
  },
  divider: {
    width: '40px',
    border: 'none',
    borderBottom: '1px solid #000624', /* thinner divider */
    margin: '10px auto 15px'
  },
  cardSubtitle: {
    fontSize: '14px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    fontWeight: 'normal',
    lineHeight: '1.6',
    maxWidth: '220px'
  },
  cardSocials: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
    padding: '10px'
  },
  socialIcon: {
    color: '#000624',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  aboutContent: {
    flex: '1 1 300px',
    textAlign: 'left',
    padding: '0 15px'
  },
  aboutTitle: {
    fontSize: '54px', /* Larger */
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    marginBottom: '20px',
    fontWeight: 'normal'
  },
  aboutText: {
    fontSize: '18px',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    lineHeight: '1.8',
    marginBottom: '30px',
    fontWeight: '400',
    maxWidth: '450px'
  },
  actions: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px'
  },
  btnSolid: {
    padding: '10px 30px',
    backgroundColor: '#000624',
    color: '#ffffff',
    borderRadius: '50px',
    fontSize: '12px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: '2px solid #000624',
    transition: '0.3s'
  },
  btnOutline: {
    padding: '10px 30px',
    backgroundColor: 'transparent',
    color: '#000624',
    borderRadius: '50px',
    fontSize: '12px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: '2px solid #000624',
    transition: '0.3s'
  },
  footerText: {
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    fontWeight: '400',
    color: '#000624',
    lineHeight: '1.8',
    maxWidth: '450px'
  }
};

export default Hero;
