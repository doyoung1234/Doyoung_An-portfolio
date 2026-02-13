import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About_me() {
  const [isHovered, setIsHovered] = useState(false);

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
            <h2 style={sectionTitleStyle}>About Me</h2>
            <div style={dividerStyle}></div>
          </header>

          <h3 style={subTitleStyle}>
            Electrical Engineering @ UBC | Graduating 2026
          </h3>

          <div style={bodyTextStyle}>
            <p>
              I am a fourth-year Electrical Engineering student at the University of British Columbia,
              graduating in <strong>April 2026.</strong> I specialize in <strong>industrial energy operations</strong>{" "}
              and <strong>power systems modeling</strong>. My technical foundation is built on a diverse background 
              spanning field inspections, electronic design, and technical documentation. 
            </p>
            <p>
              I am aspiring to leverage this expertise within the <strong>consulting and utility sectors</strong>, 
              where I can contribute to large-scale infrastructure projects and the optimization of 
              modern energy systems.
            </p>
          </div>

          <footer style={footerStyle}>
             <div style={tickMark}></div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// --- Styles ---

const overlayStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(239, 235, 224, 0.7)', 
  backdropFilter: 'blur(12px)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100
};

const modalContainerStyle = {
  background: '#F9F7F2',
  width: '850px', 
  padding: '60px',
  position: 'relative',
  border: '1px solid #DEDAD2',
  boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Times New Roman", Times, serif'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '35px',
  right: '35px',
  fontSize: '20px',
  textDecoration: 'none',
  transition: 'all 0.4s ease',
  zIndex: 5
};

const scrollContentStyle = {
  zIndex: 1
};

const sectionTitleStyle = {
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '3.4rem',
  margin: 0,
  color: '#222',
  letterSpacing: '-1px'
};

const dividerStyle = {
  width: '40px',
  height: '1.5px',
  background: '#C4C0B7',
  marginTop: '12px'
};

const subTitleStyle = {
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#AAA',
  margin: '25px 0 35px 0',
  fontWeight: '700'
};

const bodyTextStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  color: '#444',
  maxWidth: '650px'
};

const footerStyle = {
  marginTop: '50px',
  display: 'flex',
  alignItems: 'center'
};

const tickMark = {
  width: '1px',
  height: '20px',
  background: '#C4C0B7'
};

const headerGroup = { marginBottom: '5px' };

export default About_me;