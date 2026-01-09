import { FaUserGraduate, FaTrophy, FaUsers, FaChartLine, FaClock, FaBook, FaShieldAlt, FaComments } from 'react-icons/fa';
import aboutUs from '../assets/hero/about_us.png';

function WhyChooseUs({ onNavigate }) {
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

  return (
    <section className="py-5" style={{ 
      background: 'white',
      position: 'relative'
    }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
          
          </div>
          <h2 className="display-3 fw-bold mb-4" style={{
            color: '#083D77',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            What Makes Us Different
          </h2>
          <p className="lead mx-auto" style={{ 
            maxWidth: '650px',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.7',
            color: '#083D77'
          }}>
            Experience excellence in education with our unique approach and commitment to student success
          </p>
        </div>
        
        <div className="row g-4 mt-2">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: '#083D77',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(8, 61, 119, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  border: '2px solid rgba(8, 61, 119, 0.5)'
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
                        color: '#083D77',
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
                  className="position-absolute"
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

        {/* Bottom CTA Banner */}
        <div 
          className="mt-5 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #2a5f7e 0%, #2E5C8A 100%)',
            borderRadius: '0',
            minHeight: '400px',
            boxShadow: '0 10px 40px rgba(46, 92, 138, 0.2)',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            left: '50%',
            right: '50%',
            width: '100vw',
            position: 'relative'
          }}
        >
          <div className="container-fluid px-0">
            <div className="row align-items-center g-0" style={{ minHeight: '400px' }}>
              {/* Left - Student Image */}
              <div className="col-lg-3 d-none d-lg-block" style={{ height: '400px', overflow: 'hidden' }}>
                <img 
                  src={aboutUs} 
                  alt="Student"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>

              {/* Center - Heading */}
              <div className="col-lg-6 text-center py-5 px-5">
                <h2 
                  className="fw-bold mb-0"
                  style={{
                    color: 'white',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  Unlock Your Potential with Aarav Academy!
                </h2>
              </div>

              {/* Right - Button */}
              <div className="col-lg-3 text-center text-lg-center py-5 px-5">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (typeof onNavigate === 'function') {
                      setTimeout(() => {
                        onNavigate('study-notes');
                      }, 300);
                    }
                  }}
                  className="btn btn-lg px-5 py-4 fw-semibold"
                  style={{
                    background: '#083D77',
                    border: 'none',
                    color: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 6px 20px rgba(8, 61, 119, 0.5)',
                    transition: 'all 0.3s ease',
                    fontSize: '1.25rem',
                    fontFamily: '"Inter", sans-serif',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 61, 119, 0.7)';
                    e.currentTarget.style.background = '#0a4d94';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(8, 61, 119, 0.5)';
                    e.currentTarget.style.background = '#083D77';
                  }}
                >
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
