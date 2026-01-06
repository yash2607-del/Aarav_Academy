import { useState, useEffect } from 'react';
import image1 from '../assets/aarav_1.jpeg';
import image2 from '../assets/aarav_3.jpeg';
import image3 from '../assets/aarav_4.jpeg';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollerImages = [
    { src: image1, alt: 'Aarav Academy' },
    { src: image2, alt: 'Aarav Academy' },
    { src: image3, alt: 'Aarav Academy' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollerImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [scrollerImages.length]);

  return (
    <section className="hero-section position-relative overflow-hidden" id="home" style={{ 
      paddingTop: '70px',
      background: '#000'
    }}>
      {/* Full Width Banner */}
      <div className="position-relative" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
        {scrollerImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: idx === currentIndex ? 1 : 0
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
            />
          </div>
        ))}
        
        {/* Indicator Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
            zIndex: 10
          }}
        >
          {scrollerImages.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: idx === currentIndex ? '0 0 15px rgba(255, 255, 255, 0.8)' : 'none',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-section > div {
            height: 420px !important;
          }
        }

        @media (max-width: 575px) {
          .hero-section > div {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
