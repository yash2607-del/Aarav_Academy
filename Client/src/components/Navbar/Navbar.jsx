import { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';
import { API_URL } from "../../config.js";
const Navbar = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${API_URL}/api/notifications`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setNotifications(data.filter(n => n.isActive));
        }
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
      }
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
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
      e.currentTarget.style.color = '#000000';
    }
  };

  const handleLeave = (e, itemId) => {
    if (currentView !== itemId) {
      e.currentTarget.style.color = '#333';
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Study Notes', id: 'study-notes' },
    { label: 'NCERT Solution', id: 'ncert-solutions' },
    { label: 'Test Series', id: 'test-series' },
    { label: 'About Us', id: 'about' }
  ];


  return (
    <>
      <style>{`
        @media (max-width: 991.98px) {
          .navbar-container-mobile {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 6px;
            padding: 0 8px;
          }
          .navbar-toggler {
            order: 1;
            margin: 0 !important;
            border: 2px solid #276eb9;
            padding: 0.3rem 0.5rem;
            flex-shrink: 0;
          }
          .navbar-brand {
            order: 2;
            margin: 0 !important;
            flex: 1;
            display: flex !important;
            align-items: center;
            min-width: 0;
            padding-right: 8px;
          }
          .navbar-brand img {
            height: 45px !important;
            margin-right: 6px !important;
            flex-shrink: 0;
          }
          .logo-text {
            display: flex !important;
            flex-direction: column;
            align-items: flex-start;
            min-width: 0;
            flex: 1;
          }
          .logo-text span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
          }
          .logo-text span:nth-child(1) {
            font-size: 1rem !important;
            line-height: 1.2 !important;
          }
          .logo-text span:nth-child(2) {
            font-size: 0.65rem !important;
            line-height: 1.1 !important;
          }
          .logo-text span:nth-child(3) {
            font-size: 0.6rem !important;
            letter-spacing: 0.3px !important;
            line-height: 1.1 !important;
          }
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
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 1000;
          }
          .navbar-toggler:focus {
            box-shadow: 0 0 0 0.2rem rgba(39, 110, 185, 0.25);
          }
          nav.navbar {
            padding: 0.5rem 0 !important;
          }
        }
        
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(220, 53, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
        }
        
        .notification-bell {
          position: relative;
          cursor: pointer;
          color: #555;
          font-size: 1.3rem;
          margin-right: 20px;
          transition: color 0.2s;
        }
        .notification-bell:hover {
          color: #276eb9;
        }
        .notification-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background-color: #dc3545;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }
        
        .notification-dropdown {
          position: absolute;
          top: 45px;
          right: -10px;
          width: 320px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          z-index: 1050;
          overflow: hidden;
          border: 1px solid #eaeaea;
          transform-origin: top right;
          animation: drop-in 0.2s ease-out forwards;
        }
        
        @keyframes drop-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
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
        transition: 'all 0.22s ease',
        padding: '0.35rem 0',
        borderBottom: '1px solid #eaeaea',
        minHeight: '64px'
      }}
    >
      <div className="container-fluid px-3">
        <div className="navbar-container-mobile d-lg-flex d-flex align-items-center justify-content-between w-100">
          <button 
            className="navbar-toggler d-lg-none" 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
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
            <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
              <span style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#276eb9',
                letterSpacing: '0.3px',
                lineHeight: '1'
              }}>
                Aarav Academy
              </span>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: '500',
                color: '#666',
                letterSpacing: '0.2px',
                lineHeight: '1'
              }}>
                (A unit of Aarav Student Hub)
              </span>
            </div>
          </a>
        
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
                    background: currentView === item.id ? '#276eb9' : 'transparent',
                    color: currentView === item.id ? 'white' : '#333',
                    boxShadow: currentView === item.id ? '0 4px 10px rgba(39, 110, 185, 0.3)' : 'none'
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
                  onNavigate('admin');
                }}
                className="btn w-100 mb-2"
                style={{
                  background: 'white',
                  color: '#276eb9',
                  border: '2px solid #276eb9',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '28px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'none',
                  letterSpacing: '0.3px'
                }}
              >
                Admin Login
              </button>
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
                  background: '#276eb9',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '28px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  fontFamily: '"Inter", sans-serif',
                  boxShadow: '0 6px 20px rgba(39, 110, 185, 0.4)',
                  textTransform: 'none',
                  letterSpacing: '0.3px'
                }}
              >
                Request a Callback
              </button>
            </li>
          </ul>

          <div className="d-none d-lg-flex align-items-center" ref={dropdownRef}>
            {/* Notification Bell */}
            <div className="notification-bell" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FaBell />
              {notifications.length > 0 && <div className="notification-badge"></div>}
              
              {isDropdownOpen && (
                <div className="notification-dropdown">
                  <div style={{ padding: '15px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #eaeaea', fontWeight: 'bold', color: '#333' }}>
                    Notifications
                  </div>
                  <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                    {notifications.length === 0 ? (
                      <div style={{ padding: '30px 20px', textAlign: 'center', color: '#888' }}>
                        No new notifications
                      </div>
                    ) : (
                      notifications.map(notif => (
                        <div key={notif._id} style={{ padding: '15px 20px', borderBottom: '1px solid #f5f5f5' }}>
                          <h6 style={{ margin: '0 0 5px 0', fontSize: '0.95rem', fontWeight: 'bold', color: '#276eb9' }}>{notif.title}</h6>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>{notif.message}</p>
                          <small style={{ display: 'block', marginTop: '8px', fontSize: '0.75rem', color: '#aaa' }}>
                            {new Date(notif.createdAt).toLocaleDateString()}
                          </small>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Admin Login Button - Desktop Only */}
            <button
              onClick={() => {
                onNavigate('admin');
              }}
              className="me-3"
              style={{
                background: 'white',
                color: '#276eb9',
                border: '2px solid #276eb9',
                padding: '0.45rem 1.2rem',
                borderRadius: '28px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                fontFamily: '"Inter", sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f4f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              Admin Login
            </button>

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
              background: '#276eb9',
              color: 'white',
              border: 'none',
              padding: '0.5rem 0.95rem',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 6px 14px rgba(39, 110, 185, 0.32)',
              marginBottom: '0',
              textTransform: 'none',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1f5f9f';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(39, 110, 185, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#276eb9';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(39, 110, 185, 0.4)';
            }}
          >
            Request a Callback
            </button>
          </div>
        </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
