import { useState, useEffect } from 'react'
import profileImg from './assets/me.png';
import cv from './assets/Thasuni cv.pdf';
import Skills from './skills';
import Projects from './projects';
import Achivements from './achievements';
import Contact from './contact';

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "Software Engineer",
]

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const role = useTypewriter(roles)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      fontFamily: "'Sora', sans-serif",
      color: '#fff',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes helloIn {
          from { opacity: 0; transform: translateY(-20px) skewX(-3deg); }
          to   { opacity: 1; transform: translateY(0) skewX(0); }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.05); }
          66%       { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-25px, 20px) scale(1.03); }
          66%       { transform: translate(20px, -15px) scale(0.98); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(15px, -25px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes navGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(94,173,247,0.08); }
          50%       { box-shadow: 0 0 30px rgba(94,173,247,0.15); }
        }

        .hello-anim { animation: helloIn 0.7s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation: fadeUp 0.6s ease both; animation-delay: 0.4s; }
        .d2 { animation: fadeUp 0.6s ease both; animation-delay: 0.58s; }
        .d3 { animation: fadeUp 0.6s ease both; animation-delay: 0.76s; }
        .d4 { animation: fadeUp 0.6s ease both; animation-delay: 0.94s; }
        .blink { animation: blink 1s step-end infinite; }

        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 5%; height: 72px; transition: all 0.4s ease;
        }
        .navbar.scrolled::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(0, 3, 15, 0.75); backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid rgba(94,173,247,0.1);
        }
        .navbar.scrolled { animation: navGlow 4s ease-in-out infinite; }

        .nav-logo {
          font-size: 1.4rem; font-weight: 800; letter-spacing: -0.03em;
          position: relative; z-index: 1; text-decoration: none; color: #fff;
          display: flex; align-items: center; gap: 2px;
        }
        .nav-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #5eadf7, #3b82f6);
          box-shadow: 0 0 12px rgba(94,173,247,0.6);
        }
        .nav-a {
          position: relative; color: #64748b; text-decoration: none; 
          font-size: 0.82rem; font-weight: 500; padding: 8px 18px;
          border-radius: 50px; transition: all 0.25s ease;
        }
        .nav-a:hover { color: #e2e8f0; }
        .nav-a.active { color: #fff; background: rgba(94,173,247,0.15); box-shadow: 0 0 0 1px rgba(94,173,247,0.25); }

        /* CV button */
        .btn-cv {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 0.6rem 1.35rem;
          background: linear-gradient(135deg, rgba(94,173,247,0.15) 0%, rgba(59,130,246,0.1) 100%);
          color: #7dc4ff;
          font-weight: 600; font-size: 0.82rem; font-family: 'Sora', sans-serif;
          border-radius: 50px; text-decoration: none;
          border: 1px solid rgba(94,173,247,0.35);
          cursor: pointer; transition: all 0.28s ease;
          position: relative; z-index: 1; overflow: hidden;
        }
        .btn-cv::before {
          content: '';
          position: absolute; top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
        .btn-cv:hover {
          background: linear-gradient(135deg, rgba(94,173,247,0.25) 0%, rgba(59,130,246,0.2) 100%);
          border-color: rgba(94,173,247,0.6);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(94,173,247,0.2);
          color: #bae6fd;
        }

        /* Social buttons */
        .soc-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); color: #64748b;
          text-decoration: none; transition: all 0.25s ease;
        }
        .soc-btn:hover {
          border-color: rgba(94,173,247,0.4); color: #5eadf7;
          background: rgba(94,173,247,0.08);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(94,173,247,0.15);
        }

        .divider {
          width: 90%;  height: 1px;
          background: linear-gradient(90deg, transparent, rgba(94,173,247,0.2), transparent);
        }

        /* ── RESPONSIVE BREAKPOINTS ── */

        /* Desktop large (1280px+): no changes needed, original styles apply */

        /* Laptop (1025px – 1279px) */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .hero-section { gap: 2.5rem !important; padding: 5rem 4% !important; }
          .hero-image-container { width: 400px !important; height: 400px !important; }
        }

        /* Tablet landscape + small laptop (769px – 1024px) */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
            padding-top: 6rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-content { align-items: center !important; }
          .hero-image-container { width: 320px !important; height: 320px !important; order: -1; }
          .nav-links { display: none !important; }
          .nav-logo { font-size: 1.2rem; }
        }

        /* Tablet portrait (481px – 768px) */
        @media (max-width: 768px) {
          .navbar { padding: 0 4%; height: 64px; }
          .nav-logo { font-size: 1.1rem; }
          .btn-cv { padding: 0.5rem 1rem; font-size: 0.78rem; }

          .hero-section {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2.5rem !important;
            padding: 5.5rem 5% 3rem !important;
          }
          .hero-content { align-items: center !important; }
          .hero-image-container { width: 260px !important; height: 260px !important; order: -1; }

          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-brand { grid-column: span 2 !important; }
        }

        /* Mobile (up to 480px) */
        @media (max-width: 480px) {
          .navbar { padding: 0 4%; height: 60px; }
          .nav-logo { font-size: 1rem; letter-spacing: -0.02em; }
          .btn-cv-nav { display: none !important; }

          .hero-section {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2rem !important;
            padding: 5rem 5% 2.5rem !important;
          }
          .hero-content { align-items: center !important; }
          .hero-image-container { width: 210px !important; height: 210px !important; order: -1; }
          .hero-description { font-size: 0.92rem !important; }
          .hero-actions { justify-content: center !important; }

          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-brand { grid-column: span 1 !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
        }

        /* Very small phones (< 360px) */
        @media (max-width: 359px) {
          .navbar { padding: 0 3%; }
          .nav-logo { font-size: 0.9rem; }
          .hero-image-container { width: 180px !important; height: 180px !important; }
          .hero-section { padding: 4.5rem 4% 2rem !important; }
          .btn-cv { padding: 0.45rem 0.85rem; font-size: 0.75rem; }
        }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: 'linear-gradient(160deg, #000000 0%, #020918 50%, #000000 100%)', overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,138,0.38) 0%, transparent 70%)', animation: 'drift1 18s ease-in-out infinite', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '650px', height: '650px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.28) 0%, transparent 70%)', animation: 'drift2 22s ease-in-out infinite', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, rgba(94,173,247,0.04) 1px, transparent 1px)`, backgroundSize: '40px 40px', opacity: 0.5 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* ═══ NAVBAR ═══ */}
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
          <a href="#" className="nav-logo">
            Thasuni Induma<span className="nav-logo-dot" style={{ marginLeft: '3px' }} />
          </a>
          <div className="nav-links" style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '50px', padding: '5px' }}>
            {[
              { name: "Home", href: "#" },
              { name: "Projects", href: "#projects" },
              { name: "Skills & Education", href: "#skills" },
              { name: "Achievements", href: "#achievements" },
              { name: "Contact", href: "#contact" }
            ].map(item => (
              <a key={item.name} href={item.href} className={`nav-a${item.name === 'Home' ? ' active' : ''}`}>{item.name}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href={cv} download className="btn-cv btn-cv-nav">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download CV
            </a>
          </div>
        </nav>

        {/* ═══ HERO ═══ */}
        <section className="hero-section" id="home" style={{
          minHeight: '100vh', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'center', gap: '4rem', padding: '5rem 5%', maxWidth: '1400px', margin: '0 auto',
        }}>
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={mounted ? 'hello-anim' : ''} style={{fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
              {'HELLO !'.split('').map((char, i) => (
                <span key={i} style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(94, 173, 247, 0.55)', display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>{char}</span>
              ))}
            </div>

            <h1 className={mounted ? 'd1' : ''} style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
              <span style={{ color: '#e2e8f0' }}>I'm </span>
              <span style={{ background: 'linear-gradient(135deg, #7dc4ff 0%, #5eadf7 60%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Thasuni Induma</span>
            </h1>

            <div className={mounted ? 'd2' : ''} style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1.2rem', fontSize: '1.2rem' }}>
              <span style={{ color: '#5eadf7', opacity: 0.5 }}>{'<'}</span>
              <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{role}</span>
              <span className="blink" style={{ color: '#5eadf7' }}>|</span>
              <span style={{ color: '#5eadf7', opacity: 0.5 }}>{'/>'}</span>
            </div>

            <p className={`hero-description ${mounted ? 'd3' : ''}`} style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '600px', fontWeight: 300 }}>
              Building high-performance web and mobile applications using <span style={{ color: '#7dc4ff' }}>MERN stack, Java, Spring Boot, and Flutter</span>. Focused on creating intuitive digital experiences.
            </p>

            <div className={`hero-actions ${mounted ? 'd4' : ''}`} style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={cv} download className="btn-cv">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download CV
              </a>
              <a href="https://www.linkedin.com/in/thasuni-induma" className="soc-btn" title="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/ThasuniInduma" className="soc-btn" title="GitHub">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:thasuniinduma@gmail.com" className="soc-btn" title="Email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </a>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-image-container" style={{ position: 'relative', width: '480px', height: '480px' }}>
              {/* Outer spinning ring */}
              <div style={{
                position: 'absolute', inset: '-8px', borderRadius: '50%',
                border: '2px solid transparent',
                borderTopColor: '#5eadf7', borderRightColor: 'rgba(94,173,247,0.3)',
                animation: 'spin 7s linear infinite',
              }} />
              {/* Inner spinning ring (reverse) */}
              <div style={{
                position: 'absolute', inset: '-16px', borderRadius: '50%',
                border: '1px solid rgba(94,173,247,0.12)',
                borderBottomColor: 'rgba(94,173,247,0.4)',
                animation: 'spin 11s linear infinite reverse',
              }} />
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                boxShadow: '0 0 60px rgba(94,173,247,0.12)',
              }} />
              <img
                src={profileImg} alt="Thasuni Induma"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  borderRadius: '50%', border: '3px solid rgba(94,173,247,0.4)',
                  display: 'block', position: 'relative',
                }}
                onError={e => {
                  e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="340" height="340"><rect width="340" height="340" fill="%230f172a" rx="170"/><text x="50%25" y="54%25" dominant-baseline="middle" text-anchor="middle" fill="%235eadf7" font-size="86" font-family="sans-serif" font-weight="700">TI</text></svg>`
                }}
              />
            </div>
          </div>

        </section>

        <div className="divider" />
        <div id="projects"><Projects /></div>
        <div className="divider" />
        <div id="skills"><Skills /></div>
        <div className="divider" />
        <div id="achievements"><Achivements /></div>
        <div className="divider" />
        <div id="contact"><Contact /></div>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ 
          padding: '4rem 5% 2rem', 
          background: 'rgba(2, 9, 24, 0.5)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          color: '#94a3b8' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="footer-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2.5rem', 
              marginBottom: '4rem',
              textAlign: 'left' 
            }}>
              
              {/* 1. BRAND COLUMN */}
              <div className="footer-brand" style={{ gridColumn: 'span 1' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  Thasuni Induma<span style={{ marginLeft: '4px', width: '6px', height: '6px', background: '#5eadf7', borderRadius: '50%' }} />
                </h2>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#64748b' }}>
                  Designing and developing the future, one pixel at a time. Focused on creating intuitive digital experiences.
                </p>
              </div>

              {/* 2. NAVIGATION COLUMN */}
              <div>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Navigation</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {["Home", "Projects", "Skills", "Contact"].map(item => (
                    <li key={item} style={{ marginBottom: '0.75rem' }}>
                      <a href={`#${item.toLowerCase()}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. GET IN TOUCH COLUMN */}
              <div>
                <h3 style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  color: '#fff', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  marginBottom: '1.5rem' 
                }}>
                  Get In Touch
                </h3>

                <p style={{ 
                  fontSize: '0.85rem', 
                  color: '#94a3b8',
                  marginBottom: '0.5rem'
                }}>
                  thasuniinduma@gmail.com
                </p>

                <p style={{ 
                  fontSize: '0.85rem', 
                  color: '#94a3b8'
                }}>
                  Sri Lanka
                </p>
              </div>

              {/* 4. SOCIAL COLUMN */}
              <div>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Social Media</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: '1.2rem', color: '#64748b' }}>Follow me for the latest updates on my projects and process.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.linkedin.com/in/thasuni-induma" className="soc-btn" title="LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://github.com/ThasuniInduma" className="soc-btn" title="GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:thasuniinduma@gmail.com" className="soc-btn" title="Email">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <polyline points="2,4 12,13 22,4"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* SEPARATOR LINE */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)', margin: '2rem 0' }} />
            
            {/* BOTTOM BAR */}
            <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#475569', fontSize: '0.8rem' }}>
              <p>© {new Date().getFullYear()} Thasuni Induma. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}