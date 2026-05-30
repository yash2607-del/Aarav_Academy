import React, { useEffect, useRef } from 'react';
import { FaUserGraduate, FaTrophy, FaUsers, FaChartLine, FaClock, FaBook, FaShieldAlt, FaComments } from 'react-icons/fa';
import aboutUs from '../../assets/hero/about_us.png';

function WhyChooseUs({ onNavigate }) {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaBook />,
      title: 'Comprehensive Coaching',
      description: 'Structured coaching for students from Classes 1st to 12th, ensuring complete academic support under one roof.'
    },
    {
      icon: <FaUserGraduate />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers focused on conceptual clarity and overall student development.'
    },
    {
      icon: <FaUsers />,
      title: 'Small Batch Sizes',
      description: 'Limited students in each batch to ensure personalized attention and proper guidance for every learner.'
    },
    {
      icon: <FaChartLine />,
      title: 'Regular Assessments',
      description: 'Frequent tests, mock exams, and performance evaluations to track progress and strengthen exam readiness.'
    },
    {
      icon: <FaBook />,
      title: 'Doubt & Revision Support',
      description: 'Dedicated doubt-clearing and revision sessions to reinforce learning and remove confusion in key concepts.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Timings',
      description: 'Morning and evening batch timings designed to suit different school schedules and student needs.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe Environment',
      description: 'A disciplined, student-friendly, and safe learning atmosphere that promotes focus and positive growth.'
    },
    {
      icon: <FaComments />,
      title: 'Continuous Feedback',
      description: 'Regular communication and performance updates shared with students and parents for consistent improvement and confidence building.'
    }
  ];

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="py-5" style={{ 
      background: 'white',
      position: 'relative'
    }}>
      <div className="container py-4">
        <style>{`
          .feature-card-reveal {
            opacity: 0;
            transform: translateY(34px) scale(0.96) rotateX(8deg);
            filter: blur(6px);
            transition:
              opacity 700ms ease,
              transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 700ms ease,
              box-shadow 250ms ease,
              border-color 250ms ease;
            transform-origin: center bottom;
            will-change: opacity, transform, filter;
          }

          .feature-card-reveal.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }

          .feature-card-reveal:hover {
            animation: featureCardFloat 1.1s ease-in-out infinite;
          }

          .feature-card-shine {
            opacity: 0;
            transition: opacity 250ms ease;
          }

          .feature-card-reveal:hover .feature-card-shine {
            opacity: 1;
            animation: featureShineSweep 1.3s ease forwards;
          }

          @keyframes featureCardFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.01); }
          }

          @keyframes featureShineSweep {
            0% { transform: translateX(-40%) rotate(45deg); }
            100% { transform: translateX(40%) rotate(45deg); }
          }

          @media (prefers-reduced-motion: reduce) {
            .feature-card-reveal,
            .feature-card-reveal.is-visible,
            .feature-card-reveal:hover,
            .feature-card-reveal:hover .feature-card-shine {
              opacity: 1;
              transform: none;
              filter: none;
              animation: none;
              transition: none;
            }
          }
        `}</style>
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold mb-4" style={{
            color: '#276eb9',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            What Makes Us Different
          </h1>
          <p className="lead mx-auto" style={{ 
            maxWidth: '650px',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            fontSize: '1.40rem',
            fontWeight: '100px',
            lineHeight: '1.7',
            color: '#276eb9'
          }}>
            Experience excellence in education with our unique approach and commitment to student success
          </p>
        </div>
        
        <div className="row g-4 mt-2">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                ref={(node) => { cardRefs.current[index] = node; }}
                className="card h-100 border-0 position-relative overflow-hidden feature-card-reveal"
                style={{
                  background: '#276eb9',
                  borderRadius: '0',
                  boxShadow: '0 10px 40px rgba(8, 61, 119, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  border: '2px solid rgba(8, 61, 119, 0.5)',
                  transitionDelay: `${index * 90}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(8, 61, 119, 0.5)';
                  e.currentTarget.style.borderColor = '#EBEBD3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(8, 61, 119, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(8, 61, 119, 0.5)';
                }}
              >
                <div className="card-body text-center p-4 position-relative" style={{ zIndex: 1 }}>
                  {/* Icon Container */}
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3 position-relative"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'white',
                      borderRadius: '15px',
                      boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '1.6rem',
                        color: '#276eb9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h5 className="card-title fw-bold mb-3" style={{
                    fontSize: '1.25rem',
                    color: 'white',
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '-0.01em'
                  }}>
                    {feature.title}
                  </h5>
                  
                  <p className="card-text mb-0" style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    fontFamily: '"Inter", sans-serif',
                    color: 'white',
                    opacity: '0.9'
                  }}>
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div 
                  className="feature-card-shine position-absolute"
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'rotate(45deg)',
                    transition: 'all 0.6s ease'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}

export default WhyChooseUs;
