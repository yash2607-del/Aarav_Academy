import { FaQuoteLeft } from 'react-icons/fa';

const Trailblazers = () => {
  const achievers = [
    {
      id: 1,
      name: "Aditya Patel",
      achievement: "CBSE 12th - 98.2%",
      year: "2024",
      image: null, // Will be added by user
      testimonial: "Outstanding teaching methodology and regular practice tests helped me score exceptionally in Class 12 boards."
    },
    {
      id: 2,
      name: "Arjun Singh",
      achievement: "CBSE 10th - 99.4%",
      year: "2024",
      image: null, // Will be added by user
      testimonial: "The personalized attention and excellent study material helped me achieve top marks in my Class 10 board exams."
    },
    {
      id: 3,
      name: "Priya Sharma",
      achievement: "CBSE 12th - 97.6%",
      year: "2024",
      image: null, // Will be added by user
      testimonial: "Aarav Academy's dedicated faculty and comprehensive curriculum helped me excel in my Class 12 boards."
    },
    {
      id: 4,
      name: "Rohan Gupta",
      achievement: "CBSE 10th - 98.8%",
      year: "2023",
      image: null, // Will be added by user
      testimonial: "The structured approach and regular assessments at Aarav Academy built my strong foundation for Class 10 success."
    },
    {
      id: 5,
      name: "Kavya Mehta",
      achievement: "CBSE 12th - 96.4%",
      year: "2023",
      image: null, // Will be added by user
      testimonial: "Expert faculty and regular mock tests prepared me well for board examinations. Highly recommend Aarav Academy!"
    },
    {
      id: 6,
      name: "Rahul Singh",
      achievement: "CBSE 10th - 97.2%",
      year: "2023",
      image: null, // Will be added by user
      testimonial: "The interactive teaching methods and doubt-clearing sessions helped me achieve excellent results in Class 10 boards."
    }
  ];

  return (
    <section className="py-5" id="trailblazers" style={{ background: 'linear-gradient(135deg, #E6F3FF 0%, #F8FBFF 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <div 
            className="d-inline-block px-4 py-2 rounded-pill mb-3"
            style={{
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              boxShadow: '0 4px 15px rgba(46, 92, 138, 0.3)'
            }}
          >
            <span style={{ color: 'white', fontWeight: '600', fontSize: '1.5rem', letterSpacing: '1px' }}>
             MEET  OUR ACHIEVERS
            </span>
          </div>
         
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Celebrating the success stories of our brilliant students who have made us proud
          </p>
        </div>
        
        <div className="row g-4">
          {achievers.map((achiever) => (
            <div key={achiever.id} className="col-lg-4 col-md-6">
              <div 
                className="card h-100"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid #D0E4F7'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(46, 92, 138, 0.2)';
                  e.currentTarget.style.borderColor = '#4A90E2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#D0E4F7';
                }}
              >
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    {/* Image Placeholder - will be replaced with actual student images */}
                    <div 
                      className="rounded-circle mx-auto mb-3 position-relative overflow-hidden"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        border: '4px solid white'
                      }}
                    >
                      {/* Placeholder for image - add <img src="path" alt={achiever.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
                      <div style={{ 
                        fontSize: '3rem', 
                        color: '#fff',
                        fontWeight: 'bold',
                        fontFamily: '"Poppins", sans-serif'
                      }}>
                        {achiever.name.charAt(0)}
                      </div>
                    </div>
                    <h4 className="fw-bold mb-2" style={{ color: '#2E5C8A', fontFamily: '"Poppins", sans-serif' }}>
                      {achiever.name}
                    </h4>
                    <div className="mb-3">
                      <span 
                        className="badge px-3 py-2"
                        style={{
                          background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          borderRadius: '10px'
                        }}
                      >
                        {achiever.achievement}
                      </span>
                    </div>
                    <span 
                      className="badge px-3 py-1"
                      style={{
                        background: '#E6F3FF',
                        color: '#2E5C8A',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: '8px'
                      }}
                    >
                      Year: {achiever.year}
                    </span>
                  </div>
                  <div className="position-relative pt-3" style={{ borderTop: '2px solid #E6F3FF' }}>
                    <FaQuoteLeft 
                      className="position-absolute" 
                      style={{
                        top: '-5px', 
                        left: '10px', 
                        color: '#4A90E2',
                        opacity: '0.3',
                        fontSize: '1.5rem'
                      }} 
                    />
                    <p 
                      className="fst-italic mb-0"
                      style={{ 
                        color: '#666',
                        fontSize: '0.95rem',
                        lineHeight: '1.7',
                        paddingLeft: '10px',
                        paddingRight: '10px',
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
    </section>
  );
};

export default Trailblazers;
