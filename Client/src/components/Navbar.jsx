import { useState, useEffect } from 'react';
import logo from '../assets/logo_nobg.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)' 
          : 'rgba(46, 92, 138, 0.95)',
        transition: 'all 0.4s ease',
        backdropFilter: 'blur(10px)',
        padding: scrolled ? '0.5rem 0' : '1rem 0'
      }}
    >
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#home"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '1.6rem',
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}
        >
          <img 
            src={logo} 
            alt="Aarav Academy Logo" 
            style={{
              height: '45px',
              width: 'auto',
              marginRight: '12px'
            }} 
          />
          <span>Aarav Academy</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center" style={{ gap: '2rem' }}>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('home')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('programs')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('team')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('gallery')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('trailblazers')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                onClick={() => scrollToSection('contact')} 
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
