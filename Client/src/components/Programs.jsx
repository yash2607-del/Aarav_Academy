import { useState } from 'react';
import { FaBook, FaFlask, FaMicroscope, FaTrophy, FaCheckCircle, FaRupeeSign, FaClock, FaCalendar, FaUsers } from 'react-icons/fa';

const Programs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Junior Classes",
      subtitle: "Class VI - VIII",
      icon: <FaBook />,
      description: "Building strong fundamentals for young minds with comprehensive coverage of all subjects and focus on conceptual clarity.",
      features: [
        "Interactive learning methods",
        "Regular assessments & feedback",
        "Personalized attention",
        "Complete study material"
      ],
      fee: "₹1,500/month",
      batchTime: "4:00 PM - 6:00 PM",
      duration: "2 hours/day",
      batchSize: "15-20 students",
      schedule: "Mon to Sat"
    },
    {
      id: 2,
      title: "Academic Classes",
      subtitle: "Class IX, X, XI, XII",
      icon: <FaFlask />,
      description: "Complete CBSE curriculum coverage with expert faculty. Focused preparation for board examinations with proven results.",
      features: [
        "Board exam oriented teaching",
        "Practice tests & mock exams",
        "Doubt clearing sessions",
        "Complete study packages"
      ],
      fee: "₹2,000/month",
      batchTime: "6:00 PM - 9:00 PM",
      duration: "3 hours/day",
      batchSize: "12-15 students",
      schedule: "Mon to Sat"
    },
    {
      id: 3,
      title: "IIT Foundation",
      subtitle: "Competitive Exam Prep",
      icon: <FaMicroscope />,
      description: "Structured foundation program for students aspiring to crack IIT-JEE. Early preparation for competitive excellence.",
      features: [
        "Concept-based learning",
        "Advanced problem-solving",
        "Regular practice tests",
        "Performance analysis"
      ],
      fee: "₹5,000/month",
      batchTime: "5:00 PM - 8:00 PM",
      duration: "3 hours/day",
      batchSize: "10-12 students",
      schedule: "All 7 days"
    },
    {
      id: 4,
      title: "Aarav Child School",
      subtitle: "Nursery to Class V",
      icon: <FaTrophy />,
      description: "Nurturing young minds with a strong foundation in academics and holistic development for early learners.",
      features: [
        "Play-based learning methods",
        "Activity-based curriculum",
        "Creative & arts development",
        "Value-based education"
      ],
      fee: "₹1,800/month",
      batchTime: "9:00 AM - 3:00 PM",
      duration: "Full Day Program",
      batchSize: "20-25 students",
      schedule: "Mon to Fri"
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-5" id="programs" style={{
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)'
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
              <i className="bi bi-book-fill me-2"></i>
              OUR PROGRAMS
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
            Choose Your Path to Success
          </h2>
          <p className="lead text-muted mx-auto" style={{ 
            maxWidth: '700px',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.7'
          }}>
            Comprehensive educational programs designed to nurture academic excellence and competitive success
          </p>
        </div>
        
        <div className="row g-4">
          {programs.map((program) => (
            <div key={program.id} className="col-lg-6" style={{ display: 'flex' }}>
              <div 
                className="card border-0 position-relative overflow-hidden"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(46, 92, 138, 0.12)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  background: 'white',
                  border: '2px solid #E6F3FF',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  height: '5px',
                  background: 'linear-gradient(90deg, #2E5C8A 0%, #4A90E2 100%)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0
                }}></div>

                <div className="card-body p-4">
                  {/* Icon */}
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '65px',
                      height: '65px',
                      background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
                      borderRadius: '15px',
                      boxShadow: '0 8px 25px rgba(46, 92, 138, 0.3)',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}>
                      {program.icon}
                    </div>
                  </div>

                  <h3 className="fw-bold mb-2" style={{
                    fontSize: '1.6rem',
                    color: '#2E5C8A',
                    fontFamily: '"Poppins", sans-serif'
                  }}>
                    {program.title}
                  </h3>
                  <p className="fw-semibold mb-3" style={{
                    fontSize: '1.1rem',
                    color: '#4A90E2'
                  }}>
                    {program.subtitle}
                  </p>
                  <p className="text-muted mb-4" style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    {program.features.map((feature, index) => (
                      <div key={index} className="d-flex align-items-start mb-2">
                        <FaCheckCircle className="mt-1 me-2 text-primary" style={{
                          fontSize: '1rem',
                          color: '#4A90E2'
                        }} />
                        <span style={{ fontSize: '0.9rem', color: '#4a5568' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  {expandedCard === program.id && (
                    <div 
                      className="mt-4 pt-4"
                      style={{
                        animation: 'slideDown 0.3s ease-out',
                        borderTop: '2px solid #E6F3FF'
                      }}
                    >
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ 
                            background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                            border: '1px solid #E6F3FF'
                          }}>
                            <div className="d-flex align-items-center mb-2">
                              <FaRupeeSign style={{ color: '#4A90E2', fontSize: '1.2rem' }} className="me-2" />
                              <small className="text-muted fw-semibold">Fee Structure</small>
                            </div>
                            <p className="mb-0 fw-bold" style={{ color: '#2E5C8A' }}>{program.fee}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ 
                            background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                            border: '1px solid #E6F3FF'
                          }}>
                            <div className="d-flex align-items-center mb-2">
                              <FaClock style={{ color: '#4A90E2', fontSize: '1.2rem' }} className="me-2" />
                              <small className="text-muted fw-semibold">Batch Time</small>
                            </div>
                            <p className="mb-0 fw-bold" style={{ color: '#2E5C8A', fontSize: '0.85rem' }}>{program.batchTime}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ 
                            background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                            border: '1px solid #E6F3FF'
                          }}>
                            <div className="d-flex align-items-center mb-2">
                              <FaCalendar style={{ color: '#4A90E2', fontSize: '1.2rem' }} className="me-2" />
                              <small className="text-muted fw-semibold">Schedule</small>
                            </div>
                            <p className="mb-0 fw-bold" style={{ color: '#2E5C8A' }}>{program.schedule}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ 
                            background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                            border: '1px solid #E6F3FF'
                          }}>
                            <div className="d-flex align-items-center mb-2">
                              <FaUsers style={{ color: '#4A90E2', fontSize: '1.2rem' }} className="me-2" />
                              <small className="text-muted fw-semibold">Batch Size</small>
                            </div>
                            <p className="mb-0 fw-bold" style={{ color: '#2E5C8A', fontSize: '0.85rem' }}>{program.batchSize}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View More Button */}
                  <button
                    onClick={() => toggleCard(program.id)}
                    className={`btn w-100 mt-3 fw-semibold ${expandedCard === program.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    style={{
                      borderRadius: '50px',
                      padding: '12px 24px',
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      background: expandedCard === program.id ? 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)' : 'transparent',
                      border: expandedCard === program.id ? 'none' : '2px solid #4A90E2',
                      color: expandedCard === program.id ? 'white' : '#2E5C8A',
                      boxShadow: expandedCard === program.id ? '0 4px 15px rgba(46, 92, 138, 0.3)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {expandedCard === program.id ? (
                      <>
                        <i className="bi bi-chevron-up me-2"></i>
                        SHOW LESS
                      </>
                    ) : (
                      <>
                        <i className="bi bi-info-circle me-2"></i>
                        VIEW DETAILS
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Programs;
