import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  // Convert Google Drive links into displayable thumbnail URLs
  const getCertificateImage = (cert) => {
    if (cert.image) {
      return cert.image;
    }

    if (cert.verifyLink) {
      const match = cert.verifyLink.match(/\/d\/([^/]+)/);

      if (match) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1200`;
      }
    }

    return '';
  };

  return (
    <section id="certifications" style={styles.certSection}>

      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>
            Certifications & Courses
          </h2>
          <p style={styles.bannerSubtitle}>
            Continuous learning and professional development
          </p>
        </div>
      </div>

      {/* Certificate List */}
      <div style={styles.listContainer}>

        {portfolioData.certifications.map((cert, index) => {
          const isEven = index % 2 === 0;
          const certificateImage = getCertificateImage(cert);

          return (
            <div
              key={index}
              style={{
                ...styles.certItem,
                flexDirection: isEven ? 'row' : 'row-reverse',
              }}
            >

              {/* Certificate Image */}
              <div style={styles.imageWrapper}>
                {certificateImage ? (
                  <img
                    src={certificateImage}
                    alt={`${cert.title} certificate`}
                    style={styles.certImage}
                  />
                ) : (
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.placeholderText}>
                      CERTIFICATE
                    </span>
                  </div>
                )}
              </div>

              {/* Certificate Information */}
              <div
                style={{
                  ...styles.textWrapper,
                  alignItems: isEven ? 'flex-start' : 'flex-end',
                  textAlign: isEven ? 'left' : 'right',
                }}
              >
                <span style={styles.indexNumber}>
                  0{index + 1}
                </span>

                <h3 style={styles.certTitle}>
                  {cert.title}
                </h3>

                <p style={styles.organization}>
                  {cert.organization}
                </p>

                <p style={styles.date}>
                  {cert.date}
                </p>

                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.verifyLink}
                  >
                    Verify Certificate →
                  </a>
                )}
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

const styles = {
  certSection: {
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh',
    paddingBottom: '100px',
  },

  /* Banner */
  bannerContainer: {
    width: '100%',
    height: '250px',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '70px',
  },

  bannerOverlay: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    padding: '25px 45px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
  },

  bannerTitle: {
    fontSize: '28px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: 0,
  },

  bannerSubtitle: {
    margin: '8px 0 0',
    fontSize: '13px',
    color: '#777',
  },

  /* List */
  listContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
  },

  certItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '55px 0',
    borderBottom: '1px solid #eaeaea',
    gap: '60px',
  },

  /* Image */
  imageWrapper: {
    flex: '1 1 55%',
    minWidth: 0,
  },

  certImage: {
    width: '100%',
    height: '240px',
    objectFit: 'contain',
    display: 'block',
    backgroundColor: '#fff',
    border: '1px solid #eeeeee',
    boxShadow: '6px 6px 0px rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease',
  },

  imagePlaceholder: {
    width: '100%',
    height: '240px',
    backgroundColor: '#f6efe9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #eeeeee',
  },

  placeholderText: {
    fontSize: '12px',
    color: '#999',
    letterSpacing: '2px',
  },

  /* Text */
  textWrapper: {
    flex: '1 1 45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  indexNumber: {
    fontSize: '13px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#3b6e9c',
    letterSpacing: '1px',
  },

  certTitle: {
    fontSize: '21px',
    fontFamily: 'var(--font-headings)',
    lineHeight: '1.4',
    margin: 0,
    color: '#000624',
  },

  organization: {
    fontSize: '14px',
    fontWeight: '600',
    margin: '10px 0 4px',
    color: '#3b6e9c',
  },

  date: {
    fontSize: '12px',
    margin: '0 0 15px',
    color: '#777',
  },

  verifyLink: {
    display: 'inline-block',
    fontSize: '11px',
    color: '#ffffff',
    backgroundColor: '#000624',
    padding: '9px 16px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  },
};

export default Certifications;