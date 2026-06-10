import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" style={{ position: 'relative' }}>
      <div className="footer-bg footer-bg-one" />
      <div className="footer-bg footer-bg-two" />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand-section">
            <h3>Aarav Academy</h3>
            <p className="footer-about">
              Dedicated to providing quality education and shaping the future of students from Nursery to 12th grade with CBSE curriculum.
            </p>
            <div className="footer-pill-row">
              <span>Nursery - XII</span>
              <span>CBSE</span>
              <span>IIT Foundation</span>
            </div>
            <div className="social-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://www.youtube.com/@aaravacademy9551" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/people/Aarav-Academy/100064210173603/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/arav_academy?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); else scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#study-notes" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('study-notes'); }}>
                  Study Notes
                </a>
              </li>
              <li>
                <a href="#ncert-solutions" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('ncert-solutions'); }}>
                  NCERT Solutions
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('about'); }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#admin" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('admin'); }}>
                  Admin Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Programs</h3>
            <ul className="footer-links">
              <li><a>Aarav Child School (Nursery-V)</a></li>
              <li><a>Junior Classes (VI-VIII)</a></li>
              <li><a>Academic Classes (IX-XII)</a></li>
              <li><a>CBSE Curriculum</a></li>
              <li><a>IIT Foundation</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>D-250, Gali No- 54, Mahavir Enclave Part-3, Uttam Nagar, New Delhi - 110059</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" style={{ transform: 'scaleX(-1)' }} />
                <div>
                  <p> +91 9540772241</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>Aaravacademy10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-line" />
          <p>&copy; {currentYear} Aarav Academy. All Rights Reserved. | Made by Yash Raj</p>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '30px',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: 'white',
          border: '2px solid #276eb9',
          color: '#276eb9',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(39, 110, 185, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(39, 110, 185, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(39, 110, 185, 0.4)';
        }}
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
