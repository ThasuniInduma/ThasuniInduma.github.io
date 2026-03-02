import { useState, useEffect, useRef } from 'react'
import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// ─── SKILLS DATA ───────────────────────────────────────────────────────────────
const SKILLS = {
  Languages: {
    color: '#e879f9', bg: 'rgba(232,121,249,0.07)', border: 'rgba(232,121,249,0.18)',
    glyph: '{ }',
    items: [
      { name: 'Java',       icon: `${CDN}/java/java-original.svg` },
      { name: 'Python',     icon: `${CDN}/python/python-original.svg` },
      { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
      { name: 'Dart',       icon: `${CDN}/dart/dart-original.svg` },
      { name: 'C++',        icon: `${CDN}/cplusplus/cplusplus-original.svg` },
      { name: 'SQL',        icon: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg` },
    ]
  },
  Frontend: {
    color: '#22d3ee', bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.18)',
    glyph: '</>',
    items: [
      { name: 'React',        icon: `${CDN}/react/react-original.svg` },
      { name: 'Next.js',      icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Flutter',      icon: `${CDN}/flutter/flutter-original.svg` },
      { name: 'Tailwind CSS', icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'HTML5',        icon: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3',         icon: `${CDN}/css3/css3-original.svg` },
    ]
  },
  'Backend & APIs': {
    color: '#4ade80', bg: 'rgba(74,222,128,0.07)', border: 'rgba(74,222,128,0.18)',
    glyph: '⟳',
    items: [
      { name: 'Spring Boot', icon: `${CDN}/spring/spring-original.svg` },
      { name: 'Node.js',     icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express.js',  icon: `${CDN}/express/express-original.svg` },
      { name: 'REST APIs',   icon: null },
    ]
  },
  'Data & Tools': {
    color: '#fb923c', bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.18)',
    glyph: '◉',
    items: [
      { name: 'MySQL',      icon: `${CDN}/mysql/mysql-original.svg` },
      { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: 'MongoDB',    icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'Firebase',   icon: `${CDN}/firebase/firebase-original.svg` },
      { name: 'Git',        icon: `${CDN}/git/git-original.svg` },
    ]
  },
}

// ─── EDUCATION DATA ────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    id: 'bsc',
    degree: 'BSc (Hons) in Information Technology',
    institution: 'University of Kelaniya',
    period: '2024 – Present',
    status: 'current',
    color: '#22d3ee',
    icon: <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#22d3ee',
    }} />,
    description: 'Pursuing an Honours degree focused on software development, systems design, and modern computing practices.',
  },
  {
    id: 'java',
    degree: 'Comprehensive Master Java Developer Diploma',
    institution: 'IJSE – Institute of Software Engineering',
    period: '2023 – 2024',
    status: 'completed',
    color: '#e879f9',
    icon: <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#e879f9',
    }} />,
    description: 'Intensive professional diploma covering enterprise-level Java development, OOP, design patterns, and backend architecture.',
  },
  {
    id: 'al',
    degree: 'G.C.E. Advanced Level – Physical Science Stream',
    institution: 'H/Ruhunu Vijayaba College',
    period: '2020 – 2022',
    status: 'completed',
    color: '#4ade80',
    icon: <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#4ade80',
    }} />,
    description: 'Completed Advanced Level with Physical Science stream, building strong analytical and mathematical foundations.',
  },
]

// ─── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return inView
}

// ─── SKILL PILL ────────────────────────────────────────────────────────────────
function SkillPill({ item, color, bg, index, visible }) {
  const [hovered, setHovered] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px 10px 10px', borderRadius: 14,
        border: `1px solid ${hovered ? color + '50' : 'rgba(255,255,255,0.05)'}`,
        background: hovered ? bg : 'rgba(255,255,255,0.02)',
        cursor: 'default',
        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        transform: visible ? (hovered ? 'scale(1.05) translateX(4px)' : 'scale(1)') : 'translateX(-20px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${0.05 + index * 0.06}s`,
        boxShadow: hovered ? `0 4px 24px ${color}18, inset 0 0 0 1px ${color}20` : 'none',
        whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(105deg, transparent 40%, ${color}08 50%, transparent 60%)`,
          animation: 'shimmer 0.8s ease forwards', pointerEvents: 'none',
        }} />
      )}
      <div style={{
        width: 28, height: 28, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: hovered ? `drop-shadow(0 0 6px ${color}cc)` : 'none',
        transition: 'filter 0.3s, transform 0.3s',
        transform: hovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)',
      }}>
        {item.icon && !imgErr ? (
          <img src={item.icon} alt={item.name} width={24} height={24}
            onError={() => setImgErr(true)} style={{ objectFit: 'contain' }} />
        ) : (
          <div style={{
            width: 24, height: 24, borderRadius: 6,
            background: color + '20', border: `1px solid ${color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, fontWeight: 900, color, fontFamily: 'monospace',
          }}>
            {item.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <span style={{
        fontSize: '0.75rem', fontWeight: 600,
        color: hovered ? '#f1f5f9' : '#64748b',
        fontFamily: "'Sora', sans-serif",
        transition: 'color 0.3s', letterSpacing: '0.01em',
      }}>
        {item.name}
      </span>
    </div>
  )
}

// ─── SKILL PANEL ───────────────────────────────────────────────────────────────
function Panel({ catName, cat, panelIndex, visible }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24, border: `1px solid ${hovered ? cat.border : 'rgba(255,255,255,0.06)'}`,
        background: 'rgba(7,9,20,0.9)', backdropFilter: 'blur(20px)',
        overflow: 'hidden', position: 'relative', height: '100%',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: hovered
          ? `0 0 0 1px ${cat.color}20, 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 ${cat.color}15`
          : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
        transitionDelay: `${panelIndex * 0.1}s`,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${cat.color}70, ${cat.color}40, transparent)`,
        opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s',
      }} />
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%',
        background: `radial-gradient(circle, ${cat.color}12, transparent 70%)`,
        opacity: hovered ? 1 : 0.3, transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />
      <div style={{
        padding: '20px 22px 16px', display: 'flex', alignItems: 'center', gap: 12,
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: `linear-gradient(135deg, ${cat.bg}, transparent)`,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: cat.color + '18', border: `1px solid ${cat.color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, color: cat.color, fontFamily: 'monospace', fontWeight: 700,
          boxShadow: `0 0 12px ${cat.color}25`, flexShrink: 0,
        }}>
          {cat.glyph}
        </div>
        <h3 style={{
          margin: 0, flex: 1, fontSize: '0.95rem', fontWeight: 700,
          color: '#e2e8f0', letterSpacing: '-0.02em', fontFamily: "'Sora', sans-serif",
        }}>
          {catName}
        </h3>
        <div style={{
          padding: '3px 10px', borderRadius: 50,
          background: cat.color + '15', border: `1px solid ${cat.color}30`,
          fontSize: '0.65rem', color: cat.color,
          fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
        }}>
          {cat.items.length}
        </div>
      </div>
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {cat.items.map((item, i) => (
          <SkillPill key={item.name} item={item} color={cat.color} bg={cat.bg} index={i} visible={visible} />
        ))}
      </div>
    </div>
  )
}

// ─── EDUCATION TREE NODE ───────────────────────────────────────────────────────
function EduNode({ entry, index, visible, isLast }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      display: 'flex', gap: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-40px)',
      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
    }}>
      {/* ── Tree branch column ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
        {/* Node dot */}
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          border: `2px solid ${entry.color}`,
          background: `radial-gradient(circle at 35% 35%, ${entry.color}30, rgba(7,9,20,0.95))`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18,
          boxShadow: hovered
            ? `0 0 0 6px ${entry.color}18, 0 0 24px ${entry.color}50`
            : `0 0 0 4px ${entry.color}10, 0 0 12px ${entry.color}30`,
          transition: 'box-shadow 0.4s ease',
          position: 'relative', zIndex: 1,
          cursor: 'default',
        }}>
          {entry.icon}
          {/* Pulsing ring for current */}
          {entry.status === 'current' && (
            <div style={{
              position: 'absolute', inset: -6, borderRadius: '50%',
              border: `1.5px solid ${entry.color}`,
              animation: 'ping 2s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
          )}
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div style={{
            width: 2, flex: 1, minHeight: 32, marginTop: 4,
            background: `linear-gradient(to bottom, ${entry.color}60, rgba(255,255,255,0.05))`,
            borderRadius: 1,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Animated pulse traveling down */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
              background: `linear-gradient(to bottom, ${entry.color}, transparent)`,
              animation: 'travelDown 2.5s ease-in-out infinite',
              borderRadius: 1,
            }} />
          </div>
        )}
      </div>

      {/* ── Content card ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1, marginLeft: 20, marginBottom: isLast ? 0 : 24,
          borderRadius: 20,
          border: `1px solid ${hovered ? entry.color + '45' : 'rgba(255,255,255,0.06)'}`,
          background: hovered
            ? `linear-gradient(135deg, ${entry.color}0a, rgba(7,9,20,0.95))`
            : 'rgba(7,9,20,0.88)',
          backdropFilter: 'blur(16px)',
          overflow: 'hidden', position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: hovered
            ? `0 8px 40px ${entry.color}18, 0 0 0 1px ${entry.color}20`
            : '0 4px 20px rgba(0,0,0,0.25)',
          cursor: 'default',
        }}
      >
        {/* Top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, ${entry.color}80, ${entry.color}30, transparent)`,
          opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s',
        }} />

        {/* Left color bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: `linear-gradient(to bottom, ${entry.color}, ${entry.color}30)`,
          opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s',
        }} />

        <div style={{ padding: '20px 22px 20px 26px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                margin: '0 0 4px', fontSize: '1rem', fontWeight: 700,
                color: '#f1f5f9', letterSpacing: '-0.02em',
                fontFamily: "'Sora', sans-serif", lineHeight: 1.3,
              }}>
                {entry.degree}
              </h3>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{
                  fontSize: '0.75rem', color: entry.color, fontWeight: 600,
                  fontFamily: "'Sora', sans-serif",
                }}>
                  {entry.institution}
                </span>
              </div>
            </div>

            {/* Period badge */}
            <div style={{
              flexShrink: 0, padding: '5px 12px', borderRadius: 50,
              border: `1px solid ${entry.color}35`,
              background: `${entry.color}12`,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {entry.status === 'current' && (
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: entry.color,
                  boxShadow: `0 0 6px ${entry.color}`,
                  animation: 'pulse 2s ease-in-out infinite',
                  flexShrink: 0,
                }} />
              )}
              <span style={{
                fontSize: '0.65rem', color: entry.color, fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}>
                {entry.period}
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            margin: '10px 0 12px', fontSize: '0.8rem', color: '#475569',
            lineHeight: 1.7, fontFamily: "'Sora', sans-serif", fontWeight: 400,
          }}>
            {entry.description}
          </p>

          
        </div>
      </div>
    </div>
  )
}

// ─── TOGGLE BUTTON ─────────────────────────────────────────────────────────────
function ToggleButton({ label, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 7,
        padding: '9px 20px', borderRadius: 50, cursor: 'pointer',
        border: active ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
        background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
        color: active ? '#f1f5f9' : '#475569',
        fontFamily: "''Sora', sans-serif",
        fontSize: '1rem', fontWeight: 600,
        letterSpacing: '0.01em',
        transition: 'all 0.25s ease',
        outline: 'none',
        backdropFilter: active ? 'blur(8px)' : 'none',
      }}
    >
      <span style={{ fontSize: 13, opacity: active ? 1 : 0.5 }}>{icon}</span>
      {label}
      {active && (
        <span style={{
          width: 5, height: 5, borderRadius: '50%',
          background: '#60a5fa',
          boxShadow: '0 0 6px #60a5fa',
          animation: 'pulse 2s ease-in-out infinite',
          marginLeft: 2,
        }} />
      )}
    </button>
  )
}

// ─── MAIN SECTION ──────────────────────────────────────────────────────────────
export default function SkillsSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, 0.05)
  const [activeTab, setActiveTab] = useState('skills')
  const catEntries = Object.entries(SKILLS)

  return (
    <section ref={sectionRef} id="skills" style={{
      padding: '8rem 5% 9rem',
      maxWidth: '1240px', margin: '0 auto',
      position: 'relative', fontFamily: "'Sora', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.75); }
        }
        @keyframes ping {
          0% { transform:scale(1); opacity:0.8; }
          70%,100% { transform:scale(1.5); opacity:0; }
        }
        @keyframes shimmer {
          0% { transform:translateX(-100%); }
          100% { transform:translateX(300%); }
        }
        @keyframes drift {
          0%,100% { transform:translateY(0) scale(1); }
          50% { transform:translateY(-8px) scale(1.02); }
        }
        @keyframes ticker-scroll {
          0% { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }
        @keyframes travelDown {
          0% { transform:translateY(-100%); opacity:1; }
          100% { transform:translateY(300%); opacity:0; }
        }
        @keyframes tabSlide {
          from { opacity:0; transform:translateY(12px); }
          to { opacity:1; transform:translateY(0); }
        }

        /* ── FILTER BAR (reused from projects) ── */
        .proj-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .filter-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px; border-radius: 100px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
          cursor: pointer; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); color: #4e6070;
          transition: all 0.25s cubic-bezier(.22,1,.36,1);
          outline: none; position: relative; overflow: hidden;
          font-family: 'Sora', sans-serif;
        }
        .filter-pill::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #5eadf720, #3b82f610);
          opacity: 0; transition: opacity 0.25s;
        }
        .filter-pill:hover:not(.active) { border-color: rgba(94,173,247,0.25); color: #94a3b8; transform: translateY(-1px); }
        .filter-pill:hover:not(.active)::before { opacity: 1; }
        .filter-pill.active {
          background: linear-gradient(135deg, rgba(94,173,247,0.18), rgba(59,130,246,0.12));
          border-color: rgba(94,173,247,0.45); color: #7dc4ff;
          box-shadow: 0 0 20px rgba(94,173,247,0.18), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .filter-pill-dot {
          width: 6px; height: 6px; border-radius: 50%; background: currentColor;
          opacity: 0; transform: scale(0);
          transition: all 0.25s cubic-bezier(.22,1,.36,1); flex-shrink: 0;
        }
        .filter-pill.active .filter-pill-dot { opacity: 1; transform: scale(1); }
        .filter-divider {
          width: 1px; height: 20px;
          background: rgba(255,255,255,0.07); margin: 0 2px; flex-shrink: 0;
        }

        /* ── SKILLS GRID ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .skills-col-7 { grid-column: span 7; }
        .skills-col-5 { grid-column: span 5; }

        /* ── EDUCATION NODE ── */
        .edu-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */

        /* Laptop (1025px – 1279px): keep layout, tighter padding */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .skills-col-7 { grid-column: span 7; }
          .skills-col-5 { grid-column: span 5; }
        }

        /* Tablet landscape (769px – 1024px): 2 equal columns */
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px; }
          .skills-col-7 { grid-column: span 1 !important; }
          .skills-col-5 { grid-column: span 1 !important; }
        }

        /* Tablet portrait (481px – 768px): 2 columns, smaller section padding */
        @media (max-width: 768px) {
          #skills { padding: 5rem 5% 6rem !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
          .skills-col-7 { grid-column: span 1 !important; }
          .skills-col-5 { grid-column: span 1 !important; }
          .filter-divider { display: none; }
          .proj-filter-bar { gap: 8px; }
          .edu-header-row { flex-direction: column; gap: 8px; align-items: flex-start; }
        }

        /* Mobile (up to 480px): single column */
        @media (max-width: 480px) {
          #skills { padding: 4rem 4% 5rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 12px; }
          .skills-col-7 { grid-column: span 1 !important; }
          .skills-col-5 { grid-column: span 1 !important; }
          .filter-pill { padding: 7px 13px; font-size: 0.68rem; }
          .proj-filter-bar { gap: 6px; }
          .edu-header-row { flex-direction: column; gap: 8px; align-items: flex-start; }
        }

        /* Very small phones (< 360px) */
        @media (max-width: 359px) {
          #skills { padding: 3.5rem 4% 4rem !important; }
          .filter-pill { padding: 6px 10px; font-size: 0.65rem; gap: 5px; }
        }
      `}</style>

      {/* Orbs */}
      <div style={{
        position:'absolute', top:'0%', left:'-15%', width:600, height:600, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(232,121,249,0.055) 0%, transparent 70%)',
        filter:'blur(60px)', pointerEvents:'none', zIndex:0, animation:'drift 8s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute', bottom:'-5%', right:'-10%', width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        filter:'blur(60px)', pointerEvents:'none', zIndex:0, animation:'drift 10s ease-in-out infinite reverse',
      }} />

      {/* ─── HEADER ─── */}
      <div style={{
        textAlign:'center', marginBottom:'3.5rem', position:'relative', zIndex:1,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(30px)',
        transition:'all 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}>

        {/* Heading */}
        <div style={{ position:'relative', display:'inline-block' }}>
          
          <h2 style={{
            margin:0, position:'relative', zIndex:1, marginBottom: 40,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1, color: '#fff',
            fontFamily: "'Sora', sans-serif", padding:'0.2em 0.4em',
          }}>
            <span style={{ color:'#f8fafc' }}>
              {activeTab === 'skills' ? 'Technical ' : 'Educational '}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #7dc4ff 0%, #5eadf7 50%, #3b82f6 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>
              {activeTab === 'skills' ? 'Skills' : 'Qualifications'}
            </span>
          </h2>
        </div>

        {/* ── Filter Toggle Bar ── */}
        <div className="proj-filter-bar">
        {[
            { key: 'skills', label: 'Tech Skills' },
            { key: 'education', label: 'Education' },
        ].map((f, i) => (
            <React.Fragment key={f.key}>
            {i > 0 && <div className="filter-divider" />}
            <button
                className={`filter-pill${activeTab === f.key ? ' active' : ''}`}
                onClick={() => setActiveTab(f.key)}
            >
                <span className="filter-pill-dot" />
                {f.label}
            </button>
            </React.Fragment>
        ))}
        </div>
      </div>

      {/* ─── CONTENT PANELS (animated swap) ─── */}
      <div style={{ position:'relative', zIndex:1 }}>

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div style={{ animation:'tabSlide 0.45s cubic-bezier(0.16,1,0.3,1) both' }}>
            <div className="skills-grid">
              <div className="skills-col-7">
                <Panel catName={catEntries[0][0]} cat={catEntries[0][1]} panelIndex={0} visible={inView} />
              </div>
              <div className="skills-col-5">
                <Panel catName={catEntries[1][0]} cat={catEntries[1][1]} panelIndex={1} visible={inView} />
              </div>
              <div className="skills-col-5">
                <Panel catName={catEntries[2][0]} cat={catEntries[2][1]} panelIndex={2} visible={inView} />
              </div>
              <div className="skills-col-7">
                <Panel catName={catEntries[3][0]} cat={catEntries[3][1]} panelIndex={3} visible={inView} />
              </div>
            </div>

            {/* Ticker */}
            <div style={{
              marginTop:52, overflow:'hidden', position:'relative',
              opacity: inView ? 1 : 0, transition:'opacity 1s ease 0.8s',
            }}>
              <div style={{
                position:'absolute', inset:0, zIndex:2, pointerEvents:'none',
                background:'linear-gradient(90deg, rgba(7,9,20,1) 0%, transparent 12%, transparent 88%, rgba(7,9,20,1) 100%)',
              }} />
              <div style={{
                borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)',
                padding:'13px 0', background:'rgba(255,255,255,0.012)',
              }}>
                <div style={{
                  display:'flex', gap:10,
                  animation:'ticker-scroll 40s linear infinite', width:'max-content',
                }}>
                  {[...Array(2)].flatMap((_, ai) =>
                    Object.entries(SKILLS).flatMap(([, cat]) =>
                      cat.items.map(item => (
                        <div key={`${ai}-${item.name}`} style={{
                          display:'inline-flex', alignItems:'center', gap:8,
                          padding:'6px 14px 6px 10px', borderRadius:100,
                          border:`1px solid ${cat.color}30`, background:`${cat.color}10`, whiteSpace:'nowrap',
                        }}>
                          {item.icon ? (
                            <img src={item.icon} alt={item.name} width={15} height={15}
                              style={{ objectFit:'contain', opacity:0.9 }} />
                          ) : (
                            <span style={{ width:7, height:7, borderRadius:'50%', background:cat.color, flexShrink:0 }} />
                          )}
                          <span style={{
                            fontSize:'0.68rem', fontWeight:600, color:'#94a3b8',
                            letterSpacing:'0.05em', fontFamily:"'Sora', sans-serif",
                          }}>
                            {item.name}
                          </span>
                        </div>
                      ))
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div style={{ animation:'tabSlide 0.45s cubic-bezier(0.16,1,0.3,1) both' }}>
            

            {/* Education tree nodes */}
            <div style={{ paddingLeft: 8 }}>
              {EDUCATION.map((entry, i) => (
                <EduNode
                  key={entry.id}
                  entry={entry}
                  index={i}
                  visible={inView}
                  isLast={i === EDUCATION.length - 1}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}