import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo_nobg.png';

const Navbar = ({ onNavigate }) => {
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
    e.target.style.background = '#083D77';
    e.target.style.color = 'white';
  };

  const handleLeave = (e) => {
    e.target.style.background = 'transparent';
    e.target.style.color = '#333';
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Study Notes', id: 'study-notes' },
    { label: 'NCERT Solution', id: 'ncert-solutions' },
    { label: 'Assignments', id: 'assignments' },
    { label: 'Sample Papers', id: 'sample-papers' },
    { label: ' Test Series', id: 'test-series' }

  ];

  const dropdownItems = [
    
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
          <img 
            src={logo} 
            alt="Aarav Academy Logo" 
            style={{ 
              height: '65px', 
              width: 'auto', 
              marginRight: '15px',
              objectFit: 'contain'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{
              fontSize:'1.5rem',
              fontWeight: '700',
              color: '#083D77',
              letterSpacing: '0.5px',
              lineHeight: '1.2'
            }}>
              Aarav Academy
            </span>
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: '500',
              color: '#666',
              letterSpacing: '0.5px',
              lineHeight: '1.3'
            }}>
              (A unit of Aarav Student Hub)
            </span>
            <span style={{ 
              fontSize: '0.8rem', 
              fontWeight: '600',
              color: '#083D77',
              letterSpacing: '1.5px',
              lineHeight: '1.3'
            }}>
              VI | VII | VIII | IX | X | XI | XII 
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
            className="navbar-nav mx-auto align-items-center"
            style={{ gap: '0.1rem', flexWrap: 'nowrap' }}
          >
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  onClick={() => {
                    if (typeof onNavigate === 'function') {
                      onNavigate(item.id);
                    }
                  }}
                  style={linkBaseStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* More Dropdown */}
           
          </ul>

          {/* Request Callback Button */}
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              background: '#083D77',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 4px 12px rgba(8, 61, 119, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0a4d94';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(8, 61, 119, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#083D77';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 61, 119, 0.3)';
            }}
          >
            Request a Callback
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
