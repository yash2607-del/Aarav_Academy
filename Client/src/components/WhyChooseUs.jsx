import { FaUserGraduate, FaTrophy, FaLaptop, FaUsers, FaChartLine, FaHeadset, FaClock, FaBook } from 'react-icons/fa';

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: 'Expert Faculty',
      description: 'Learn from highly qualified and experienced educators dedicated to your success and excellence.'
    },
    {
      icon: <FaTrophy />,
      title: 'Proven Results',
      description: '95% success rate with students consistently achieving top ranks in board examinations.'
    },
    {
      icon: <FaLaptop />,
      title: 'Digital Learning',
      description: 'Interactive smart board technology with digital content and engaging live classes for better understanding.'
    },
    {
      icon: <FaUsers />,
      title: 'Small Batches',
      description: 'Limited students per batch for maximum attention and better doubt resolution.'
    },
    {
      icon: <FaChartLine />,
      title: 'Progress Tracking',
      description: 'Advanced analytics and regular assessments to monitor and boost performance.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Doubt Support',
      description: 'Round-the-clock doubt clearing through dedicated mentors and online portal.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Schedule',
      description: 'Weekend and weekday batches with recorded sessions for flexible learning.'
    },
    {
      icon: <FaBook />,
      title: 'Premium Material',
      description: 'Comprehensive study materials, previous year papers, and practice tests included.'
    }
  ];

  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}>
              <i className="bi bi-star-fill me-2"></i>
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="display-3 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            What Makes Us Different
          </h2>
          <p className="lead text-muted mx-auto" style={{ 
            maxWidth: '650px',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.7'
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
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(46, 92, 138, 0.12)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  border: '2px solid #E6F3FF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(46, 92, 138, 0.2)';
                  e.currentTarget.style.borderColor = '#4A90E2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(46, 92, 138, 0.12)';
                  e.currentTarget.style.borderColor = '#E6F3FF';
                }}
              >
                {/* Top Gradient Bar */}
                <div style={{
                  height: '4px',
                  background: 'linear-gradient(90deg, #2E5C8A 0%, #4A90E2 100%)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0
                }}></div>
                
                <div className="card-body text-center p-4 position-relative" style={{ zIndex: 1 }}>
                  {/* Icon Container */}
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3 position-relative"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
                      borderRadius: '15px',
                      boxShadow: '0 8px 25px rgba(46, 92, 138, 0.25)',
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
                        color: 'white',
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
                    color: '#2E5C8A',
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '-0.01em'
                  }}>
                    {feature.title}
                  </h5>
                  
                  <p className="card-text text-muted mb-0" style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    fontFamily: '"Inter", sans-serif'
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
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transform: 'rotate(45deg)',
                    transition: 'all 0.6s ease'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5 pt-5">
          <p className="text-muted mb-4" style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.05rem' }}>Ready to start your journey to success?</p>
          <a 
            href="#contact" 
            className="btn btn-lg px-5 py-3 fw-semibold"
            style={{
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              border: 'none',
              color: 'white',
              borderRadius: '50px',
              boxShadow: '0 10px 30px rgba(46, 92, 138, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(46, 92, 138, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(46, 92, 138, 0.4)';
            }}
          >
            <i className="bi bi-rocket-takeoff-fill me-2"></i>
            JOIN AARAV ACADEMY TODAY
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
