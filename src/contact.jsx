import React, { useState } from 'react';
import profileImg from './assets/thasuni.png'; 
import t from './assets/t.jpeg';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formsubmit.co/thasuniinduma@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section id="contact" style={{
      padding: '8rem 5%',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 10rem;
        }

        .contact-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-family: 'Sora', sans-serif;
          margin-bottom: 1.5rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .contact-input:focus {
          border-color: rgba(94, 173, 247, 0.5);
        }

        @media (max-width: 1100px) {
          .contact-grid { gap: 4rem; }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-right { order: -1; }
        }
      `}</style>

      <div className="contact-grid">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            color: '#fff' 
          }}>
            Get In <span style={{
              background: 'linear-gradient(135deg, #7dc4ff 0%, #5eadf7 60%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Touch</span>
          </h2>
          
          <p style={{ color: '#64748b', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="contact-input"
              style={{ resize: 'none' }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn-cv"
              style={{
                border: '1px solid rgba(94,173,247,0.35)',
                background: 'rgba(94,173,247,0.1)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px', aspectRatio: '4/5' }}>
            
            <div style={{
              position: 'absolute', inset: '-15px', borderRadius: '30px',
              border: '2px solid rgba(94,173,247,0.15)', borderTopColor: '#5eadf7',
              animation: 'spin 10s linear infinite', opacity: 0.5
            }} />
            <div style={{
              position: 'absolute', inset: '-30px', borderRadius: '35px',
              border: '1px solid rgba(94,173,247,0.15)', borderBottomColor: '#3b82f6',
              animation: 'spin 15s linear infinite reverse',
            }} />
            
            <div style={{
              width: '100%', height: '100%',
              borderRadius: '24px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative', zIndex: 2,
              background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <img 
                src={profileImg} 
                alt="Thasuni Induma" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(2, 6, 23, 0.6) 0%, transparent 50%)'
              }} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;