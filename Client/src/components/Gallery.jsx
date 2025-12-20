import React from 'react';
import aarav1 from '../assets/aarav_1.jpeg';
import aarav3 from '../assets/aarav_3.jpeg';
import aarav5 from '../assets/aarav_5.png';

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: 'Students Learning Together', image: aarav1 },
    { id: 3, title: 'Expert Faculty Teaching', image: aarav3 },
    { id: 5, title: 'Focused Learning', image: aarav5 },
  ];

  return (
    <section className="py-5" id="gallery" style={{ background: '#f8f9fa' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}>
              <i className="bi bi-images me-2"></i>
              OUR GALLERY
            </span>
          </div>
          <h2 className="display-3 fw-bold mb-3" style={{
            color: '#2E5C8A',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Gallery
          </h2>
        </div>

        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div 
                className="gallery-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  background: '#e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(46, 92, 138, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div 
                  style={{
                    width: '90%',
                    height: '200px',
                    background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  {/* Placeholder for image */}
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    <div style={{
                      textAlign: 'center',
                      color: '#999',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                      <i className="bi bi-image" style={{ fontSize: '3rem', display: 'block', marginBottom: '10px' }}></i>
                      <span style={{ fontSize: '0.9rem' }}>Image placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
