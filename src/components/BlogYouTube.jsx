import React from 'react';
import { portfolioData } from '../data/portfolioData';

const BlogYouTube = () => {
  const { blog, youtube } = portfolioData;

  return (
    <section id="blog-youtube" style={styles.section}>

      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>My Blog and YouTube<br />Channel</h2>
          <p style={styles.bannerDescription}>
            Welcome to my creative space, where I share insights, ideas, and expertise through my blog and YouTube channel. My blog dives into thought-provoking topics, offering tips, reflections, and in-depth articles, while my YouTube channel brings concepts to life with engaging visuals and tutorials. Together, they serve as platforms to inspire, educate, and connect with a wider audience, blending creativity with meaningful content.
          </p>
        </div>
      </div>

      <div style={styles.contentContainer}>

        {/* Blog Section */}
        <div style={styles.mediaBlock}>
          <h3 style={styles.sectionTitle}>Blog</h3>
          <a href="#" style={styles.sectionLink}>Link to my Blog: [ADD BLOG LINK]</a>

          <div style={styles.blogGrid}>
            {blog.map((post, index) => (
              <a href={post.link} key={index} style={styles.blogCard}>
                <div style={styles.blogImagePlaceholder}>
                  {post.thumbnail ? (
                    <img src={post.thumbnail} alt={post.title} style={styles.image} />
                  ) : (
                    <span style={styles.placeholderText}>[BLOG THUMBNAIL]</span>
                  )}
                </div>
                <div style={styles.blogContent}>
                  <h4 style={styles.blogTitle}>{post.title || '[ADD BLOG TITLE]'}</h4>
                  <p style={styles.blogAuthorDate}>Hemanth reddy <br /> {post.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <hr style={styles.divider} />

        {/* YouTube Section */}
        <div style={styles.mediaBlock}>
          <h3 style={styles.sectionTitle}>My YouTube Channel</h3>
          <a href="#" style={styles.sectionLink}>Link to my YouTube Channel: [ADD YOUTUBE LINK]</a>

          <div style={styles.youtubeContainer}>
            {youtube.map((video, index) => (
              <a href={video.link} key={index} style={styles.youtubeCard}>
                <div style={styles.youtubeImagePlaceholder}>
                  {video.thumbnail ? (
                    <img src={video.thumbnail} alt={video.title} style={styles.image} />
                  ) : (
                    <span style={styles.placeholderText}>[YOUTUBE VIDEO THUMBNAIL]</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh',
    paddingBottom: '80px'
  },
  bannerContainer: {
    width: '100%',
    height: '350px',
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
    padding: '40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    maxWidth: '650px',
    textAlign: 'left'
  },
  bannerTitle: {
    fontSize: '28px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: '0 0 15px 0',
    lineHeight: '1.2'
  },
  bannerDescription: {
    fontSize: '11px',
    color: '#555',
    lineHeight: '1.6',
    margin: 0
  },
  contentContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    padding: '0 20px'
  },
  mediaBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '18px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    marginBottom: '5px',
    margin: 0
  },
  sectionLink: {
    fontSize: '11px',
    color: '#3b6e9c',
    textDecoration: 'underline',
    marginBottom: '40px'
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#eaeaea',
    border: 'none',
    margin: 0
  },
  blogGrid: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  blogCard: {
    width: '350px',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  blogImagePlaceholder: {
    width: '100%',
    height: '180px',
    backgroundColor: '#f6efe9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blogContent: {
    padding: '20px',
    textAlign: 'center' /* The screenshot shows centered text inside the blog card */
  },
  blogTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#000624'
  },
  blogAuthorDate: {
    fontSize: '11px',
    color: '#777',
    margin: 0
  },
  youtubeContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  youtubeCard: {
    width: '500px',
    maxWidth: '100%',
    textDecoration: 'none'
  },
  youtubeImagePlaceholder: {
    width: '100%',
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
    backgroundColor: '#f6efe9',
    position: 'relative',
    boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.05)',
    overflow: 'hidden'
  },
  placeholderText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '12px',
    color: '#999',
    letterSpacing: '1px'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
};

export default BlogYouTube;
