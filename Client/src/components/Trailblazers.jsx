import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Trailblazers = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const achievers = [
    {
      id: 1,
      name: "Aditya Patel",
      achievement: "CBSE 12th - 98.2%",
      percentage: 98.2,
      year: "2024",
      class: "12",
      image: null,
      testimonial: "Outstanding teaching methodology and regular practice tests helped me score exceptionally in Class 12 boards."
    },
    {
      id: 2,
      name: "Arjun Singh",
      achievement: "CBSE 10th - 99.4%",
      percentage: 99.4,
      year: "2024",
      class: "10",
      image: null,
      testimonial: "The personalized attention and excellent study material helped me achieve top marks in my Class 10 board exams."
    },
    {
      id: 3,
      name: "Priya Sharma",
      achievement: "CBSE 12th - 97.6%",
      percentage: 97.6,
      year: "2024",
      class: "12",
      image: null,
      testimonial: "Aarav Academy's dedicated faculty and comprehensive curriculum helped me excel in my Class 12 boards."
    },
    {
      id: 4,
      name: "Rohan Gupta",
      achievement: "CBSE 10th - 98.8%",
      percentage: 98.8,
      year: "2023",
      class: "10",
      image: null,
      testimonial: "The structured approach and regular assessments at Aarav Academy built my strong foundation for Class 10 success."
    },
    {
      id: 5,
      name: "Kavya Mehta",
      achievement: "CBSE 9th - 96.4%",
      percentage: 96.4,
      year: "2023",
      class: "9",
      image: null,
      testimonial: "Expert faculty and regular mock tests prepared me well for examinations. Highly recommend Aarav Academy!"
    },
    {
      id: 6,
      name: "Rahul Singh",
      achievement: "CBSE 10th - 97.2%",
      percentage: 97.2,
      year: "2023",
      class: "10",
      image: null,
      testimonial: "The interactive teaching methods and doubt-clearing sessions helped me achieve excellent results in Class 10 boards."
    },
    {
      id: 7,
      name: "Simran Kaur",
      achievement: "CBSE 9th - 95.8%",
      percentage: 95.8,
      year: "2024",
      class: "9",
      image: null,
      testimonial: "The supportive environment and excellent teaching at Aarav Academy helped me build a strong academic foundation."
    },
    {
      id: 8,
      name: "Vikram Rao",
      achievement: "CBSE 12th - 96.8%",
      percentage: 96.8,
      year: "2023",
      class: "12",
      image: null,
      testimonial: "The comprehensive study material and regular assessments were instrumental in my board exam success."
    }
  ];

  const filters = ['ALL', 'Class 9', 'Class 10', 'Class 12'];

  const filteredAchievers = (activeFilter === 'ALL' 
    ? achievers 
    : achievers.filter(achiever => achiever.class === activeFilter.split(' ')[1])
  ).sort((a, b) => b.percentage - a.percentage);

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
          <p className="lead text-center" style={{ color: '#2c12dcff', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
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
                  minWidth: '320px',
                  maxWidth: '320px'
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
                    <div className="text-center mb-3">
                      {/* Avatar */}
                      <div 
                        className="rounded-circle mx-auto mb-2 position-relative overflow-hidden"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: '#083D77',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 25px rgba(8, 61, 119, 0.3)',
                          border: '3px solid white'
                        }}
                      >
                        <div style={{ 
                          fontSize: '2rem', 
                          color: '#fff',
                          fontWeight: 'bold',
                          fontFamily: '"Poppins", sans-serif'
                        }}>
                          {achiever.name.charAt(0)}
                        </div>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: '#083D77', fontFamily: '"Poppins", sans-serif', fontSize: '1.1rem' }}>
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
                    <div className="position-relative pt-2" style={{ borderTop: '2px solid #E6F3FF' }}>
                      <FaQuoteLeft 
                        className="position-absolute" 
                        style={{
                          top: '-5px', 
                          left: '5px', 
                          color: '#4A90E2',
                          opacity: '0.3',
                          fontSize: '1.2rem'
                        }} 
                      />
                      <p 
                        className="fst-italic mb-0"
                        style={{ 
                          color: '#666',
                          fontSize: '0.85rem',
                          lineHeight: '1.6',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                          textAlign: 'center'
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
      `}</style>
    </section>
  );
};

export default Trailblazers;
