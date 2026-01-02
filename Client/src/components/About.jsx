import { FaBook, FaUsers, FaChartLine, FaTrophy, FaGraduationCap, FaHeart, FaLightbulb, FaGlobe } from 'react-icons/fa';

function About() {
  return (
    <section className="py-5" id="about" style={{ 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)'
    }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}>
              <i className="bi bi-building me-2"></i>
              ABOUT US
            </span>
          </div>
          <h2 className="display-4 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            About Aarav Academy
          </h2>
        </div>

        {/* About Content */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="p-4 p-lg-5" style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(46, 92, 138, 0.12)',
              border: '2px solid #E6F3FF'
            }}>
              <p className="mb-4" style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: '#2c3e50',
                fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                fontWeight: '500'
              }}>
                Aarav Academy is a well-established and trusted educational institute dedicated to providing high-quality academic coaching for <strong style={{ color: '#2E5C8A' }}>students from Classes 1st to 12th across all subjects</strong>.
              </p>
              <p className="mb-4" style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#4a5568',
                fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
              }}>
                We believe that strong fundamentals built at an early stage play a vital role in shaping a student's future. Our academy focuses on nurturing young minds through structured learning, personalized attention, and a disciplined yet encouraging environment.
              </p>
              <p className="mb-4" style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#4a5568',
                fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
              }}>
                At Aarav Academy, we understand that every student has a unique learning style and pace. Our experienced faculty members adopt interactive and student-friendly teaching methodologies that emphasize conceptual clarity rather than rote learning. Regular assessments, doubt-clearing sessions, revision classes, and performance tracking help students gain confidence and improve consistently.
              </p>
              <p className="mb-0" style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#4a5568',
                fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
              }}>
                We aim not only to help students score well in school and board examinations but also to develop critical thinking, problem-solving skills, and self-discipline. With years of experience and a strong record of academic improvement, Aarav Academy has earned the trust of parents and students alike. Our commitment to quality education and measurable results makes us a reliable partner in every student's academic journey.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="row justify-content-center g-4">
          {/* Mission Card */}
          <div className="col-lg-10">
            <div 
              className="position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #2E5C8A 0%, #1a3a5a 100%)',
                borderRadius: '25px',
                boxShadow: '0 15px 50px rgba(46, 92, 138, 0.25)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(46, 92, 138, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(46, 92, 138, 0.25)';
              }}
            >
              {/* Decorative Background Pattern */}
              <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, opacity: 0.1 }}>
                <div className="position-absolute" style={{ 
                  width: '100%', 
                  height: '100%',
                  backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 60px 60px, rgba(255,255,255,0.3) 2%, transparent 0%)',
                  backgroundSize: '80px 80px'
                }}></div>
              </div>

              <div className="row align-items-center p-4 p-lg-5 position-relative">
                <div className="col-lg-12">
                  <h3 className="fw-bold mb-4" style={{ 
                    color: 'white',
                    fontSize: '2.2rem',
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '-0.01em',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}>
                    <i className="bi bi-rocket-takeoff-fill me-3"></i>
                    Our Mission
                  </h3>
                  <p className="mb-4" style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.9',
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.15)'
                  }}>
                    Our mission at Aarav Academy is to provide quality education that empowers students with strong academic foundations, clarity of concepts, and confidence to excel.
                  </p>
                  
                  {/* Mission Icons */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaBook style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Student-Centric Learning</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Ethical teaching practices that encourage curiosity and discipline
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaUsers style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Personalized Guidance</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Individual attention at every stage of academic journey
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaChartLine style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Continuous Evaluation</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Regular mentoring and academic assessment for growth
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaTrophy style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Unlock True Potential</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Dedication and innovation for sustainable success
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-10">
            <div 
              className="position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #2E5C8A 100%)',
                borderRadius: '25px',
                boxShadow: '0 15px 50px rgba(74, 144, 226, 0.25)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(74, 144, 226, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(74, 144, 226, 0.25)';
              }}
            >
              {/* Decorative Background Pattern */}
              <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, opacity: 0.1 }}>
                <div className="position-absolute" style={{ 
                  width: '100%', 
                  height: '100%',
                  backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 60px 60px, rgba(255,255,255,0.3) 2%, transparent 0%)',
                  backgroundSize: '80px 80px'
                }}></div>
              </div>

              <div className="row align-items-center p-4 p-lg-5 position-relative">
                <div className="col-lg-12">
                  <h3 className="fw-bold mb-4" style={{ 
                    color: 'white',
                    fontSize: '2.2rem',
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '-0.01em',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}>
                    <i className="bi bi-star-fill me-3"></i>
                    Our Vision
                  </h3>
                  <p className="mb-4" style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.9',
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.15)'
                  }}>
                    Our vision is to become a leading and trusted educational institution known for academic excellence, integrity, and proven results.
                  </p>
                  
                  {/* Vision Icons */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaGraduationCap style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Academic Excellence</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Leading institution with proven results and integrity
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaHeart style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Supportive Ecosystem</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Motivating environment building student confidence
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaLightbulb style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Innovative Methods</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Continuously upgrading teaching methodologies
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{
                          minWidth: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                          <FaGlobe style={{ fontSize: '1.4rem', color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: 'white', fontSize: '1rem' }}>Future Ready</h6>
                          <p className="mb-0" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5' }}>
                            Preparing confident individuals for tomorrow's challenges
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.7;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default About;
