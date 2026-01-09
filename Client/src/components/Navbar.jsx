import { useState, useEffect } from 'react';
import logo from '../assets/logo_nobg.png';

const Navbar = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // First scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
    
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

  const handleEnter = (e, itemId) => {
    if (currentView !== itemId) {
      e.target.style.color = '#000000';
    }
  };

  const handleLeave = (e, itemId) => {
    if (currentView !== itemId) {
      e.target.style.color = '#333';
    }
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
    <>
      <style>{`
        @media (max-width: 991.98px) {
          .navbar-nav {
            text-align: center;
            padding: 1rem 0;
          }
          .navbar-nav .nav-link {
            display: block;
            padding: 0.75rem 1rem !important;
            margin: 0.25rem 0;
          }
          .navbar-collapse {
            background: white;
            margin-top: 1rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            padding: 1rem;
          }
          .navbar-brand img {
            height: 70px !important;
            margin-right: 15px !important;
          }
          .logo-text span:nth-child(1) {
            font-size: 1.5rem !important;
          }
          .logo-text span:nth-child(2) {
            font-size: 1rem !important;
          }
          .logo-text span:nth-child(3) {
            font-size: 0.95rem !important;
            letter-spacing: 1px !important;
          }
          .navbar-toggler {
            border: 2px solid #083D77;
            padding: 0.5rem 0.75rem;
          }
          .navbar-toggler:focus {
            box-shadow: 0 0 0 0.2rem rgba(8, 61, 119, 0.25);
          }
        }
        @media (min-width: 992px) {
          .logo-text {
            display: flex !important;
          }
        }
      `}</style>
      <nav 
      className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'shadow' : ''}`}
      style={{
        background: 'white',
        transition: 'all 0.3s ease',
        padding: '0.75rem 0',
        borderBottom: '1px solid #e5e5e5'
      }}
    >
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
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
              height: '80px', 
              width: 'auto', 
              marginRight: '20px',
              objectFit: 'contain'
            }} 
          />
          <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{
              fontSize:'1.8rem',
              fontWeight: '700',
              color: '#083D77',
              letterSpacing: '0.5px',
              lineHeight: '1.2'
            }}>
              Aarav Academy
            </span>
            <span style={{ 
              fontSize: '1.05rem', 
              fontWeight: '500',
              color: '#666',
              letterSpacing: '0.5px',
              lineHeight: '1.3'
            }}>
              (A unit of Aarav Student Hub)
            </span>
            <span style={{ 
              fontSize: '1rem', 
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
          className="navbar-toggler ms-auto" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul
            className="navbar-nav mx-auto align-items-lg-center"
            style={{ gap: '0.5rem' }}
          >
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (typeof onNavigate === 'function') {
                      setTimeout(() => {
                        onNavigate(item.id);
                      }, 300);
                    }
                  }}
                  style={{
                    ...linkBaseStyle,
                    background: currentView === item.id ? '#083D77' : 'transparent',
                    color: currentView === item.id ? 'white' : '#333',
                    boxShadow: currentView === item.id ? '0 4px 10px rgba(8, 61, 119, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => handleEnter(e, item.id)}
                  onMouseLeave={(e) => handleLeave(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* More Dropdown */}
            
            {/* Request Callback Button - Inside Menu for Mobile */}
            <li className="nav-item d-lg-none mt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentView !== 'home') {
                    onNavigate('home');
                    setTimeout(() => {
                      scrollToSection('contact');
                    }, 500);
                  } else {
                    scrollToSection('contact');
                  }
                }}
                className="btn w-100"
                style={{
                  background: '#083D77',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  fontFamily: '"Inter", sans-serif',
                  boxShadow: '0 6px 20px rgba(8, 61, 119, 0.4)',
                  textTransform: 'none',
                  letterSpacing: '0.3px'
                }}
              >
                Request a Callback
              </button>
            </li>
          </ul>

          {/* Request Callback Button - Desktop Only */}
          <button
            onClick={() => {
              if (currentView !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                  scrollToSection('contact');
                }, 500);
              } else {
                scrollToSection('contact');
              }
            }}
            className="mt-2 mt-lg-0 mx-auto mx-lg-0 d-none d-lg-block"
            style={{
              background: '#083D77',
              color: 'white',
              border: 'none',
              padding: '0.8rem 0.8rem',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 6px 20px rgba(8, 61, 119, 0.4)',
              marginBottom: '1rem',
              textTransform: 'none',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0a4d94';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 61, 119, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#083D77';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(8, 61, 119, 0.4)';
            }}
          >
            Request a Callback
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
