import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Which classes does Aarav Academy cover?',
      answer: 'Aarav Academy provides coaching for students from Classes 1st to 12th.'
    },
    {
      question: 'Do you offer coaching for all subjects?',
      answer: 'Yes, we provide coaching for all subjects as per the school curriculum.'
    },
    {
      question: 'How experienced are the faculty members?',
      answer: 'Our faculty consists of experienced and qualified teachers who focus on conceptual clarity and student development.'
    },
    {
      question: 'Are there flexible batch timings available?',
      answer: 'Yes, we offer both morning and evening batches to suit students’ schedules.'
    },
    {
      question: 'How does Aarav Academy ensure good academic results?',
      answer: 'We ensure results through structured teaching, regular assessments, revision sessions, personalized attention, and continuous performance monitoring.'
    },
    {
      question: 'Do you provide individual attention to students?',
      answer: 'Yes, we maintain small batch sizes to ensure every student receives proper guidance and support.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      className="py-5" 
      id="faq" 
      style={{ 
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        filter: 'blur(100px)'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <h2 
            className="fw-bold mb-3" 
            style={{
              color: 'white',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="mb-0" 
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
            }}
          >
            Find quick answers about Aarav Academy
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item"
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: activeIndex === index ? '2px solid #1e3a5f' : '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (activeIndex !== index) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  <button
                    className="w-100 text-start p-4 border-0 bg-transparent d-flex align-items-center justify-content-between"
                    onClick={() => toggleAccordion(index)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span 
                      style={{
                        color: '#1e3a5f',
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        fontWeight: '600',
                        fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
                        paddingRight: '20px',
                        flex: 1
                      }}
                    >
                      {faq.question}
                    </span>
                    <span 
                      style={{
                        fontSize: '1.5rem',
                        color: '#1e3a5f',
                        fontWeight: 'bold',
                        transition: 'transform 0.3s ease',
                        transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                        minWidth: '24px',
                        textAlign: 'center'
                      }}
                    >
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: activeIndex === index ? '500px' : '0',
                      opacity: activeIndex === index ? '1' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      paddingLeft: activeIndex === index ? '24px' : '24px',
                      paddingRight: activeIndex === index ? '24px' : '24px',
                      paddingBottom: activeIndex === index ? '24px' : '0'
                    }}
                  >
                    <div 
                      style={{
                        borderTop: '1px solid #e0e0e0',
                        paddingTop: '16px'
                      }}
                    >
                      <p 
                        style={{
                          color: '#555',
                          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                          lineHeight: '1.7',
                          margin: 0,
                          fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
