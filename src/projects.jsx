import { useState, useRef, useMemo, useCallback } from 'react'
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
import p0 from './assets/p0.png';
import t1 from './assets/hello/t1.png'
import t2 from './assets/hello/t2.png'
import t3 from './assets/hello/t3.png'
import t4 from './assets/hello/t4.png'
import t5 from './assets/hello/t5.png'
import t6 from './assets/hello/t6.png'
import c1 from './assets/hello/c1.png'
import c2 from './assets/hello/c2.png'
import c4 from './assets/hello/c4.png'
import c5 from './assets/hello/c5.png'
import c6 from './assets/hello/c6.png'
import c7 from './assets/hello/c7.png'
import f1 from './assets/hello/f1.png'
import f2 from './assets/hello/f2.png'
import f4 from './assets/hello/f4.png'
import f5 from './assets/hello/f5.png'
import f6 from './assets/hello/f6.png'
import g1 from './assets/hello/g1.jpg'
import g2 from './assets/hello/g2.jpg'
import g3 from './assets/hello/g3.jpg'
import g4 from './assets/hello/g4.jpg'
import o0 from './assets/hello/o0.png'
import o1 from './assets/hello/o1.png'
import o2 from './assets/hello/o2.png'
import o3 from './assets/hello/o3.png'
import o4 from './assets/hello/o4.png'
import o5 from './assets/hello/o5.png'
import o6 from './assets/hello/o6.png'
import o7 from './assets/hello/o7.png'
import o8 from './assets/hello/o8.png'
import o9 from './assets/hello/o9.png'
import pp1 from './assets/hello/pp1.png'
import pp2 from './assets/hello/pp2.png'
import pp3 from './assets/hello/pp3.png'
import pp4 from './assets/hello/pp4.png'
import pp5 from './assets/hello/pp5.png'
import q1 from './assets/hello/q1.png'
import q2 from './assets/hello/q2.png'
import q3 from './assets/hello/q3.png'
import q4 from './assets/hello/q4.png'
import q5 from './assets/hello/q5.png'
import q6 from './assets/hello/q6.png'
import q7 from './assets/hello/q7.png'
import q8 from './assets/hello/q8.png'
import q9 from './assets/hello/q9.png'
import q10 from './assets/hello/q10.png'
import s1 from './assets/hello/s1.png'
import s2 from './assets/hello/s2.png'
import s3 from './assets/hello/s3.png'
import s4 from './assets/hello/s4.png'
import s5 from './assets/hello/s5.png'
import s6 from './assets/hello/s6.png'



// ── Simple Icons CDN ──────────────────────────────────────────────────────────
const SI = "https://cdn.simpleicons.org"

// ── Tech registry ─────────────────────────────────────────────────────────────
const TECH = {
  "React":              { logo: "react",              color: "#61dafb" },
  "Node.js":            { logo: "nodedotjs",          color: "#6db33f" },
  "Spring Boot":        { logo: "springboot",         color: "#6db33f" },
  "Java":               { logo: "openjdk",            color: "#f89820" },
  "Java Swing":         { logo: "openjdk",            color: "#f89820" },
  "PostgreSQL":         { logo: "postgresql",         color: "#4169e1" },
  "MySQL":              { logo: "mysql",              color: "#4479a1" },
  "MongoDB":            { logo: "mongodb",            color: "#4db33d" },
  "Docker":             { logo: "docker",             color: "#2496ed" },
  "Kafka":              { logo: "apachekafka",        color: "#ffffff" },
  "gRPC":               { logo: null,                 color: "#a78bfa" },
  "Microservices":      { logo: null,                 color: "#fb923c" },
  "Protocol Buffers":   { logo: "protocolbuffers",    color: "#4285f4" },
  "Swagger":            { logo: "swagger",            color: "#85ea2d" },
  "REST API":           { logo: null,                 color: "#94a3b8" },
  "Flutter":            { logo: "flutter",            color: "#54c5f8" },
  "Dart":               { logo: "dart",               color: "#00b4ab" },
  "Firebase":           { logo: "firebase",           color: "#ffca28" },
  "JWT":                { logo: "jsonwebtokens",      color: "#facc15" },
  "Express":            { logo: "express",            color: "#ffffff" },
  "Tailwind":           { logo: "tailwindcss",        color: "#38bdf8" },
  "Azure":              { logo: "microsoftazure",     color: "#0078d4" },
  "Google Maps":        { logo: "googlemaps",         color: "#34a853" },
  "Google Gemini API":  { logo: "googlegemini",       color: "#8b5cf6" },
  "mSpace API":         { logo: null,                 color: "#a78bfa" },
  "NetBeans":           { logo: "apachenetbeans",     color: "#1b6ac6" },
  "JavaScript":         { logo: "javascript",         color: "#f7df1e" },
  "CSS":                { logo: "css3",               color: "#264de4" },
  "HTML":               { logo: "html5",              color: "#e34f26" },
  "Postman":            { logo: "postman",            color: "#ff6c37" },
  "Git":                { logo: "git",                color: "#f05032" },
  "GitHub":             { logo: "github",             color: "#ffffff" },
  "VS Code":            { logo: "visualstudiocode",   color: "#007acc" },
  "Redis":              { logo: "redis",              color: "#dc382d" },
  "Axios":              { logo: null,                 color: "#5a29e4" },
  "Vite":               { logo: "vite",               color: "#646cff" },
  "Maven":              { logo: "apachemaven",        color: "#c71a36" },
  "Gradle":             { logo: "gradle",             color: "#02303a" },
  "Android":            { logo: "android",            color: "#3ddc84" },
  "Provider":           { logo: null,                 color: "#54c5f8" },
  "GetX":               { logo: null,                 color: "#8b5cf6" },
  "Hive":               { logo: null,                 color: "#ffca28" },
  "Chart.js":           { logo: "chartdotjs",         color: "#ff6384" },
  "Figma":              { logo: "figma",              color: "#f24e1e" },
  "JPA":                { logo: null,                 color: "#6db33f" },
  "Hibernate":          { logo: null,                 color: "#59666c" },
  "JDBC":               { logo: null,                 color: "#f89820" },
}
const DEFAULT_TECH = { logo: null, color: "#94a3b8" }

// ── Card accent colors ────────────────────────────────────────────────────────
const ACCENTS = {
  1: "#34d399", 2: "#91d3de", 3: "#5eadf7", 4: "#22d3ee",
  5: "#a78bfa", 6: "#f472b6", 7: "#fb923c", 8: "#22d3ee",
  9: "#facc15", 10: "#fb923c", 11: "#5eadf7",
}

// ── Feature icons ─────────────────────────────────────────────────────────────
const FEATURE_ICONS = {
  "Patient Registration":       "👤",
  "Appointment Management":     "📅",
  "Microservices Architecture": "🏗",
  "Kafka Event Processing":     "⚡",
  "gRPC Communication":         "🔗",
  "Docker Deployment":          "🐳",
  "API Documentation":          "📑",
  "Request Validation":         "🛡",
  "Exception Handling":         "⚠️",
  "Role-based Access":          "🔐",
  "Real-time Updates":          "🔄",
  "Dashboard Analytics":        "📊",
  "JWT Authentication":         "🔑",
  "Cart System":                "🛒",
  "SOS Alerts":                 "🚨",
  "Live Location Sharing":      "📍",
  "AI Chatbot":                 "🤖",
  "Clinic Locator":             "🏥",
  "Inventory Tracking":         "📦",
  "Sales Reporting":            "📈",
  "User Authentication":        "🔏",
  "Real-time Quiz":             "⏱",
  "Score Leaderboard":          "🏆",
  "Responsive UI":              "📱",
  "Budget Tracking":            "💰",
  "Expense Analytics":          "📉",
  "Notification System":        "🔔",
  "Order Management":           "📋",
  "Payment Flow":               "💳",
  "Location Tracking":          "🗺",
  "Self-check Guides":          "✅",
  "Task Assignment":            "📌",
  "Workforce Management":       "👥",
  "Report Generation":          "📊",
  "Vehicle Management":         "🚗",
  "Booking System":             "📝",
  "Customer Records":           "🗃",
}

const projects = [
  {
    id: 1,
    name: "Plantation Task Manager",
    category: "Management Platform",
    type: "web",
    desc: "Centralized task and workforce management system with role-based access control and reporting.",
    tags: ["React", "Node.js", "Express", "MySQL", "Azure", "JWT"],
    modalTags: ["React", "Node.js", "Express", "MySQL", "Azure", "JWT", "JavaScript", "CSS", "Vite", "Git", "Postman", "Figma"],
    features: ["Task Assignment", "Workforce Management", "Role-based Access", "Dashboard Analytics", "Report Generation", "User Authentication"],
    fullDesc: `
Plantation Task Management System is a full-stack web application designed to streamline plantation operations through efficient workforce and task management. The system features role-based access control, task assignment, worker availability tracking, real-time notifications, progress monitoring, and reporting dashboards. Developed using React, Node.js, and MySQL, it helps improve operational efficiency, reduce manual processes, and support data-driven decision-making.
`,
    code: "https://github.com/ThasuniInduma/plantro_plantation_task_management_web",
    img: p4,
    imgs: [t1, t2, t3,t4],
  },
  {
    id: 2,
    name: "Patient Management System",
    category: "Microservices System",
    type: "web",
    desc: "Patient Management System with microservices-based architecture, secure patient data management, inter-service communication, and event-driven processing.",
    fullDesc: "Developed a Patient Management System using Java Spring Boot and a microservices architecture. Implemented RESTful APIs for patient management, PostgreSQL database integration, Docker containerization, gRPC-based service-to-service communication, and Apache Kafka for event-driven messaging. Applied DTOs, request validation, exception handling, Protocol Buffers, and Swagger documentation following industry-standard backend development practices.",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Microservices", "gRPC", "Kafka"],
    modalTags: ["Spring Boot", "Java", "PostgreSQL", "Docker", "Microservices", "gRPC", "Kafka", "Protocol Buffers", "Swagger", "Maven", "JPA", "Hibernate", "REST API", "Git", "Postman"],
    features: ["Patient Registration", "Appointment Management", "Microservices Architecture", "Kafka Event Processing", "gRPC Communication", "Docker Deployment", "API Documentation", "Request Validation"],
    live: "#",
    code: "https://github.com/ThasuniInduma/patient-management-system",
    img: p0,
    imgs: [p0],
  },
  {
    id: 3,
    name: "QuizHub",
    category: "Distributed System",
    type: "web",
    desc: "Real-time quiz platform with teacher & student modules, JWT authentication, and live result updates.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    modalTags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "JavaScript", "Vite", "Axios", "Git", "Postman"],
    features: ["Real-time Quiz", "Role-based Access", "JWT Authentication", "Score Leaderboard", "Dashboard Analytics", "Real-time Updates"],
    fullDesc: `QuizHub is a distributed real-time quiz platform developed to facilitate interactive online assessments for teachers and students. The system enables teachers to create and manage quizzes while allowing students to participate in real-time and view instant results. I contributed to both frontend and backend development, implementing secure JWT-based authentication, scalable RESTful APIs, role-based user modules, and live result tracking. MongoDB Atlas was integrated as a cloud-hosted database to provide reliable and scalable data storage for quiz management and user activities.`,
    live: "#",
    code: "https://github.com/ThasuniInduma/distributed_quiz_system",
    img: p1,
    imgs: [q1, q2,q3,q4,q5,q6,q7,q8,q9,q10],
  },
  {
    id: 4,
    name: "Point of Sales System",
    category: "Full-Stack Web App",
    type: "web",
    desc: "Sales and inventory management system with real-time stock tracking and dynamic dashboards.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    modalTags: ["Java", "Spring Boot", "React", "MySQL", "JPA", "Hibernate", "JDBC", "JavaScript", "CSS", "Maven", "REST API", "Postman", "Git"],
    features: ["Inventory Tracking", "Sales Reporting", "Dashboard Analytics", "User Authentication", "Order Management", "Real-time Updates"],
    fullDesc: `Point of Sale (POS) System is a full-stack web application developed to streamline retail operations through sales processing, inventory management, and customer management. The system features secure authentication, inventory tracking,  and customer record management, enabling businesses to efficiently manage day-to-day operations. I contributed to both frontend and backend development, building responsive user interfaces, implementing business logic, developing RESTful APIs, and designing relational database structures to ensure reliable and efficient data management.`,
    live: "#",
    code: "https://github.com/ThasuniInduma/pos-frontend",
    img: p2,
    imgs: [pp4,pp5,pp3,pp2,pp1],
  },
  {
    id: 5,
    name: "SafeStep",
    category: "Mobile Safety App",
    type: "mobile",
    desc: "Personal safety app with SOS alerts, live location sharing, and real-time family notifications.",
    tags: ["Flutter", "Firebase", "Google Maps", "mSpace API"],
    modalTags: ["Flutter", "Dart", "Firebase", "Google Maps", "mSpace API", "Provider", "Android", "Figma", "Git"],
    features: ["SOS Alerts", "Live Location Sharing", "Real-time Updates", "Notification System", "Location Tracking", "User Authentication"],
    fullDesc: `Developed a cross-platform mobile application focused on personal safety and emergency response using Flutter and Firebase. Implemented SOS alerts, live and offline location sharing, unsafe area notifications, and family emergency alerts to enhance user safety. Integrated Mobitel MSpace API for real-time communication and Google Maps API for geolocation-based services. Built AI-powered features including motion detection and an intelligent chatbot using Google Gemini API to provide assistance during emergencies. Designed to deliver reliable safety support, situational awareness, and rapid emergency communication.`,
    live: "#",
    code: "https://github.com/ThasuniInduma/Safe_Step",
    img: p5,
    imgs: [s6,s5,s4,s3,s2,s1],
  },
  {
    id: 6,
    name: "HerLife",
    category: "HealthTech App",
    type: "mobile",
    desc: "Breast cancer awareness app with self-check guides, clinic locator, and AI chatbot support.",
    tags: ["Flutter", "Firebase", "Google Gemini API", "Google Maps"],
    modalTags: ["Flutter", "Dart", "Firebase", "Google Gemini API", "Google Maps", "Provider", "Android", "Figma", "Git"],
    features: ["Self-check Guides", "Clinic Locator", "AI Chatbot", "Real-time Updates", "Notification System", "User Authentication"],
    fullDesc: `Developed a cross-platform mobile application to promote breast cancer awareness and early detection using Flutter and Firebase. Implemented self-check guidance, health reminders, doctor connectivity features, and a location-based clinic finder using Google Maps API. Integrated an AI-powered multilingual chatbot with Google Gemini API to provide real-time health guidance and educational support. Recognized as the Winner of SDG Sprints 2026 and 2nd Runner-Up at Code with WIE 2025.`,
    live: "#",
    code: "#",
    img: p3,
    imgs: [p3],
  },
  {
    id: 7,
    name: "Cakely",
    category: "E-Commerce",
    type: "web",
    desc: "MERN-based cake ordering platform with secure JWT authentication and cart system.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    modalTags: ["React", "Node.js", "MongoDB", "Express", "JWT", "JavaScript", "CSS", "Axios", "Vite", "Git", "Postman", "Figma"],
    features: ["Order Management", "Cart System", "JWT Authentication", "User Authentication", "Payment Flow", "Real-time Updates"],
    fullDesc: "Cakely is a MERN-stack e-commerce platform for ordering custom cakes. Customers can browse products, add to cart, and place orders. The admin panel allows managing orders and inventory. JWT handles secure authentication, and Axios manages REST API communication between frontend and backend.",
    live: "#",
    code: "https://github.com/ThasuniInduma/web_frontend",
    img: p7,
    imgs: [o0, o2,o1,o4,o5,o6,o8,o9],
  },
  {
    id: 8,
    name: "Car Rental System",
    category: "Desktop Application",
    type: "web",
    desc: "Java-based desktop app for vehicle rental and customer management with MySQL integration.",
    tags: ["Java Swing", "MySQL", "NetBeans"],
    modalTags: ["Java Swing", "Java", "MySQL", "JDBC", "NetBeans", "Git"],
    features: ["Vehicle Management", "Booking System", "Customer Records", "Report Generation", "User Authentication", "Dashboard Analytics"],
    fullDesc: "A Java Swing desktop application for managing a car rental business. Staff can add vehicles, manage customer records, handle bookings, and generate rental reports. MySQL is used for persistent storage via JDBC, and the project was developed in Apache NetBeans following a layered architecture.",
    live: "#",
    code: "https://github.com/ThasuniInduma/carhire-layered",
    img: p8,
    imgs: [c7, c6,c5,c4,c2,c1],
  },
  {
    id: 9,
    name: "Grain Store Manager",
    category: "Inventory System",
    type: "web",
    desc: "Inventory and transaction management system for grain storage operations.",
    tags: ["Java Swing", "MySQL"],
    modalTags: ["Java Swing", "Java", "MySQL", "JDBC", "NetBeans", "Git"],
    features: ["Inventory Tracking", "Order Management", "Report Generation", "Dashboard Analytics", "Customer Records", "User Authentication"],
    fullDesc: "A desktop inventory management system for grain storage businesses. Handles stock tracking, purchase and sale transactions, supplier and customer records, and generates reports. Built with Java Swing and connected to MySQL via JDBC for reliable data persistence.",
    live: "#",
    code: "https://github.com/ThasuniInduma/Grain_Store_Management_System",
    img: p9,
    imgs: [g3, g2,g4,g1],
  },
  {
    id: 10,
    name: "Food Delivery App",
    category: "Web Application",
    type: "web",
    desc: "Built a responsive food ordering platform with real-time tracking and user-friendly design.",
    tags: ["React", "JavaScript", "CSS"],
    modalTags: ["React", "JavaScript", "CSS", "HTML", "Vite", "Axios", "Chart.js", "Git", "Figma"],
    features: ["Order Management", "Real-time Updates", "Responsive UI", "Cart System", "User Authentication", "Dashboard Analytics"],
    fullDesc: "A responsive food delivery web application built with React. Users can browse restaurant menus, add items to cart, and track orders. Features include a clean UI, intuitive ordering flow, and real-time order status updates. Designed with a focus on user experience and mobile responsiveness.",
    live: "#",
    code: "https://github.com/ThasuniInduma/food-delivery-app",
    img: p10,
    imgs: [f5, f4,f6,f2,f1],
  },
  {
    id: 11,
    name: "Money Controller App",
    category: "Mobile Application",
    type: "mobile",
    desc: "A Flutter-based personal finance application for tracking income, expenses, and managing budgets. (Ongoing)",
    tags: ["Flutter", "Dart", "Firebase"],
    modalTags: ["Flutter", "Dart", "Firebase", "Provider", "Hive", "Chart.js", "Android", "Figma", "Git"],
    features: ["Budget Tracking", "Expense Analytics", "Real-time Updates", "Dashboard Analytics", "Notification System", "User Authentication"],
    fullDesc: "CashPilot is an ongoing personal finance Flutter app. Users can log income and expenses, set monthly budgets, and visualise spending by category. Local data is persisted with Hive for offline access, with Firebase sync for cross-device support. Charts provide clear financial insights.",
    live: "#",
    code: "https://github.com/ThasuniInduma/cashpilot_money_controller_app",
    img: p11,
    imgs: [p11, p11],
  },
]

const CARDS_PER_PAGE = 6

const FILTERS = [
  {
    key: 'all', label: 'All Projects',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  },
  {
    key: 'web', label: 'Web Apps',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20M8 4v4"/><circle cx="5" cy="6" r="0.8" fill="currentColor"/><circle cx="8" cy="6" r="0.8" fill="currentColor"/></svg>,
  },
  {
    key: 'mobile', label: 'Mobile Apps',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="3"/><circle cx="12" cy="18" r="1" fill="currentColor"/><path d="M10 5h4"/></svg>,
  },
]

// ── TechBadge ─────────────────────────────────────────────────────────────────
function TechBadge({ tag }) {
  const tc = TECH[tag] || DEFAULT_TECH
  const [imgError, setImgError] = useState(false)

  return (
    <span className="pm-tech-badge">
      {tc.logo && !imgError ? (
        <img
          className="pm-tech-logo"
          src={`${SI}/${tc.logo}/${tc.color.replace('#', '')}`}
          alt={tag}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="pm-tech-dot" style={{ background: tc.color }} />
      )}
      {tag}
    </span>
  )
}

// ── Image Gallery ─────────────────────────────────────────────────────────────
function ImageGallery({ imgs, accent, name, coverMode }) {
  const [idx, setIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const go = useCallback((newIdx) => {
    if (newIdx === idx) return
    setIdx(newIdx)
    setAnimKey(k => k + 1)
  }, [idx])

  const prev = (e) => { e.stopPropagation(); go((idx - 1 + imgs.length) % imgs.length) }
  const next = (e) => { e.stopPropagation(); go((idx + 1) % imgs.length) }

  const hasMultiple = imgs && imgs.length > 1
  const hasImg = imgs && imgs[idx]

  return (
    <div className="pm-gallery">
      <div className="pm-gallery-frame">
        {hasImg ? (
          <img
            key={animKey}
            src={imgs[idx]}
            alt={`${name} screenshot ${idx + 1}`}
            className={`pm-gallery-img${coverMode ? ' cover' : ''}`}
          />
        ) : (
          <div className="pm-no-img-placeholder">
            <span className="pm-no-img-initials">
              {name.split(' ').map(w => w[0]).join('').slice(0, 4)}
            </span>
          </div>
        )}
        <div className="pm-gallery-grad" />

        {hasMultiple && (
          <>
            <button className="pm-gallery-arrow pm-gallery-arrow-l" onClick={prev} aria-label="Previous image">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="pm-gallery-arrow pm-gallery-arrow-r" onClick={next} aria-label="Next image">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="pm-gallery-dots">
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`pm-gallery-dot${i === idx ? ' active' : ''}`}
              style={i === idx ? { background: accent, width: '18px' } : {}}
              onClick={(e) => { e.stopPropagation(); go(i) }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Projects() {
  const trackRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

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
    setCurrentPage(Math.round(el.scrollLeft / el.clientWidth))
  }

  const handleFilter = (key) => {
    setActiveFilter(key)
    setCurrentPage(0)
    const el = trackRef.current
    if (el) el.scrollTo({ left: 0, behavior: 'instant' })
  }

  const accent = selectedProject ? ACCENTS[selectedProject.id] || '#5eadf7' : '#5eadf7'

  // Close modal on Escape
  const handleOverlayKey = (e) => {
    if (e.key === 'Escape') setSelectedProject(null)
  }

  return (
    <>
      <style>{`
        /* ─────────────────────────────────────────────────────────────
           FILTER BAR
        ───────────────────────────────────────────────────────────── */
        .proj-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 3rem;
          flex-wrap: wrap;
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
          background: linear-gradient(135deg,#5eadf720,#3b82f610);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .filter-pill:hover:not(.active) { border-color: rgba(94,173,247,0.25); color: #94a3b8; transform: translateY(-1px); }
        .filter-pill:hover:not(.active)::before { opacity: 1; }
        .filter-pill.active {
          background: linear-gradient(135deg,rgba(94,173,247,0.18),rgba(59,130,246,0.12));
          border-color: rgba(94,173,247,0.45);
          color: #7dc4ff;
          box-shadow: 0 0 20px rgba(94,173,247,0.18), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .filter-pill-dot {
          width: 6px; height: 6px; border-radius: 50%; background: currentColor;
          opacity: 0; transform: scale(0); transition: all 0.25s cubic-bezier(.22,1,.36,1); flex-shrink: 0;
        }
        .filter-pill.active .filter-pill-dot { opacity: 1; transform: scale(1); }
        .filter-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.07); margin: 0 2px; flex-shrink: 0; }
        .filter-count {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 18px; height: 18px; padding: 0 5px; border-radius: 6px;
          font-size: 0.6rem; font-weight: 700; background: rgba(255,255,255,0.06);
          color: #4e6070; transition: all 0.25s; line-height: 1;
        }
        .filter-pill.active .filter-count { background: rgba(94,173,247,0.2); color: #5eadf7; }

        /* ─────────────────────────────────────────────────────────────
           CARD GRID
        ───────────────────────────────────────────────────────────── */
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
          gap: 20px;
        }
        .proj-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(8,12,28,0.9);
          backdrop-filter: blur(16px);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), border-color 0.3s ease;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,0.14); }
        .proj-card .card-accent-line {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.35s ease; border-radius: 20px 20px 0 0;
        }
        .proj-card:hover .card-accent-line { opacity: 1; }
        .card-img-wrap { position: relative; width: 100%; height: 160px; overflow: hidden; flex-shrink: 0; }
        .card-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(.22,1,.36,1); }
        .proj-card:hover .card-img-wrap img { transform: scale(1.06); }
        .card-img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom,rgba(0,0,0,0) 40%,rgba(8,12,28,0.96) 100%); }
        .card-badge {
          position: absolute; top: 12px; left: 14px; padding: 3px 10px;
          border-radius: 20px; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          backdrop-filter: blur(10px); border: 1px solid transparent;
        }
        .card-tags-row { display: flex; gap: 5px; flex-wrap: wrap; padding: 14px 15px 0; }
        .tag {
          display: inline-flex; align-items: center; padding: 4px 8px;
          border-radius: 20px; font-size: 0.59rem; font-weight: 600;
          letter-spacing: 0.05em; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09); color: #7a8aa0;
          transition: all 0.2s ease;
        }
        .proj-card:hover .tag { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.13); }
        .card-body { padding: 16px 16px 18px; flex: 1; display: flex; flex-direction: column; }
        .card-title { font-size: 1rem; font-weight: 700; color: #eef2f8; margin-bottom: 10px; letter-spacing: -0.02em; line-height: 1.25; }
        .card-desc { font-size: 0.82rem; color: #4e6070; line-height: 1.7; font-weight: 300; flex: 1; margin-bottom: 12px; }
        .card-actions { display: flex; gap: 8px; margin-top: auto; }
        .proj-action {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 6px; padding: 8px 14px; border-radius: 10px; font-size: 0.72rem;
          font-weight: 600; text-decoration: none; transition: all 0.22s;
          font-family: 'Sora', sans-serif; cursor: pointer; border: none;
        }
        .proj-action-gh {
          flex: 1; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08) !important; color: #64748b;
        }
        .proj-action-gh:hover {
          background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.16) !important;
          color: #94a3b8; transform: translateY(-1px);
        }

        /* ─────────────────────────────────────────────────────────────
           PAGINATION
        ───────────────────────────────────────────────────────────── */
        .proj-controls {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; margin-top: 36px;
        }
        .nav-arrow {
          display: flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);
          color: #94a3b8; cursor: pointer; transition: all 0.28s cubic-bezier(.22,1,.36,1);
          flex-shrink: 0; outline: none;
        }
        .nav-arrow:hover:not(:disabled) {
          background: rgba(94,173,247,0.12); border-color: rgba(94,173,247,0.5);
          color: #5eadf7; transform: scale(1.1); box-shadow: 0 0 24px rgba(94,173,247,0.25);
        }
        .nav-arrow:disabled { opacity: 0.18; cursor: default; transform: none; }
        .page-dots { display: flex; gap: 8px; align-items: center; }
        .page-dot {
          border-radius: 50%; cursor: pointer; transition: all 0.3s cubic-bezier(.22,1,.36,1);
          border: none; outline: none; padding: 0; background: rgba(255,255,255,0.15);
          width: 7px; height: 7px;
        }
        .page-dot.active { width: 22px; border-radius: 4px; background: linear-gradient(90deg,#5eadf7,#3b82f6); box-shadow: 0 0 12px rgba(94,173,247,0.5); }
        .page-dot:hover:not(.active) { background: rgba(94,173,247,0.4); transform: scale(1.2); }

        /* ─────────────────────────────────────────────────────────────
           MODAL OVERLAY
        ───────────────────────────────────────────────────────────── */
        .pm-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex; justify-content: center; align-items: center;
          z-index: 9999; padding: 16px;
          animation: pm-fade-in 0.18s ease;
        }
        @keyframes pm-fade-in { from { opacity: 0 } to { opacity: 1 } }

        /* ─────────────────────────────────────────────────────────────
           MODAL SHELL — side-by-side layout
        ───────────────────────────────────────────────────────────── */
        .pm-modal {
          width: min(960px, 100%);
          height: min(620px, 90vh);
          background: #0b0f1e;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          animation: pm-slide-in 0.28s cubic-bezier(.22,1,.36,1);
          font-family: 'Sora', sans-serif;
          position: relative;
        }
        @keyframes pm-slide-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97) }
          to   { opacity: 1; transform: translateY(0)   scale(1)    }
        }

        /* ── Close button (top-right of whole modal) ── */
        .pm-close {
          position: absolute; top: 14px; right: 16px;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(11,15,30,0.85); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1); color: #64748b; font-size: 13px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.18s; outline: none; z-index: 20;
        }
        .pm-close:hover { background: rgba(255,255,255,0.1); color: #e2e8f0; border-color: rgba(255,255,255,0.2); }

        /* ─────────────────────────────────────────────────────────────
           LEFT PANEL — gallery
        ───────────────────────────────────────────────────────────── */
        .pm-left {
          flex: 0 0 45%;
          display: flex;
          flex-direction: column;
          background: #070a16;
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
          min-height: 0;
        }

        /* accent line across top of left panel */
        .pm-accent-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px; z-index: 8; pointer-events: none;
        }

        /* category pill */
        .pm-category-pill {
          position: absolute; bottom: 48px; left: 16px;
          padding: 3px 11px; border-radius: 100px;
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: rgba(11,15,30,0.82); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1); color: #64748b; z-index: 8;
        }

        /* ── Gallery ── */
        .pm-gallery {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .pm-gallery-frame {
          flex: 1;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #070a16;
        }
        .pm-gallery-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          animation: img-fade 0.22s ease;
        }
        .pm-gallery-img.cover {
          object-fit: cover;
        }
        @keyframes img-fade { from { opacity: 0 } to { opacity: 1 } }
        .pm-gallery-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(7,10,22,0.65) 100%);
          pointer-events: none; z-index: 2;
        }
        .pm-no-img-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        .pm-no-img-initials {
          font-size: 5rem; font-weight: 900; opacity: 0.05;
          letter-spacing: -0.08em; color: #fff; user-select: none;
        }

        /* arrows */
        .pm-gallery-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(11,15,30,0.82); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12); color: #94a3b8;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; outline: none; z-index: 6; transition: all 0.18s;
        }
        .pm-gallery-arrow:hover {
          background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.22);
          color: #e2e8f0; transform: translateY(-50%) scale(1.1);
        }
        .pm-gallery-arrow-l { left: 14px; }
        .pm-gallery-arrow-r { right: 14px; }

        /* dots */
        .pm-gallery-dots {
          flex-shrink: 0;
          display: flex; justify-content: center; gap: 5px;
          padding: 10px 0 11px;
          background: #070a16;
          border-top: 1px solid rgba(255,255,255,0.04);
          z-index: 4;
        }
        .pm-gallery-dot {
          width: 6px; height: 6px; border-radius: 3px;
          background: rgba(255,255,255,0.12); border: none; outline: none;
          cursor: pointer; padding: 0; transition: all 0.22s;
        }
        .pm-gallery-dot:hover:not(.active) { background: rgba(255,255,255,0.28); }

        /* ─────────────────────────────────────────────────────────────
           RIGHT PANEL — content
        ───────────────────────────────────────────────────────────── */
        .pm-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }
        .pm-body {
          flex: 1;
          padding: 24px 26px 28px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
        }
        .pm-body::-webkit-scrollbar { width: 3px; }
        .pm-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

        .pm-head { margin-bottom: 4px; }
        .pm-title {
          font-size: 1.3rem; font-weight: 800; color: #f1f5f9;
          letter-spacing: -0.03em; line-height: 1.2; margin: 0 36px 0 0;
        }
        .pm-sub {
          font-size: 0.62rem; color: #334155; font-weight: 500;
          margin-top: 5px; letter-spacing: 0.07em; text-transform: uppercase;
        }
        .pm-btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .pm-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 8px; font-size: 0.68rem; font-weight: 600;
          text-decoration: none; cursor: pointer; outline: none;
          transition: all 0.18s; font-family: 'Sora', sans-serif; white-space: nowrap;
        }
        .pm-btn-gh { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); color: #64748b; }
        .pm-btn-gh:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); color: #94a3b8; transform: translateY(-1px); }
        .pm-btn-live { background: rgba(94,173,247,0.08); border: 1px solid rgba(94,173,247,0.28); color: #7dc4ff; }
        .pm-btn-live:hover { background: rgba(94,173,247,0.15); transform: translateY(-1px); }

        .pm-desc { font-size: 0.78rem; line-height: 1.88; color: #475569; margin: 14px 0 0; }
        .pm-hr { border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 18px 0; }
        .pm-label {
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #1e293b; margin-bottom: 12px;
        }

        /* ── Tech badges ── */
        .pm-tech-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
        .pm-tech-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 7px;
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.01em;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          color: #64748b; transition: all 0.18s; cursor: default;
        }
        .pm-tech-badge:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12); color: #94a3b8; }
        .pm-tech-logo { width: 14px; height: 14px; object-fit: contain; flex-shrink: 0; display: block; }
        .pm-tech-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; opacity: 0.75; }

        /* ── Features grid ── */
        .pm-features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
        .pm-feature {
          display: flex; align-items: center; gap: 9px;
          padding: 9px 12px; border-radius: 9px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          font-size: 0.7rem; color: #475569; transition: all 0.18s; cursor: default;
        }
        .pm-feature:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.09); color: #64748b; }
        .pm-feature-icon {
          width: 22px; height: 22px; border-radius: 6px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* ─────────────────────────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────────────────────────── */

        /* ── Large tablets: shrink left panel ── */
        @media (max-width: 1100px) {
          .pm-left { flex: 0 0 42%; }
          .pm-title { font-size: 1.15rem; }
        }

        /* ── Tablets / small laptops: stack vertically ── */
        @media (max-width: 860px) {
          .pm-modal {
            flex-direction: column;
            height: auto;
            max-height: 92vh;
            width: calc(100vw - 32px);
          }
          .pm-left {
            flex: 0 0 auto;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .pm-gallery-frame { height: 240px; }
          .pm-gallery-img { object-fit: cover; }
          .pm-gallery-img.cover { object-fit: cover; }
          .pm-right { max-height: none; }
          .pm-body { padding: 18px 20px 24px; }
          .pm-title { margin-right: 36px; }
          .pm-category-pill { bottom: 44px; }
          .pm-features-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Mobile portrait ── */
        @media (max-width: 600px) {
          .pm-modal { width: calc(100vw - 20px); border-radius: 18px; }
          .pm-gallery-frame { height: 200px; }
          .pm-body { padding: 15px 15px 20px; }
          .pm-title { font-size: 1.05rem; margin-right: 32px; }
          .pm-features-grid { grid-template-columns: repeat(2, 1fr); }
          .pm-tech-badge { font-size: 0.62rem; padding: 4px 8px; }
          .pm-desc { font-size: 0.76rem; }
          .pm-gallery-arrow { width: 30px; height: 30px; }
        }

        /* ── Very small phones ── */
        @media (max-width: 400px) {
          .pm-modal { width: calc(100vw - 16px); border-radius: 16px; }
          .pm-gallery-frame { height: 170px; }
          .pm-features-grid { grid-template-columns: 1fr 1fr; }
          .pm-body { padding: 12px 12px 18px; }
          .pm-title { font-size: 0.98rem; }
        }

        /* ── Card grid responsive ── */
        @media (max-width: 1100px) {
          .proj-page { grid-template-columns: repeat(3, 1fr); gap: 16px; }
        }
        @media (max-width: 900px) {
          .proj-page { grid-template-columns: repeat(2, 1fr) !important; gap: 16px; }
          .card-img-wrap { height: 140px; }
        }
        @media (max-width: 640px) {
          .proj-page { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
          .card-img-wrap { height: 120px; }
          .card-body { padding: 12px 12px 14px; }
          .card-title { font-size: 0.88rem; }
          .card-desc { font-size: 0.78rem; }
          .filter-divider { display: none; }
          .proj-filter-bar { gap: 5px; margin-bottom: 1.8rem; }
          .filter-pill { padding: 7px 12px; font-size: 0.68rem; }
          .nav-arrow { width: 42px; height: 42px; }
          .proj-controls { gap: 14px; margin-top: 24px; }
        }
        @media (max-width: 420px) {
          .proj-page { grid-template-columns: 1fr !important; gap: 12px; }
          .card-img-wrap { height: 180px; }
          .filter-pill { padding: 6px 11px; font-size: 0.66rem; gap: 5px; }
        }
      `}</style>

      <section id="projects" style={{ padding: '5%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem,4.5vw,3.2rem)', fontWeight: 900,
            letterSpacing: '-0.05em', lineHeight: 1, color: '#fff',
            fontFamily: "'Sora', sans-serif"
          }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg,#7dc4ff 0%,#5eadf7 50%,#3b82f6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Projects
            </span>
          </h2>
        </div>

        {/* ── Filter Bar ── */}
        <div className="proj-filter-bar">
          {FILTERS.map((f, i) => {
            const count = f.key === 'all' ? projects.length : projects.filter(p => p.type === f.key).length
            return (
              <div key={f.key} style={{ display: 'contents' }}>
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

        {/* ── Card Grid ── */}
        <div className="proj-viewport">
          <div className="proj-track" ref={trackRef} onScroll={handleScroll}>
            {Array.from({ length: totalPages }, (_, pageIdx) => {
              const pageProjects = filtered.slice(pageIdx * CARDS_PER_PAGE, (pageIdx + 1) * CARDS_PER_PAGE)
              return (
                <div key={pageIdx} className="proj-page">
                  {pageProjects.map(proj => {
                    const ac = ACCENTS[proj.id] || '#5eadf7'
                    return (
                      <div key={proj.id} className="proj-card" onClick={() => setSelectedProject(proj)}>
                        <div className="card-accent-line" style={{ background: `linear-gradient(90deg,transparent,${ac},transparent)` }} />
                        <div className="card-img-wrap" style={{ background: `linear-gradient(135deg,#060a18 0%,${ac}14 100%)` }}>
                          {proj.img ? (
                            <>
                              <img src={proj.img} alt={proj.name} />
                              <div className="card-img-overlay" />
                            </>
                          ) : (
                            <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                              <span style={{ fontSize:'4rem', fontWeight:900, opacity:0.06, color:'#fff' }}>
                                {proj.name.split(' ').map(w=>w[0]).join('').slice(0,3)}
                              </span>
                            </div>
                          )}
                          <div className="card-badge" style={{ background:'rgba(0,0,0,0.6)', borderColor:`${ac}40`, color: ac }}>
                            {proj.category}
                          </div>
                        </div>
                        <div className="card-tags-row">
                          {proj.tags.map(t => (
                            <span key={t} className="tag" style={{ borderColor:`${ac}18`, color:`${ac}88` }}>{t}</span>
                          ))}
                        </div>
                        <div className="card-body">
                          <h3 className="card-title">{proj.name}</h3>
                          <p className="card-desc">{proj.desc}</p>
                          <div className="card-actions">
                            <a
                              href={proj.code !== '#' ? proj.code : undefined}
                              className="proj-action proj-action-gh"
                              onClick={e => e.stopPropagation()}
                              target="_blank" rel="noopener noreferrer"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                              View on GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  {/* Fill empty grid slots on last page */}
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

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="proj-controls">
            <button className="nav-arrow" disabled={currentPage === 0} onClick={() => goToPage(currentPage - 1)} aria-label="Previous page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="page-dots">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={`page-dot${currentPage === i ? ' active' : ''}`} onClick={() => goToPage(i)} aria-label={`Page ${i + 1}`} />
              ))}
            </div>
            <button className="nav-arrow" disabled={currentPage === totalPages - 1} onClick={() => goToPage(currentPage + 1)} aria-label="Next page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </section>

      {/* ── MODAL ── */}
      {selectedProject && (
        <div
          className="pm-overlay"
          onClick={() => setSelectedProject(null)}
          onKeyDown={handleOverlayKey}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.name}
        >
          <div className="pm-modal" onClick={e => e.stopPropagation()}>

            {/* Close button — always top-right of modal */}
            <button className="pm-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">✕</button>

            {/* ── LEFT: Gallery Panel ── */}
            <div className="pm-left">
              <div className="pm-accent-bar" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

              <ImageGallery
                imgs={selectedProject.imgs || (selectedProject.img ? [selectedProject.img] : [])}
                accent={accent}
                name={selectedProject.name}
              />

              <span className="pm-category-pill">{selectedProject.category}</span>
            </div>

            {/* ── RIGHT: Content Panel ── */}
            <div className="pm-right">
              <div className="pm-body">

                {/* Title + subtitle */}
                <div className="pm-head">
                  <h2 className="pm-title">{selectedProject.name}</h2>
                  <p className="pm-sub">{selectedProject.category}</p>
                </div>

                {/* Action buttons */}
                <div className="pm-btn-row">
                  {selectedProject.code && selectedProject.code !== '#' && (
                    <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-gh">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {selectedProject.live && selectedProject.live !== '#' && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-live">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="pm-desc">{selectedProject.fullDesc || selectedProject.desc}</p>

                {/* Tech Stack */}
                <hr className="pm-hr" />
                <p className="pm-label">Tech Stack</p>
                <div className="pm-tech-wrap">
                  {(selectedProject.modalTags || selectedProject.tags).map(tag => (
                    <TechBadge key={tag} tag={tag} />
                  ))}
                </div>

                {/* Key Features */}
                {selectedProject.features?.length > 0 && (
                  <>
                    <hr className="pm-hr" />
                    <p className="pm-label">Key Features</p>
                    <div className="pm-features-grid">
                      {selectedProject.features.map(f => (
                        <div key={f} className="pm-feature">
                          <span className="pm-feature-icon">{FEATURE_ICONS[f] || '✦'}</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}