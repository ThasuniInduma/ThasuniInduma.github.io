import { useState, useEffect, useRef, useCallback } from 'react'
import a1 from './assets/a1.jpeg';
import a2 from './assets/a2.jpg';
import a3 from './assets/a3.jpg';
import a4 from './assets/a4.jpg';

const BLUE      = '#5eadf7'
const BLUE_DIM  = 'rgba(94,173,247,0.08)'
const BLUE_GLOW = 'rgba(94,173,247,0.18)'
const GRADIENT  = 'linear-gradient(135deg, #7dc4ff 0%, #5eadf7 50%, #3b82f6 100%)'

const achievements = [
  {
    id: 1,
    rank: "Winner",
    rankNum: "01",
    event: "SDG Sprints",
    org: "IEEE Sri Lanka Section SIGHT",
    year: "2024",
    color: BLUE,
    colorDim: BLUE_DIM,
    colorGlow: BLUE_GLOW,
    desc: "Led the team to victory in this sustainability-focused hackathon, developing an innovative solution addressing UN Sustainable Development Goals — demonstrating technical skill, creativity, and social impact.",
    tags: ["Hackathon", "Winner", "SDGs", "Innovation"],
    img: a1,
  },
  {
    id: 2,
    rank: "2nd Runners Up",
    rankNum: "02",
    event: "Code with WIE 2025",
    org: "IEEE WIE Sri Lanka Section",
    year: "2025",
    color: BLUE,
    colorDim: BLUE_DIM,
    colorGlow: BLUE_GLOW,
    desc: "Secured 3rd place in a competitive coding event for women engineers, showcasing strong problem-solving, teamwork, and software development proficiency under time constraints.",
    tags: ["Coding Event", "3rd Place", "WIE", "Competitive"],
    img: a2,
  },
  {
    id: 3,
    rank: "Finalist",
    rankNum: "03",
    event: "SLT Mobitel Codeblast 2.0",
    org: "SLT Mobitel",
    year: "2024",
    color: BLUE,
    colorDim: BLUE_DIM,
    colorGlow: BLUE_GLOW,
    desc: "Selected as a finalist in a national-level hackathon hosted by SLT Mobitel, building a functional prototype that combines innovative ideas with practical, real-world implementation.",
    tags: ["National Level", "Finalist", "Prototype", "SLT Mobitel"],
    img: a3,
  },
  {
    id: 4,
    rank: "Top 10 Finalists",
    rankNum: "05",
    event: "Junior Hack 7.0",
    org: "Software Engineering Students' Association, UoK",
    year: "2024",
    color: BLUE,
    colorDim: BLUE_DIM,
    colorGlow: BLUE_GLOW,
    desc: "Achieved a top 10 finalist position in this student hackathon, highlighting coding skills, innovation, and collaborative problem-solving across real-world software engineering challenges.",
    tags: ["Student Hackathon", "Top 10", "SESA", "Finalist"],
    img: a4,
  },
]

const INTERVAL = 6000

function ImagePanel({ ach }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(160deg, #070914 0%, ${ach.colorDim} 60%, #070914 100%)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(94,173,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(94,173,247,0.04) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 220, height: 220, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(94,173,247,0.14) 0%, transparent 72%)`,
        filter: 'blur(20px)',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        width: 100, height: 100,
        border: `1px solid rgba(94,173,247,0.18)`,
        borderRadius: 4,
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        width: 140, height: 140,
        border: `1px solid rgba(94,173,247,0.08)`,
        borderRadius: 4,
      }} />
      <div style={{
        position: 'relative', zIndex: 2,
        fontFamily: "'Sora', sans-serif",
        fontSize: '6rem', fontWeight: 900, lineHeight: 1,
        background: GRADIENT,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 0.12,
        letterSpacing: '-0.05em',
        userSelect: 'none',
      }}>{ach.rankNum}</div>
      <div style={{
        position: 'relative', zIndex: 2,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.52rem', fontWeight: 600,
        letterSpacing: '0.25em', textTransform: 'uppercase',
        color: BLUE, opacity: 0.35, marginTop: 12,
      }}>Achievement Image</div>
    </div>
  )
}

export default function Achievements() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(null)
  const [animDir, setAnimDir] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)
  const startTimeRef = useRef(null)

  const goTo = useCallback((idx, dir = 'next') => {
    if (isAnimating || idx === active) return
    setAnimDir(dir)
    setPrev(active)
    setIsAnimating(true)
    setActive(idx)
    setProgress(0)
    startTimeRef.current = performance.now()
    setTimeout(() => { setPrev(null); setIsAnimating(false) }, 700)
  }, [active, isAnimating])

  const next     = useCallback(() => goTo((active + 1) % achievements.length, 'next'),  [active, goTo])
  const prevStep = useCallback(() => goTo((active - 1 + achievements.length) % achievements.length, 'prev'), [active, goTo])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, INTERVAL)
    return () => clearTimeout(t)
  }, [active, paused, next])

  useEffect(() => {
    if (paused) { cancelAnimationFrame(progressRef.current); return }
    startTimeRef.current = performance.now()
    const tick = (now) => {
      const elapsed = now - (startTimeRef.current || now)
      setProgress(Math.min(elapsed / INTERVAL, 1))
      if (elapsed < INTERVAL) progressRef.current = requestAnimationFrame(tick)
    }
    progressRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRef.current)
  }, [active, paused])

  const ach = achievements[active]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeSlideR {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideL {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOutL {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes fadeOutR {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.75); }
        }
        @keyframes cornerSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }

        .slide-enter-next { animation: fadeSlideR 0.7s cubic-bezier(.16,1,.3,1) both; }
        .slide-enter-prev { animation: fadeSlideL 0.7s cubic-bezier(.16,1,.3,1) both; }
        .slide-exit-next  { animation: fadeOutL  0.7s cubic-bezier(.16,1,.3,1) both; }
        .slide-exit-prev  { animation: fadeOutR  0.7s cubic-bezier(.16,1,.3,1) both; }

        .reveal-0 { animation: revealUp 0.65s cubic-bezier(.16,1,.3,1) 0.05s both; }
        .reveal-1 { animation: revealUp 0.65s cubic-bezier(.16,1,.3,1) 0.13s both; }
        .reveal-2 { animation: revealUp 0.65s cubic-bezier(.16,1,.3,1) 0.21s both; }
        .reveal-3 { animation: revealUp 0.65s cubic-bezier(.16,1,.3,1) 0.29s both; }
        .reveal-4 { animation: revealUp 0.65s cubic-bezier(.16,1,.3,1) 0.37s both; }

        .nav-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(94,173,247,0.2);
          background: transparent;
          color: ${BLUE};
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s cubic-bezier(.16,1,.3,1); outline: none;
          flex-shrink: 0;
        }
        .nav-btn:hover {
          border-color: rgba(94,173,247,0.5);
          background: rgba(94,173,247,0.08);
          transform: scale(1.05);
          box-shadow: 0 0 16px rgba(94,173,247,0.2);
        }

        .step-dot {
          height: 1px; cursor: pointer; border: none; outline: none; padding: 0;
          transition: all 0.4s cubic-bezier(.16,1,.3,1);
          background: rgba(255,255,255,0.1); flex: 1;
        }
        .step-dot:hover { background: rgba(94,173,247,0.4); }

        .tag-pill {
          padding: 4px 13px; border-radius: 2px;
          font-family: fontFamily: "'Sora', sans-serif";
          font-size: 0.56rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid rgba(94,173,247,0.22);
          color: rgba(94,173,247,0.7);
          background: rgba(94,173,247,0.06);
          transition: all 0.3s;
          cursor: default;
          border-radius: 100px;
        }
        .tag-pill:hover { transform: translateY(-1px); background: rgba(94,173,247,0.12); }

        .line-expand {
          animation: lineExpand 0.8s cubic-bezier(.16,1,.3,1) 0.4s both;
          transform-origin: left center;
        }

        /* Fixed-size image frame */
        .image-frame-outer {
          position: relative;
          width: 100%;
          /* Fixed aspect ratio 4:3 box — height driven by padding-bottom */
          padding-bottom: 75%;
          flex-shrink: 0;
        }

        .image-frame-inner {
          position: absolute;
          inset: 0;
        }

        /* Animated corner brackets */
        .corner {
          position: absolute;
          width: 22px;
          height: 22px;
          z-index: 10;
          pointer-events: none;
        }
        .corner-tl { top: -1px;  left: -1px;  border-top: 2px solid ${BLUE}; border-left: 2px solid ${BLUE}; }
        .corner-tr { top: -1px;  right: -1px; border-top: 2px solid ${BLUE}; border-right: 2px solid ${BLUE}; }
        .corner-bl { bottom: -1px; left: -1px;  border-bottom: 2px solid ${BLUE}; border-left: 2px solid ${BLUE}; }
        .corner-br { bottom: -1px; right: -1px; border-bottom: 2px solid ${BLUE}; border-right: 2px solid ${BLUE}; }

        /* Scan line overlay */
        .scan-overlay {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
        }

        /* Glow border animation */
        .glow-border {
          animation: glowPulse 3s ease-in-out infinite;
        }

        /* ── CAROUSEL GRID ── */
        .ach-carousel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */

        /* Laptop (1025px – 1279px): tighten gap */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .ach-carousel-grid { gap: 2.5rem; }
        }

        /* Tablet landscape (769px – 1024px): 2 cols, smaller gap */
        @media (max-width: 1024px) {
          .ach-carousel-grid { gap: 2rem; }
          #achievements { padding: 5rem 5% 6rem !important; }
        }

        /* Tablet portrait (481px – 768px): stack vertically */
        @media (max-width: 768px) {
          .ach-carousel-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          #achievements { padding: 4rem 5% 5rem !important; }
          .ach-info-panel { padding-left: 0 !important; }
        }

        /* Mobile (up to 480px): single column, tighter padding */
        @media (max-width: 480px) {
          .ach-carousel-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
          #achievements { padding: 3.5rem 4% 4rem !important; }
          .ach-info-panel { padding-left: 0 !important; gap: 1.2rem !important; }
          .nav-btn { width: 38px; height: 38px; }
          .ach-section-header { margin-bottom: 3rem !important; }
        }

        /* Very small phones (< 360px) */
        @media (max-width: 359px) {
          #achievements { padding: 3rem 4% 3.5rem !important; }
          .ach-info-panel { gap: 1rem !important; }
          .nav-btn { width: 34px; height: 34px; }
        }
      `}</style>

      <section
        id="achievements"
        style={{
          padding: '7rem 5% 8rem',
          maxWidth: '1320px', margin: '0 auto',
          fontFamily: "'Sora', sans-serif",
          background: 'transparent',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* ── Section Header ── */}
        <div className="ach-section-header" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{
              margin: 0,
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1,
            }}>
              <span style={{ color: '#f8fafc' }}>My </span>
              <span style={{
                background: GRADIENT,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Achievements</span>
            </h2>
          </div>
        </div>

        {/* ── Main Carousel ── */}
        <div className="ach-carousel-grid">

          {/* LEFT: Image panel — fixed-size frame */}
          <div style={{ position: 'relative' }}>

            {/* Outer ambient glow */}
            <div style={{
              position: 'absolute', inset: -20, zIndex: 0,
              background: `radial-gradient(ellipse at 50% 50%, rgba(94,173,247,0.1) 0%, transparent 70%)`,
              filter: 'blur(24px)', pointerEvents: 'none',
            }} />

            {/* Dashed outer ring */}
            <div style={{
              position: 'absolute', inset: -8, zIndex: 1,
              border: '1px dashed rgba(94,173,247,0.12)',
              borderRadius: 6, pointerEvents: 'none',
            }} />

            {/* Fixed-ratio image box */}
            <div className="image-frame-outer" style={{ zIndex: 2 }}>
              <div className="image-frame-inner">

                {/* Main border */}
                <div className="glow-border" style={{
                  position: 'absolute', inset: 0, zIndex: 3,
                  border: '1px solid rgba(94,173,247,0.3)',
                  borderRadius: 4, pointerEvents: 'none',
                  boxShadow: `0 0 20px rgba(94,173,247,0.08), inset 0 0 20px rgba(94,173,247,0.04)`,
                }} />

                {/* Corner brackets */}
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />


                {/* Slide stage — clipped inside fixed box */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 4, background: '#070914', zIndex: 2 }}>
                  {prev !== null && (
                    <div key={`exit-${prev}`}
                      className={animDir === 'next' ? 'slide-exit-next' : 'slide-exit-prev'}
                      style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                      {achievements[prev].img
                        ? <img
                            src={achievements[prev].img}
                            alt={achievements[prev].event}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#070914' }}
                          />
                        : <ImagePanel ach={achievements[prev]} />
                      }
                    </div>
                  )}
                  <div key={`enter-${active}`}
                    className={isAnimating ? (animDir === 'next' ? 'slide-enter-next' : 'slide-enter-prev') : ''}
                    style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                    {ach.img
                      ? <img
                          src={ach.img}
                          alt={ach.event}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#070914' }}
                        />
                      : <ImagePanel ach={ach} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div key={`info-${active}`} className="ach-info-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.6rem', paddingLeft: '0.5rem' }}>

            {/* Rank + title + org */}
            <div className="reveal-1">
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '1.5rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                background: GRADIENT,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.6rem',
              }}>{ach.rank}</div>
              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                fontWeight: 900, letterSpacing: '-0.04em',
                color: '#f1f5f9', lineHeight: 1.1, margin: '0 0 0.3rem',
              }}>{ach.event}</h3>
              <p style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '1.2rem', color: '#475569',
                fontWeight: 400, margin: 0, letterSpacing: '0.01em',
              }}>{ach.org}</p>
            </div>

            {/* Divider */}
            <div className="reveal-2" style={{
              height: '1px',
              background: `linear-gradient(90deg, ${BLUE}40, rgba(255,255,255,0.04) 70%, transparent)`,
            }} />

            {/* Desc */}
            <p className="reveal-3" style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '1rem', color: '#475569',
              lineHeight: 1.85, fontWeight: 400, margin: 0,
            }}>{ach.desc}</p>

            {/* Tags */}
            <div className="reveal-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, }}>
              {ach.tags.map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>

              {/* Dot track */}
              <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                {achievements.map((a, i) => (
                  <button key={i} className="step-dot"
                    onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                    style={{
                      background: i === active ? GRADIENT : undefined,
                      height: i === active ? '2px' : '1px',
                      boxShadow: i === active ? `0 0 8px rgba(94,173,247,0.5)` : 'none',
                    }}
                  />
                ))}
              </div>

              {/* Controls row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'start' }}>
                <button className="nav-btn" onClick={prevStep} aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="nav-btn" onClick={next} aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}