import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero1 from '../assets/hero/hero_1.png';
import hero2 from '../assets/hero/hero_2.png';
import hero3 from '../assets/hero/hero_3.png';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: hero1, alt: "Aarav Academy - Excellence in Education" },
    { id: 2, image: hero2, alt: "Aarav Academy - Quality Coaching" },
    { id: 3, image: hero3, alt: "Aarav Academy - Student Success" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-scroll carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-section position-relative overflow-hidden" 
      id="home" 
      style={{ 
        paddingTop: '80px',
        width: '100%'
      }}
    >
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">
            <div style={{
              position: 'relative',
              width: '100%',
              height: '70vh',
              minHeight: '500px',
              overflow: 'hidden'
            }}>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                    pointerEvents: currentSlide === index ? 'auto' : 'none'
                  }}
                >
                  <img 
                    src={slide.image}
                    alt={slide.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.background = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        }}
      >
        <FaChevronLeft style={{ fontSize: '1.2rem', color: '#083D77' }} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.background = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        }}
      >
        <FaChevronRight style={{ fontSize: '1.2rem', color: '#083D77' }} />
      </button>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              background: currentSlide === index ? '#083D77' : 'rgba(8, 61, 119, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: currentSlide === index ? '0 2px 8px rgba(8, 61, 119, 0.4)' : 'none'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
