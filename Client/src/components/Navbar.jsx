import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo_nobg.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    setShowDropdown(false);
  };

  const linkBaseStyle = {
    cursor: 'pointer',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0.85rem',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    color: '#333',
    letterSpacing: '0.2px'
  };

  const handleEnter = (e) => {
    e.target.style.background = '#f0f7ff';
    e.target.style.color = '#2E5C8A';
  };

  const handleLeave = (e) => {
    e.target.style.background = 'transparent';
    e.target.style.color = '#333';
  };

  const navItems = [
    {label: 'Home', id: "home"},
    { label: 'Study Notes', id: 'study-notes' },
    { label: 'NCERT Solution', id: 'ncert-solution' },
    { label: 'Assignments', id: 'assignments' },
    { label: 'Sample Papers', id: 'sample-papers' },
    { label: ' Test Series', id: 'test-papers' }

  ];

  const dropdownItems = [
    { label: 'About Us', id: 'about' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'shadow' : ''}`}
      style={{
        background: 'white',
        transition: 'all 0.3s ease',
        padding: '0.75rem 0',
        borderBottom: '1px solid #e5e5e5'
      }}
    >
      <div className="container-fluid px-4">
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#home"
          style={{
            fontFamily: '"Poppins", sans-serif',
            cursor: 'pointer',
            marginRight: '2rem'
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize:'1.5rem',
              fontWeight: '700',
              color: '#2E5C8A',
              letterSpacing: '0.5px',
              lineHeight: '1.2'
            }}>
              Aarav Academy
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: '500',
              color: '#666',
              letterSpacing: '0.5px',
              lineHeight: '1.2'
            }}>
              (A unit of Aarav Student Hub)
            </span>
            <span style={{ 
              fontSize: '0.65rem', 
              fontWeight: '600',
              color: '#4A90E2',
              letterSpacing: '1.5px',
              lineHeight: '1.2'
            }}>
              VI | VII | VIII | IX | X
            </span>
          </div>
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
          <ul
            className="navbar-nav align-items-center"
            style={{ gap: '0.1rem', flexWrap: 'nowrap' }}
          >
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  onClick={() => scrollToSection(item.id)}
                  style={linkBaseStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* More Dropdown */}
            <li className="nav-item dropdown position-relative">
              <a
                className="nav-link d-flex align-items-center"
                onClick={() => setShowDropdown(!showDropdown)}
                style={linkBaseStyle}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                More
                <i className={`bi bi-chevron-${showDropdown ? 'up' : 'down'} ms-1`} style={{ fontSize: '0.8rem' }}></i>
              </a>
              
              {showDropdown && (
                <div
                  className="dropdown-menu show position-absolute"
                  style={{
                    top: '100%',
                    right: '0',
                    marginTop: '0.5rem',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    minWidth: '180px',
                    padding: '0.5rem',
                    zIndex: 1000
                  }}
                >
                  {dropdownItems.map((item) => (
                    <a
                      key={item.id}
                      className="dropdown-item"
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        padding: '0.6rem 1rem',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontFamily: '"Inter", sans-serif',
                        color: '#2E5C8A',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#E6F3FF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="ms-auto d-flex align-items-center" style={{ gap: '1rem' }}>
            {/* Call Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn d-flex align-items-center"
              style={{
                background: '#2E5C8A',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(46, 92, 138, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A90E2';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(46, 92, 138, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2E5C8A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(46, 92, 138, 0.3)';
              }}
            >
              <FaPhone style={{ marginRight: '0.5rem', fontSize: '0.9rem' }} />
              Call Now
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919540772241"
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex align-items-center"
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1fb855';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 211, 102, 0.3)';
              }}
            >
              <FaWhatsapp style={{ marginRight: '0.5rem', fontSize: '1.1rem' }} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
