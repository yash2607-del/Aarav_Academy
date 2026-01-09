import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const footer = document.querySelector('footer');
      
      if (heroSection && footer) {
        const heroTop = heroSection.offsetTop;
        const footerTop = footer.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show when scrolled past hero section and before footer
        if (window.scrollY >= heroTop && scrollPosition <= footerTop + 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {/* Phone Button */}
      <a
        href="tel:+919540772241"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#083D77',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(8, 61, 119, 0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(8, 61, 119, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(8, 61, 119, 0.4)';
        }}
      >
        <FaPhone style={{ transform: 'rotate(0deg)' }} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919540772241"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;
