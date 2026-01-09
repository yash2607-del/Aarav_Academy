import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';




function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Excellence in Education",
      subtitle: "Transform Your Future",
      description: "Empowering students from Classes 6th to 12th with quality coaching and personalized attention",
      buttonText: "Get Started",
      backgroundColor: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
      image: "https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Slide+1" // Replace with your image
    },
    
    {
      id: 3,
      title: "Proven Results",
      subtitle: "95% Success Rate",
      description: "Join thousands of successful students who have achieved their dreams with Aarav Academy",
      buttonText: "View Results",
      backgroundColor: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
      image: "hero" // Replace with your image
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-section position-relative overflow-hidden" 
      id="home" 
      style={{ 
        background: slides[currentSlide].backgroundColor,
        minHeight: '500px',
        paddingTop: '0px',
        paddingBottom: '0px',
        transition: 'background 0.6s ease'
      }}
    >
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center" style={{ minHeight: '500px' }}>
          {/* Left Content */}
          <div className="col-lg-6 px-5 text-white">
            <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h1 
                className="fw-bold mb-3" 
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontFamily: '"Poppins", sans-serif',
                  lineHeight: '1.2',
                  animation: 'slideInLeft 0.6s ease'
                }}
              >
                {slides[currentSlide].title}
              </h1>
              <p 
                className="mb-4" 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: '1.6',
                  animation: 'slideInLeft 0.8s ease'
                }}
              >
                {slides[currentSlide].description}
              </p>
              <button 
                className="btn btn-lg"
                style={{
                  background: 'white',
                  color: '#333',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem 2.5rem',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  animation: 'slideInLeft 1s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 position-relative">
            <div style={{
              position: 'relative',
              height: '500px',
              overflow: 'hidden'
            }}>
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'fadeIn 0.6s ease'
                }}
              />
              {/* Decorative diagonal overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}></div>
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
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <FaChevronLeft style={{ fontSize: '1.2rem', color: '#333' }} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <FaChevronRight style={{ fontSize: '1.2rem', color: '#333' }} />
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
              background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
