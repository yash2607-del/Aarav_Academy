import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Trailblazers = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const achievers = [
    {
      id: 1,
      name: "Aayushi",
      achievement: "CBSE 12th - 97%",
      percentage: 97,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Outstanding teaching methodology and regular practice tests helped me score exceptionally."
    },
    {
      id: 2,
      name: "Sambhavi",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "The personalized attention and excellent study material helped me achieve top marks."
    },
    {
      id: 3,
      name: "Nandani",
      achievement: "CBSE 12th - 97%",
      percentage: 97,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Aarav Academy's dedicated faculty and comprehensive curriculum helped me excel."
    },
    {
      id: 4,
      name: "Laxmi",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "The structured approach and regular assessments built my strong foundation for success."
    },
    {
      id: 5,
      name: "Amnish",
      achievement: "CBSE 12th - 97%",
      percentage: 97,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Expert faculty and regular mock tests prepared me well for examinations."
    },
    {
      id: 6,
      name: "Arun",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "The interactive teaching methods helped me achieve excellent results."
    },
    {
      id: 7,
      name: "Siya",
      achievement: "CBSE 12th - 96%",
      percentage: 96,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "The supportive environment and excellent teaching helped me build strong foundation."
    },
    {
      id: 8,
      name: "Dishtant",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "The comprehensive study material was instrumental in my board exam success."
    },
    {
      id: 9,
      name: "Vikas",
      achievement: "CBSE 12th - 97%",
      percentage: 97,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Outstanding guidance and support from faculty helped me achieve my goals."
    },
    {
      id: 10,
      name: "Tanya",
      achievement: "CBSE 12th - 97%",
      percentage: 97,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Regular assessments and doubt sessions were key to my success."
    },
    {
      id: 11,
      name: "Garima",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "The structured teaching approach helped me excel in my board exams."
    },
    {
      id: 12,
      name: "Aditya",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "Excellent faculty and comprehensive study material ensured my success."
    },
    {
      id: 13,
      name: "Simran",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "The personalized attention helped me achieve excellent results."
    },
    {
      id: 14,
      name: "Karishma",
      achievement: "CBSE 12th - 96%",
      percentage: 96,
      year: "2025",
      class: "12",
      image: null,
      testimonial: "Interactive teaching methods made learning enjoyable and effective."
    },
    {
      id: 15,
      name: "Rajat",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "Regular mock tests and practice sessions helped me score well."
    },
    {
      id: 16,
      name: "Aryan",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: null,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
    }
  ];

  const filters = ['ALL', 'Class 10', 'Class 12'];

  const filteredAchievers = (activeFilter === 'ALL' 
    ? achievers.sort((a, b) => {
        // Sort by class first (10 before 12)
        if (a.class !== b.class) {
          return parseInt(a.class) - parseInt(b.class);
        }
        // Then by percentage (highest first)
        return b.percentage - a.percentage;
      })
    : achievers.filter(achiever => achiever.class === activeFilter.split(' ')[1])
        .sort((a, b) => b.percentage - a.percentage)
  );

  return (
    <section className="py-5" id="trailblazers" style={{ background: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div className="mb-5 text-center">
          <div 
            className="d-inline-block px-4 py-2 rounded-pill mb-3"
            style={{
              background: '#083D77',
              boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)'
            }}
          >
            <span style={{ color: 'white', fontWeight: '600', fontSize: '1.5rem', letterSpacing: '1px' }}>
             MEET OUR ACHIEVERS
            </span>
          </div>
          <p className="lead text-center " style={{ color: '#2811bdff', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
            Celebrating the success stories of our brilliant students who have made us proud
          </p>

          {/* Filter Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.6rem 1.8rem',
                  borderRadius: '30px',
                  border: `2px solid ${activeFilter === filter ? '#083D77' : '#ddd'}`,
                  background: activeFilter === filter ? '#083D77' : 'white',
                  color: activeFilter === filter ? 'white' : '#666',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                  boxShadow: activeFilter === filter ? '0 4px 12px rgba(8, 61, 119, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.borderColor = '#083D77';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.borderColor = '#ddd';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Horizontal Scrolling Carousel */}
        <div style={{ 
          position: 'relative',
          width: '100%',
          overflow: 'hidden'
        }}>
          <div 
            style={{
              display: 'flex',
              gap: '1.5rem',
              animation: `scroll ${filteredAchievers.length * 8}s linear infinite`,
              width: 'max-content'
            }}
          >
            {/* Duplicate cards for seamless loop */}
            {[...filteredAchievers, ...filteredAchievers].map((achiever, index) => (
              <div 
                key={`${achiever.id}-${index}`}
                style={{
                  minWidth: '340px',
                  maxWidth: '340px'
                }}
              >
                <div 
                  className="card h-100"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid #083D77'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(8, 61, 119, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(8, 61, 119, 0.15)';
                  }}
                >
                  <div className="card-body p-3">
                    <div className="text-center mb-2">
                      {/* Avatar - Rectangular shape with more height */}
                      <div 
                        className="mx-auto mb-3 position-relative overflow-hidden"
                        style={{
                          width: '100%',
                          height: '200px',
                          background: '#083D77',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 25px rgba(8, 61, 119, 0.3)',
                          borderRadius: '15px'
                        }}
                      >
                        <div style={{ 
                          fontSize: '4rem', 
                          color: '#fff',
                          fontWeight: 'bold',
                          fontFamily: '"Poppins", sans-serif'
                        }}>
                          {achiever.name.split(' ')[0].charAt(0)}{achiever.name.split(' ')[1]?.charAt(0) || ''}
                        </div>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: '#083D77', fontFamily: '"Poppins", sans-serif', fontSize: '1.15rem' }}>
                        {achiever.name}
                      </h5>
                      <div className="mb-2">
                        <span 
                          className="badge px-3 py-2"
                          style={{
                            background: '#083D77',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            borderRadius: '10px',
                            color: 'white'
                          }}
                        >
                          {achiever.achievement}
                        </span>
                      </div>
                      <span 
                        className="badge px-2 py-1"
                        style={{
                          background: 'white',
                          color: '#083D77',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: '8px',
                          border: '1px solid #083D77'
                        }}
                      >
                        Year: {achiever.year}
                      </span>
                    </div>
                    <div className="position-relative pt-3" style={{ borderTop: '2px solid #E6F3FF' }}>
                      <p 
                        className="fst-italic mb-0"
                        style={{ 
                          color: '#000000',
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          textAlign: 'center',
                          padding: '0.5rem 0'
                        }}
                      >
                        {achiever.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${filteredAchievers.length} - ${filteredAchievers.length * 1.5}rem));
          }
        }
      `}</style>4
    </section>
  );
};

export default Trailblazers;
