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
            Electrical Engineering @ UBC | Graduating April 2026
          </h3>

          <div style={bodyTextStyle}>
            <p>
              I am a fourth-year Electrical Engineering student at the University of British Columbia. 
              My expertise lies in <strong>industrial energy operations</strong> and <strong>power systems modeling</strong>, 
              supported by a diverse background in field inspections, technical documentation, and electronic design.
            </p>

            <h4 style={subHeaderStyle}>Industrial Power & Utilities (Suncor Energy)</h4>
            <p>
              At <strong>Suncor Energy</strong>, I managed the maintenance of over 200 oil transformers, 
              identifying faults and prioritizing corrective actions based on <strong>IEEE and Suncor standards</strong>. 
              I played a critical role in 18 substation turnarounds, where I coordinated with engineers and contractors to verify 
              testing progress and safety compliance prior to re-energization.
            </p>
            <p>
              My field experience is backed by technical proficiency in <strong>AutoCAD</strong>, where I executed 
              precise as-built redlines of single-line diagrams and developed comprehensive <strong>Scopes of Work</strong> for 
              high-voltage equipment including circuit breakers, NGRs, and arrestors.
            </p>

            <h4 style={subHeaderStyle}>Energy Systems Simulation (Fluor Capstone)</h4>
            <p>
              For my UBC Capstone project with <strong>Fluor</strong>, I am developing a Small Modular Reactor (SMR) 
              module for the <strong>PURE-SIM</strong> simulation tool. My work involves performing 
              complex <strong>load analysis</strong> and forecasting to optimize energy configurations for remote 
              mining operations, comparing the reliability and performance of SMRs against solar, wind, and 
              hydro sources.
            </p>

            <h4 style={subHeaderStyle}>Electronic Systems & Prototyping (Salyx Medical)</h4>
            <p>
              In the electronics field at <strong>Salyx Medical</strong>, I designed and simulated USB-C charging 
              circuits integrating protection ICs, buck converters, and operational amplifiers. 
              Using <strong>LTspice</strong> for testing and <strong>PCB schematic design</strong> for prototyping, 
              I gained a deep understanding of the iterative design cycle and technical documentation, including 
              Bill of Materials (BOMs).
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

// --- Styles (Same as previous for consistency) ---

const overlayStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(239, 235, 224, 0.7)', 
  backdropFilter: 'blur(8px)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  margin: 0
};

const modalContainerStyle = {
  background: '#F9F7F2',
  width: '800px', 
  height: 'auto',
  maxHeight: '85vh',
  padding: '60px',
  position: 'relative',
  border: '1px solid #DEDAD2',
  boxShadow: '0 50px 100px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: '2px'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '30px',
  right: '30px',
  fontSize: '22px',
  textDecoration: 'none',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  zIndex: 5,
  fontFamily: 'Arial, sans-serif',
  fontWeight: '300'
};

const scrollContentStyle = {
  overflowY: 'auto',
  zIndex: 1,
  paddingRight: '15px',
  scrollbarWidth: 'thin',
  scrollbarColor: '#DEDAD2 transparent'
};

const sectionTitleStyle = {
  fontFamily: '"Times New Roman", serif',
  fontSize: '3.8rem',
  margin: 0,
  color: '#222',
  letterSpacing: '-1.5px',
  lineHeight: '1'
};

const dividerStyle = {
  width: '60px',
  height: '2px',
  background: '#C4C0B7',
  marginTop: '12px'
};

const subTitleStyle = {
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  color: '#888',
  margin: '30px 0 45px 0',
  fontWeight: '600'
};

const bodyTextStyle = {
  fontSize: '1.05rem',
  lineHeight: '1.85',
  color: '#444',
  fontWeight: '300',
  textAlign: 'justify'
};

const subHeaderStyle = {
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  color: '#222',
  marginTop: '35px',
  marginBottom: '12px',
  fontWeight: '700',
  borderLeft: '2px solid #DEDAD2',
  paddingLeft: '15px'
};

const footerStyle = {
  marginTop: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
};

const tickMark = {
  width: '1px',
  height: '25px',
  background: '#C4C0B7'
};

const headerGroup = { marginBottom: '5px' };

export default About_me;