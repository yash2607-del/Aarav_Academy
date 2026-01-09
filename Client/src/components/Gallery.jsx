import React from 'react';

const Gallery = () => {
  // 4 rows with 4 photos each = 16 total placeholders
  const galleryItems = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1
  }));

  return (
    <section className="py-5" id="gallery" style={{ background: 'white' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: '#083D77',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}>
              <i className="bi bi-images me-2"></i>
              OUR GALLERY
            </span>
          </div>
          <h2 className="display-3 fw-bold mb-3" style={{
            color: '#083D77',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Gallery
          </h2>
        </div>

        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="gallery-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(8, 61, 119, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  background: '#f5f5f5',
                  border: '3px solid #083D77',
                  aspectRatio: '1 / 1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(8, 61, 119, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(8, 61, 119, 0.2)';
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #e8f4f8 0%, #d1e8f0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  {/* Placeholder for image */}
                  <div style={{
                    textAlign: 'center',
                    color: '#083D77',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    <i className="bi bi-image" style={{ fontSize: '3rem', display: 'block', marginBottom: '10px', opacity: 0.5 }}></i>
                    <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>Photo {item.id}</span>
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

export default Gallery;
