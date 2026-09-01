import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      
      <div style={styles.titleContainer}>
        <div style={styles.blueSquare}></div>
        <h2 style={styles.sectionTitle}>Let's talk</h2>
      </div>

      <div style={styles.cardContainer}>
        <form style={styles.form}>
          
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>First Name *</label>
              <input type="text" style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Last Name *</label>
              <input type="text" style={styles.input} required />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email *</label>
            <input type="email" style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Subject</label>
            <input type="text" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea}></textarea>
          </div>

          <button type="submit" style={styles.submitBtn}>Send</button>

        </form>
      </div>

    </section>
  );
};

const styles = {
  contactSection: {
    backgroundColor: '#cdebf9', /* Light blue background from screenshot */
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
    paddingBottom: '80px'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '40px'
  },
  blueSquare: {
    width: '16px',
    height: '16px',
    backgroundColor: '#3b6e9c'
  },
  sectionTitle: {
    fontSize: '28px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: 0
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '650px',
    padding: '60px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  row: {
    display: 'flex',
    gap: '30px',
    width: '100%'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  label: {
    fontSize: '11px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#000624'
  },
  input: {
    width: '100%',
    padding: '10px 0',
    border: 'none',
    borderBottom: '1px solid #000624',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#000624',
    outline: 'none',
    fontFamily: 'var(--font-family)'
  },
  textarea: {
    width: '100%',
    padding: '10px 0',
    border: 'none',
    borderBottom: '1px solid #000624',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#000624',
    outline: 'none',
    minHeight: '80px',
    resize: 'vertical',
    fontFamily: 'var(--font-family)'
  },
  submitBtn: {
    backgroundColor: '#1c1c3c', /* Dark pill button */
    color: '#ffffff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 30px',
    fontSize: '12px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '10px',
    transition: 'background-color 0.2s'
  }
};

export default Contact;
