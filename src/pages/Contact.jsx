import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  return (
    <div style={overlayStyle}>
      <div style={modalContainerStyle}>
        
        {/* Close Button "X" */}
        <Link 
          to="/" 
          style={{
            ...closeButtonStyle,
            color: isHovered ? '#222' : '#A09C94',
            transform: isHovered ? 'rotate(90deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ✕
        </Link>

        {/* Content Area */}
        <div style={scrollContentStyle}>
          <header style={headerGroup}>
            <h2 style={sectionTitleStyle}>Contact</h2>
            <div style={dividerStyle}></div>
          </header>

          <div style={bodyTextStyle}>
            <p style={introText}>
              I am currently seeking opportunities for my Electrical EIT or New Grad roles 
              starting in May 2026. If you have any questions or would like to discuss potential
              opportunties, please reach out at my email.
            </p>

            <div style={contactDetails}>
              <h4 style={subHeaderStyle}>Direct Email</h4>
              <a 
                href="mailto:doyoung.an.eng@gmail.com"
                style={{
                  ...emailLinkStyle,
                  color: emailHover ? '#222' : '#666',
                  borderBottom: emailHover ? '1px solid #222' : '1px solid #DEDAD2'
                }}
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
              >
                doyoung.an.eng@gmail.com
              </a>

              <h4 style={subHeaderStyle}>Location</h4>
              <p style={detailText}>Vancouver, BC • Canada</p>

              <h4 style={subHeaderStyle}>Social</h4>
              <p style={detailText}>
                <a href="https://linkedin.com/in/doyoung-an" target="_blank" rel="noreferrer" style={simpleLink}>LinkedIn</a>
              </p>
            </div>
          </div>

          <footer style={footerStyle}>
             <div style={tickMark}></div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// --- Styles (Consistent with CV) ---

const overlayStyle = {
  height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',
  background: 'rgba(239, 235, 224, 0.7)', backdropFilter: 'blur(8px)', position: 'fixed', top: 0, left: 0, zIndex: 100
};

const modalContainerStyle = {
  background: '#F9F7F2', width: '850px', padding: '60px', position: 'relative',
  border: '1px solid #DEDAD2', boxShadow: '0 50px 100px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', borderRadius: '2px'
};

const closeButtonStyle = {
  position: 'absolute', top: '30px', right: '30px', fontSize: '22px', textDecoration: 'none', transition: 'all 0.4s ease'
};

const scrollContentStyle = { zIndex: 1 };

const sectionTitleStyle = {
  fontFamily: '"Times New Roman", serif', fontSize: '3.8rem', margin: 0, color: '#222', letterSpacing: '-1.5px'
};

const dividerStyle = { width: '60px', height: '2px', background: '#C4C0B7', marginTop: '12px', marginBottom: '45px' };

const bodyTextStyle = { fontSize: '1.1rem', color: '#444', lineHeight: '1.6' };

const introText = { marginBottom: '40px', maxWidth: '500px', fontWeight: '300' };

const contactDetails = { marginTop: '20px' };

const subHeaderStyle = {
  fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999', marginTop: '30px', marginBottom: '10px', fontWeight: '700'
};

const emailLinkStyle = {
  fontSize: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', fontFamily: '"Times New Roman", serif', display: 'inline-block'
};

const detailText = { fontSize: '1rem', color: '#444', margin: 0 };

const simpleLink = { color: '#444', textDecoration: 'underline', cursor: 'pointer' };

const footerStyle = { marginTop: '80px', display: 'flex', alignItems: 'center' };

const tickMark = { width: '1px', height: '25px', background: '#C4C0B7' };

const headerGroup = { marginBottom: '5px' };

export default Contact;