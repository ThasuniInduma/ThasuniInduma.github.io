import { useState, useRef, useMemo } from 'react'
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import p9 from './assets/p9.png';
import p10 from './assets/p10.png';
import p11 from './assets/p11.png';


const projects = [
  {
    id: 1,
    name: "QuizHub",
    category: "Distributed System",
    type: "web",
    desc: "Real-time quiz platform with teacher & student modules, JWT authentication, and live result updates.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    accent: "#5eadf7",
    live: "#",
    code: "https://github.com/ThasuniInduma/distributed_quiz_system",
    img: p1
  },
  {
    id: 2,
    name: "Point of Sales System",
    category: "Full-Stack Web App",
    type: "web",
    desc: "Sales and inventory management system with real-time stock tracking and dynamic dashboards.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    accent: "#22d3ee",
    live: "#",
    code: "https://github.com/ThasuniInduma/pos-frontend",
    img: p2
  },
  {
    id: 3,
    name: "Plantation Task Manager",
    category: "Management Platform",
    type: "web",
    desc: "Centralized task and workforce management system with role-based access control and reporting.",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    accent: "#34d399",
    live: "#",
    code: "#",
    img: p4
  },
  {
    id: 4,
    name: "SafeStep",
    category: "Mobile Safety App",
    type: "mobile",
    desc: "Personal safety app with SOS alerts, live location sharing, and real-time family notifications.",
    tags: ["Flutter", "Firebase", "Google Maps", "mSpace API"],
    accent: "#a78bfa",
    live: "#",
    code: "https://github.com/ThasuniInduma/Safe_Step",
    img: p5
  },
  {
    id: 5,
    name: "HerLife",
    category: "HealthTech App",
    type: "mobile",
    desc: "Breast cancer awareness app with self-check guides, clinic locator, and AI chatbot support.",
    tags: ["Flutter", "Firebase", "Google Gemini API", "Google Maps"],
    accent: "#f472b6",
    live: "#",
    code: "#",
    img: p3
  },
  {
    id: 6,
    name: "Cakely",
    category: "E-Commerce",
    type: "web",
    desc: "MERN-based cake ordering platform with secure JWT authentication and cart system.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    accent: "#fb923c",
    live: "#",
    code: "https://github.com/ThasuniInduma/web_frontend",
    img: p7
  },
  {
    id: 7,
    name: "Car Rental System",
    category: "Desktop Application",
    type: "web",
    desc: "Java-based desktop app for vehicle rental and customer management with MySQL integration.",
    tags: ["Java Swing", "MySQL", "NetBeans"],
    accent: "#22d3ee",
    live: "#",
    code: "https://github.com/ThasuniInduma/carhire-layered",
    img: p8
  },
  {
    id: 8,
    name: "Grain Store Manager",
    category: "Inventory System",
    type: "web",
    desc: "Inventory and transaction management system for grain storage operations.",
    tags: ["Java Swing", "MySQL"],
    accent: "#facc15",
    live: "#",
    code: "https://github.com/ThasuniInduma/Grain_Store_Management_System",
    img: p9
  },
  {
    id: 9,
    name: "Food Delivery Web Application",
    category: "Web Application",
    type: "web",
    desc: "Built a responsive food ordering platform with real-time tracking and user-friendly design.",
    tags: ["React", "Spring Boot", "MySQL"], // change based on your actual stack
    accent: "#fb923c", 
    live: "#",
    code: "https://github.com/ThasuniInduma/food-delivery-app",
    img: p10
    },
  {
  id: 10,
  name: "Money Controller App",
  category: "Mobile Application",
  type: "mobile",
  desc: "A Flutter-based personal finance application for tracking income, expenses, and managing budgets with a clean and intuitive user interface. (Ongoing project)",
  tags: ["Flutter", "Dart", "Firebase"], // update if different
  accent: "#5eadf7",
  live: "#",
  code: "https://github.com/ThasuniInduma/cashpilot_money_controller_app",
  img: p11
},
]

const CARDS_PER_PAGE = 6

const FILTERS = [
  {
    key: 'all',
    label: 'All Projects',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    key: 'web',
    label: 'Web Apps',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 8h20M8 4v4"/>
        <circle cx="5" cy="6" r="0.8" fill="currentColor"/><circle cx="8" cy="6" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: 'mobile',
    label: 'Mobile Apps',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="3"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
        <path d="M10 5h4"/>
      </svg>
    ),
  },
]

export default function Projects() {
  const trackRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() =>
    activeFilter === 'all' ? projects : projects.filter(p => p.type === activeFilter),
    [activeFilter]
  )

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE)

  const goToPage = (page) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: page * el.clientWidth, behavior: 'smooth' })
    setCurrentPage(page)
  }

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const newPage = Math.round(el.scrollLeft / el.clientWidth)
    setCurrentPage(newPage)
  }

  const handleFilter = (key) => {
    setActiveFilter(key)
    setCurrentPage(0)
    const el = trackRef.current
    if (el) el.scrollTo({ left: 0, behavior: 'instant' })
  }

  return (
    <>
      <style>{`
        /* ── FILTER TOGGLE ── */
        .proj-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 3rem;
        }
        .filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #4e6070;
          transition: all 0.25s cubic-bezier(.22,1,.36,1);
          outline: none;
          position: relative;
          overflow: hidden;
          font-family: 'Sora', sans-serif;
        }
        .filter-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #5eadf720, #3b82f610);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .filter-pill:hover:not(.active) {
          border-color: rgba(94,173,247,0.25);
          color: #94a3b8;
          transform: translateY(-1px);
        }
        .filter-pill:hover:not(.active)::before { opacity: 1; }
        .filter-pill.active {
          background: linear-gradient(135deg, rgba(94,173,247,0.18), rgba(59,130,246,0.12));
          border-color: rgba(94,173,247,0.45);
          color: #7dc4ff;
          box-shadow: 0 0 20px rgba(94,173,247,0.18), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .filter-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0;
          transform: scale(0);
          transition: all 0.25s cubic-bezier(.22,1,.36,1);
          flex-shrink: 0;
        }
        .filter-pill.active .filter-pill-dot {
          opacity: 1;
          transform: scale(1);
        }
        .filter-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.07);
          margin: 0 2px;
          flex-shrink: 0;
        }
        .filter-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          border-radius: 6px;
          font-size: 0.6rem;
          font-weight: 700;
          background: rgba(255,255,255,0.06);
          color: #4e6070;
          transition: all 0.25s;
          line-height: 1;
        }
        .filter-pill.active .filter-count {
          background: rgba(94,173,247,0.2);
          color: #5eadf7;
        }

        /* ── PROJECTS ── */
        .proj-viewport { overflow: hidden; width: 100%; }
        .proj-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .proj-track::-webkit-scrollbar { display: none; }

        .proj-page {
          flex: 0 0 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 20px;
        }

        .proj-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(8, 12, 28, 0.9);
          backdrop-filter: blur(16px);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.3s ease;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,0.14); }
        .proj-card .card-accent-line {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.35s ease;
          border-radius: 20px 20px 0 0;
        }
        .proj-card:hover .card-accent-line { opacity: 1; }

        .card-img-wrap {
          position: relative; width: 100%; height: 160px;
          overflow: hidden; flex-shrink: 0;
        }
        .card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .proj-card:hover .card-img-wrap img { transform: scale(1.06); }
        .card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(8,12,28,0.96) 100%);
        }
        .card-badge {
          position: absolute; top: 12px; left: 14px;
          padding: 3px 10px; border-radius: 20px; font-size: 0.6rem;
          font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
          backdrop-filter: blur(10px); border: 1px solid transparent;
        }
        .card-no-img {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 8px; position: relative; overflow: hidden;
        }
        .card-no-img-num {
          font-size: 5rem; font-weight: 900; line-height: 1;
          opacity: 0.07; position: absolute; bottom: 8px; right: 12px; letter-spacing: -0.05em;
        }
        .card-no-img-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid transparent; font-size: 1.5rem;
        }
        .card-no-img-label {
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.3;
        }
        .card-tags-row { display: flex; gap: 5px; flex-wrap: wrap; padding: 14px 15px 0; }
        .tag {
          display: inline-flex; align-items: center;
          padding: 4px 8px; border-radius: 20px; font-size: 0.59rem;
          font-weight: 600; letter-spacing: 0.05em;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          color: #7a8aa0; transition: all 0.2s ease;
        }
        .proj-card:hover .tag { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.13); }
        .card-body { padding: 16px 16px 18px; flex: 1; display: flex; flex-direction: column; }
        .card-title { font-size: 1rem; font-weight: 700; color: #eef2f8; margin-bottom: 10px; letter-spacing: -0.02em; line-height: 1.25; }
        .card-desc { font-size: 1rem; color: #4e6070; line-height: 1.7; font-weight: 300; flex: 1; margin-bottom: 12px; }
        .card-actions { display: flex; gap: 8px; margin-top: auto; }
        .proj-action {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 6px; padding: 8px 14px; border-radius: 10px;
          font-size: 0.72rem; font-weight: 600; text-decoration: none;
          transition: all 0.22s; font-family: 'Sora', sans-serif;
          cursor: pointer; border: none;
        }
        .proj-action-gh {
          flex: 1; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08) !important; color: #64748b;
        }
        .proj-action-gh:hover {
          background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.16) !important;
          color: #94a3b8; transform: translateY(-1px);
        }
        .proj-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 36px; }
        .nav-arrow {
          display: flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);
          color: #94a3b8; cursor: pointer;
          transition: all 0.28s cubic-bezier(.22,1,.36,1); flex-shrink: 0; outline: none;
        }
        .nav-arrow:hover:not(:disabled) {
          background: rgba(94,173,247,0.12); border-color: rgba(94,173,247,0.5);
          color: #5eadf7; transform: scale(1.1); box-shadow: 0 0 24px rgba(94,173,247,0.25);
        }
        .nav-arrow:disabled { opacity: 0.18; cursor: default; transform: none; }
        .page-dots { display: flex; gap: 8px; align-items: center; }
        .page-dot {
          border-radius: 50%; cursor: pointer;
          transition: all 0.3s cubic-bezier(.22,1,.36,1);
          border: none; outline: none; padding: 0;
          background: rgba(255,255,255,0.15); width: 7px; height: 7px;
        }
        .page-dot.active {
          width: 22px; border-radius: 4px;
          background: linear-gradient(90deg, #5eadf7, #3b82f6);
          box-shadow: 0 0 12px rgba(94,173,247,0.5);
        }
        .page-dot:hover:not(.active) { background: rgba(94,173,247,0.4); transform: scale(1.2); }
      `}</style>

      <section id="projects" style={{ padding: ' 5%', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900,
            letterSpacing: '-0.05em', lineHeight: 1, color: '#fff', fontFamily: "'Sora', sans-serif"
          }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7dc4ff 0%, #5eadf7 50%, #3b82f6 100%)', 
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', 
            }}>
              Projects
            </span>
          </h2>
        </div>

        {/* ── Filter Toggle Bar ── */}
        <div className="proj-filter-bar">
          {FILTERS.map((f, i) => {
            const count =
                f.key === 'all'
                ? projects.length
                : projects.filter(p => p.type === f.key).length

            return (
                <div key={f.key} style={{ display: "contents" }}>
                {i > 0 && <div className="filter-divider" />}
                <button
                    className={`filter-pill${activeFilter === f.key ? ' active' : ''}`}
                    onClick={() => handleFilter(f.key)}
                >
                    <span className="filter-pill-dot" />
                    {f.icon}
                    {f.label}
                    <span className="filter-count">{count}</span>
                </button>
                </div>
            )
            })}
        </div>

        {/* Cards */}
        <div className="proj-viewport">
          <div className="proj-track" ref={trackRef} onScroll={handleScroll}>
            {Array.from({ length: totalPages }, (_, pageIdx) => {
              const pageProjects = filtered.slice(pageIdx * CARDS_PER_PAGE, (pageIdx + 1) * CARDS_PER_PAGE)
              return (
                <div key={pageIdx} className="proj-page">
                  {pageProjects.map((proj) => (
                    <div key={proj.id} className="proj-card">
                      <div className="card-accent-line" style={{
                        background: `linear-gradient(90deg, transparent, ${proj.accent}, transparent)`,
                      }} />
                      <div className="card-img-wrap" style={{
                        background: `linear-gradient(135deg, #060a18 0%, ${proj.accent}14 100%)`,
                      }}>
                        {proj.img ? (
                          <>
                            <img src={proj.img} alt={proj.name} />
                            <div className="card-img-overlay" />
                          </>
                        ) : (
                          <div className="card-no-img">
                            <div style={{
                              position: 'absolute', inset: 0,
                              backgroundImage: `repeating-linear-gradient(-45deg, ${proj.accent}06 0px, ${proj.accent}06 1px, transparent 1px, transparent 18px)`,
                            }} />
                            <div className="card-no-img-icon" style={{ background: `${proj.accent}12`, borderColor: `${proj.accent}28` }}>
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={proj.accent} strokeWidth="1.5" style={{ opacity: 0.6 }}>
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M3 9h18M9 21V9"/>
                              </svg>
                            </div>
                            <span className="card-no-img-label" style={{ color: proj.accent }}>No Preview</span>
                            <span className="card-no-img-num" style={{ color: proj.accent }}>{String(proj.id).padStart(2, '0')}</span>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, #060a18, transparent)' }}/>
                          </div>
                        )}
                        <div className="card-badge" style={{ background: `rgba(0,0,0,0.6)`, borderColor: `${proj.accent}45`, color: proj.accent }}>
                          {proj.category}
                        </div>
                      </div>
                      <div className="card-tags-row">
                        {proj.tags.map(t => (
                          <span key={t} className="tag" style={{ borderColor: `${proj.accent}20`, color: `${proj.accent}99` }}>{t}</span>
                        ))}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">{proj.name}</h3>
                        <p className="card-desc">{proj.desc}</p>
                        <div className="card-actions">
                          <a href={proj.code} className="proj-action proj-action-gh">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  {pageProjects.length < CARDS_PER_PAGE &&
                    Array.from({ length: CARDS_PER_PAGE - pageProjects.length }, (_, k) => (
                      <div key={`empty-${k}`} />
                    ))
                  }
                </div>
              )
            })}
          </div>
        </div>

        {/* Controls */}
        {totalPages > 1 && (
          <div className="proj-controls">
            <button className="nav-arrow" disabled={currentPage === 0} onClick={() => goToPage(currentPage - 1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="page-dots">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={`page-dot${currentPage === i ? ' active' : ''}`} onClick={() => goToPage(i)} aria-label={`Page ${i + 1}`} />
              ))}
            </div>
            <button className="nav-arrow" disabled={currentPage === totalPages - 1} onClick={() => goToPage(currentPage + 1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </section>
    </>
  )
}