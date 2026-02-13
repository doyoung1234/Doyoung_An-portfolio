import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const projectList = [
    {
      title: "UBC Capstone: Energy Systems Simulation",
      subtitle: "Industry Partner: Fluor Corporation",
      description: "Developing high-fidelity energy forecasting models and Small Modular Reactor (SMR) integration simulations. Focused on decarbonizing industrial power systems through advanced load flow analysis and modular nuclear integration.",
      deliverables: "Technical simulation report, load forecasting algorithms, SMR feasibility study.",
      tags: ["JavaScript", "Python", "Power Systems", "Energy Modeling", "SMR"]
    },
    {
      title: "Distribution Feeder Design & Load Flow",
      subtitle: "Utility Engineering Study",
      description: "Design of a 12.47 kV distribution feeder for a residential sector. Performed diversity factor-based load estimation, transformer sizing, and voltage drop analysis. Conducted an EV penetration study to assess grid reliability under future load scenarios.",
      deliverables: "Single Line Diagrams (SLD), Voltage drop calculations, EV impact report.",
      tags: ["ETAP", "OpenDSS", "MATLAB", "Distribution"]
    },
    {
      title: "Short Circuit & Protection Coordination",
      subtitle: "Industrial Power System Analysis",
      description: "Modeled a complex industrial facility to perform short-circuit analysis and breaker sizing. Developed Time-Current Curves (TCC) to ensure selective coordination across the system and performed Arc Flash studies using IEEE 1584 methodology.",
      deliverables: "Short circuit report, TCC curves, Arc Flash labels & PPE categories.",
      tags: ["SKM", "Protection", "IEEE 1584", "Arc Flash"]
    },
    {
      title: "Revit Residential Electrical Design",
      subtitle: "BIM & CEC Compliance",
      description: "Comprehensive electrical design for a residential project following the Canadian Electrical Code (CEC). Includes panel schedules, lighting layout with lux estimation, and solar-ready panelboard configuration.",
      deliverables: "Revit BIM Model, Load schedules, Lighting plans.",
      tags: ["Revit", "CEC", "Consulting", "AGI32"]
    }
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalContainerStyle}>
        
        {/* Close Button */}
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

        {/* Header */}
        <header style={headerGroup}>
          <h2 style={sectionTitleStyle}>Technical Projects</h2>
          <div style={dividerStyle}></div>
        </header>

        {/* Vertical Scroll Content */}
        <div style={scrollContentStyle}>
          <div style={verticalFeedStyle}>
            {projectList.map((project, index) => (
              <div key={index} style={projectRowStyle}>
                <div style={detailsStyle}>
                  <h4 style={projectSubtitleStyle}>{project.subtitle}</h4>
                  <h3 style={projectTitleStyle}>{project.title}</h3>
                  <p style={projectDescriptionStyle}>{project.description}</p>
                  
                  <div style={deliverableBox}>
                    <span style={deliverableLabel}>Technical Scope: </span>
                    <span style={deliverableText}>{project.deliverables}</span>
                  </div>

                  <div style={tagContainerStyle}>
                    {project.tags.map(tag => (
                      <span key={tag} style={tagStyle}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Footer (No Text) */}
        <footer style={footerStyle}>
           <div style={tickMark}></div>
        </footer>
      </div>
    </div>
  );
}

// --- Styles (Scaled down for consistency) ---

const overlayStyle = {
  height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',
  background: 'rgba(239, 235, 224, 0.7)', backdropFilter: 'blur(12px)', position: 'fixed', top: 0, left: 0, zIndex: 100
};

const modalContainerStyle = {
  background: '#F9F7F2', width: '800px', maxHeight: '85vh', padding: '50px', position: 'relative',
  border: '1px solid #DEDAD2', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column'
};

const closeButtonStyle = {
  position: 'absolute', top: '30px', right: '30px', fontSize: '18px', textDecoration: 'none', transition: 'all 0.4s ease', zIndex: 10
};

const headerGroup = { marginBottom: '15px' };

const sectionTitleStyle = {
  fontFamily: '"Times New Roman", serif', fontSize: '2.8rem', margin: 0, color: '#222', letterSpacing: '-1px'
};

const dividerStyle = { width: '40px', height: '1.5px', background: '#C4C0B7', marginTop: '12px' };

const scrollContentStyle = { 
  overflowY: 'auto', 
  marginTop: '25px',
  paddingRight: '15px' 
};

const verticalFeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  width: '100%'
};

const projectRowStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '35px',
  borderBottom: '1px solid #EAE8E1'
};

const detailsStyle = { flex: 1 };

const projectSubtitleStyle = { 
  fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#AAA', marginBottom: '6px', fontWeight: '700' 
};

const projectTitleStyle = { 
  fontFamily: '"Times New Roman", serif', fontSize: '1.5rem', color: '#222', margin: 0, lineHeight: '1.2' 
};

const projectDescriptionStyle = { 
  fontSize: '0.9rem', color: '#555', lineHeight: '1.6', margin: '15px 0', maxWidth: '600px' 
};

const deliverableBox = { 
  background: '#F1EFE9', padding: '12px', borderRadius: '2px', marginBottom: '15px', borderLeft: '2px solid #C4C0B7' 
};

const deliverableLabel = { fontSize: '0.7rem', fontWeight: '700', color: '#777', textTransform: 'uppercase' };

const deliverableText = { fontSize: '0.85rem', color: '#666', fontStyle: 'italic' };

const tagContainerStyle = { display: 'flex', gap: '8px', flexWrap: 'wrap' };

const tagStyle = { 
  fontSize: '0.6rem', color: '#999', border: '1px solid #DEDAD2', padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' 
};

const footerStyle = { marginTop: '30px', display: 'flex', alignItems: 'center' };

const tickMark = { width: '1px', height: '20px', background: '#C4C0B7' };

export default Projects;