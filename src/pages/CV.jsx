import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  const [isHovered, setIsHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

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
            <h2 style={sectionTitleStyle}>CV</h2>
            <div style={dividerStyle}></div>
          </header>

          <div style={topActionArea}>
            
            {/* Download Button */}
            <a 
              href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/DoyoungAn_electrical_resume.pdf`}
              download="Doyoung_An_Resume.pdf"
              style={{
                ...downloadBtnStyle,
                backgroundColor: btnHover ? '#222' : 'transparent',
                color: btnHover ? '#FFF' : '#222'
              }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              Download Doyoung's Resume
            </a>
          </div>

          <div style={bodyTextStyle}>
            <h4 style={subHeaderStyle}>Education</h4>
            <div style={cvRow}>
              <div style={cvMain}>
                <span style={companyName}>University of British Columbia</span>
                <span style={jobTitle}>Bachelor of Applied Science - Electrical Engineering</span>
              </div>
              <span style={durationText}>Expected April 2026</span>
            </div>

            <h4 style={subHeaderStyle}>Professional Experience</h4>
            <div style={cvRow}>
              <div style={cvMain}>
                <span style={companyName}>Salyx Medical</span>
                <span style={jobTitle}>Electronic Engineer Co-op</span>
              </div>
              <span style={durationText}>Sept 2024 – April 2025</span>
            </div>

            <div style={cvRow}>
              <div style={cvMain}>
                <span style={companyName}>Suncor Energy</span>
                <span style={jobTitle}>Electrical Engineer Co-op</span>
              </div>
              <span style={durationText}>Sept 2023 – August 2024</span>
            </div>

            <h4 style={subHeaderStyle}>Technical Projects</h4>
            <div style={cvRow}>
              <div style={cvMain}>
                <span style={companyName}>Fluor Corporation</span>
                <span style={jobTitle}>Energy Systems Simulation (UBC Capstone)</span>
              </div>
              <span style={durationText}>Sept 2025 – Present</span>
            </div>

            <h4 style={subHeaderStyle}>Core Competencies</h4>
            <p style={skillsText}>
              Power Systems Modeling • Load Analysis • High & Medium Voltage Equipment • Substation Inspections • AutoCAD • LTspice • PURE-SIM • SAP
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
  height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',
  background: 'rgba(239, 235, 224, 0.7)', backdropFilter: 'blur(8px)', position: 'fixed', top: 0, left: 0, zIndex: 100
};

const modalContainerStyle = {
  background: '#F9F7F2', width: '850px', maxHeight: '85vh', padding: '60px', position: 'relative',
  border: '1px solid #DEDAD2', boxShadow: '0 50px 100px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', overflow: 'hidden'
};

const closeButtonStyle = {
  position: 'absolute', top: '30px', right: '30px', fontSize: '22px', textDecoration: 'none', transition: 'all 0.4s ease'
};

const scrollContentStyle = { overflowY: 'auto', paddingRight: '15px' };

const sectionTitleStyle = {
  fontFamily: '"Times New Roman", serif', fontSize: '3.8rem', margin: 0, color: '#222', letterSpacing: '-1.5px'
};

const dividerStyle = { width: '60px', height: '2px', background: '#C4C0B7', marginTop: '12px' };

const topActionArea = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', marginBottom: '45px'
};

const subTitleStyle = {
  fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px', color: '#888', margin: 0, fontWeight: '600'
};

const downloadBtnStyle = {
  padding: '10px 20px', border: '1px solid #222', fontSize: '0.75rem', textTransform: 'uppercase',
  letterSpacing: '1px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer'
};

const subHeaderStyle = {
  fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999', marginTop: '40px', marginBottom: '20px', fontWeight: '700'
};

const cvRow = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', borderBottom: '1px solid #EAE8E1', paddingBottom: '15px'
};

const cvMain = { display: 'flex', flexDirection: 'column', gap: '4px' };

const companyName = { fontSize: '1.2rem', color: '#222', fontWeight: '500', fontFamily: '"Times New Roman", serif' };

const jobTitle = { fontSize: '0.9rem', color: '#666', fontStyle: 'italic' };

const durationText = { fontSize: '0.85rem', color: '#999', textAlign: 'right', minWidth: '150px' };

const skillsText = { fontSize: '0.95rem', color: '#444', lineHeight: '1.6', letterSpacing: '0.5px' };

const footerStyle = { marginTop: '60px', display: 'flex', alignItems: 'center' };

const tickMark = { width: '1px', height: '25px', background: '#C4C0B7' };

const bodyTextStyle = { paddingBottom: '20px' };

const headerGroup = { marginBottom: '5px' };

export default Resume;