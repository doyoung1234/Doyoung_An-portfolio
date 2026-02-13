import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home_page() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div style={fullPageStyle}>
      <div style={verticalLineLeft}></div>
      <div style={verticalLineRight}></div>

      <div style={contentBoxStyle}>
        <div style={mainProfileLayout}>
          
          <div style={photoContainer}>
            <div style={photoTick}></div>
          </div>

          <div style={textContentStyle}>
            <div style={topSection}>
              <h1 style={nameStyle}>Doyoung An</h1>
              
              <div style={headerGroup}>
                <h3 style={titleStyle}>Electrical Engineering Graduate 2026 | Power Systems & Utilities</h3>
                <div style={dividerContainer}>
                  <div style={dividerStyle}></div>
                  <div style={tickMark}></div>
                </div>
              </div>
            </div>

            <p style={welcomeStyle}>
              Aspiring to provide specialized technical expertise in power systems and utility infrastructure. 
              I am driven by the challenge of optimizing energy networks and providing high-value engineering 
              consultancy to meet complex industry demands.
            </p>

            <nav style={navLinksStyle}>
              {['About Me', 'CV', 'Projects', 'Contact'].map((label) => {
                const targetPath = label === 'About Me' ? '/about_me' : `/${label.toLowerCase()}`;
                
                return (
                  <Link 
                    key={label}
                    to={targetPath} 
                    style={{
                      ...linkButtonStyle,
                      transform: hoveredButton === label ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: hoveredButton === label 
                        ? '0 12px 24px rgba(0,0,0,0.1)' 
                        : '0 4px 10px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={() => setHoveredButton(label)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

const fullPageStyle = {
  height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',
  background: 'linear-gradient(to right, #FAF9F6 0%, #FAF9F6 6%, #EFEBE0 6%, #EFEBE0 94%, #FAF9F6 94%, #FAF9F6 100%)',
  margin: 0, fontFamily: '"Times New Roman", Times, serif', position: 'relative', overflow: 'hidden'
};

const verticalLineLeft = { position: 'absolute', left: '6%', top: 0, bottom: 0, width: '1px', background: 'rgba(196, 192, 183, 0.4)', zIndex: 1 };
const verticalLineRight = { position: 'absolute', right: '6%', top: 0, bottom: 0, width: '1px', background: 'rgba(196, 192, 183, 0.4)', zIndex: 1 };

const contentBoxStyle = {
  background: '#F9F7F2', width: '1150px', height: '680px', display: 'flex',
  alignItems: 'center', padding: '0 80px', zIndex: 2,
  border: '1px solid #DEDAD2', boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
};

const mainProfileLayout = { display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-start' };

const photoContainer = {
  position: 'relative', flexShrink: 0, marginLeft: '10px', width: '300px', height: '480px'
};

const photoTick = {
  position: 'absolute', top: '-8px', left: '-8px', width: '24px', height: '24px',
  borderLeft: '1px solid #C4C0B7', borderTop: '1px solid #C4C0B7'
};

const textContentStyle = {
  display: 'flex', flexDirection: 'column', textAlign: 'left',
  marginLeft: '80px', // NUDGED TO THE RIGHT
  maxWidth: '720px', flexGrow: 1, paddingLeft: '40px',
  borderLeft: '1px solid rgba(222, 218, 210, 0.8)' 
};

const nameStyle = {
  fontFamily: '"Times New Roman", Times, serif', fontSize: '5.8rem', margin: '0 0 12px 0',
  fontWeight: '400', letterSpacing: '-2px', color: '#222', lineHeight: '0.95'
};

const titleStyle = {
  fontSize: '0.9rem', color: '#999', textTransform: 'uppercase',
  letterSpacing: '3.5px', fontWeight: '600', margin: 0, whiteSpace: 'nowrap' 
};

const dividerContainer = { display: 'flex', alignItems: 'center', margin: '10px 0 40px 0', width: '100%' };
const dividerStyle = { width: '100%', height: '1px', background: '#DEDAD2' };
const tickMark = { width: '1px', height: '18px', background: '#C4C0B7', marginLeft: '10px' };

const welcomeStyle = { fontSize: '1.2rem', color: '#444', lineHeight: '1.8', marginBottom: '50px', fontWeight: '300' };

const navLinksStyle = { display: 'flex', gap: '18px', justifyContent: 'flex-start' };

const linkButtonStyle = {
  padding: '14px 0', background: '#FFF', border: '1px solid #D1CEC7', borderBottom: '2px solid #C4C0B7', 
  color: '#333', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem',
  textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', width: '135px',
  transition: 'all 0.2s ease-in-out', display: 'inline-block'
};

const topSection = { marginBottom: '0px' };
const headerGroup = { display: 'inline-block', width: 'fit-content' };

export default Home_page;