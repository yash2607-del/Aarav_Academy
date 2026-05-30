import React from 'react';
import { images } from '../../../data';

const Gallery = () => {
  const galleryItems = Object.values(images.gallery).map((src, index) => ({
    id: index + 1,
    src,
  }));

  return (
    <section className="py-5" id="gallery" style={{ background: 'white' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
          
          </div>
          <h2 className="display-3 fw-bold mb-3" style={{
            color: '#276eb9',
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
                  boxShadow: '0 10px 30px rgba(39, 110, 185, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  background: '#f5f5f5',
                  border: '3px solid #276eb9',
                  aspectRatio: '1 / 1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(39, 110, 185, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(39, 110, 185, 0.2)';
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
                  <img
                    src={item.src}
                    alt={`Gallery ${item.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
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
