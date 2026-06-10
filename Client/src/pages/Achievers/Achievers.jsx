import React, { useState, useEffect, useRef } from 'react';
import {
  images,
} from '../../data/images.js'
// Animations removed: GSAP/ScrollTrigger not used

const Achievers = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const [achievers, setAchievers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/achievers');
        const data = await res.json();
        setAchievers(data);
      } catch (err) {
        console.error('Failed to fetch achievers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievers();
  }, []);

  const filters = ['ALL', 'Class 10', 'Class 12'];

  const filteredAchievers = (activeFilter === 'ALL' 
    ? achievers
        .slice()
        .sort((a, b) => b.percentage - a.percentage)
    : achievers.filter(achiever => achiever.class === activeFilter.split(' ')[1])
        .sort((a, b) => b.percentage - a.percentage)
  );

  // Simple autoplay carousel: smooth RAF loop translating the track
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    let rafId = null
    let lastTime = null
    const speed = 0.05 // pixels per ms (50px/sec)

    function step(time) {
      if (pausedRef.current) {
        lastTime = time
        rafId = requestAnimationFrame(step)
        return
      }

      if (lastTime == null) lastTime = time
      const delta = time - lastTime
      lastTime = time

      const currentOffset = Number(inner.dataset.offset || '0')
      const nextOffset = currentOffset + speed * delta

      // reset when we've scrolled half (since items duplicated)
      const halfWidth = inner.scrollWidth / 2
      const wrappedOffset = halfWidth > 0 ? nextOffset % halfWidth : nextOffset
      inner.dataset.offset = String(wrappedOffset)
      inner.style.transform = `translateX(-${wrappedOffset}px)`

      if (nextOffset >= halfWidth && halfWidth > 0) {
        inner.dataset.offset = '0'
        inner.style.transform = 'translateX(0px)'
      }

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [/* run once or when filtered content changes */ filteredAchievers.length, activeFilter])

  return (
    <section className="py-5" id="achievers" style={{ background: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div className="mb-5 text-center">
         <h1 style={{color: '#276eb9'}}>MEET OUR ACHIEVERS</h1>
          <p className="lead text-center " style={{ color: 'rgb(21, 78, 124)', maxWidth: '700px', margin: '0 auto 1.5rem', fontWeight:'300px' }}>
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
                  border: `2px solid ${activeFilter === filter ? '#276eb9' : '#ddd'}`,
                  background: activeFilter === filter ? '#276eb9' : 'white',
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
                    e.currentTarget.style.borderColor = '#276eb9';
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
        <div
          ref={containerRef}
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
          }}>
          <div 
            ref={innerRef}
            style={{
              display: 'flex',
              gap: '1.5rem',
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {/* Duplicate cards for seamless loop */}
            {[...filteredAchievers, ...filteredAchievers].map((achiever, index) => (
              <div 
                key={`${achiever._id || achiever.id || index}-${index}`}
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
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    cursor: 'default',
                    border: '2px solid #276eb9'
                  }}
                >
                  <div className="card-body p-0">
                    <div className="text-center px-3 pt-3 pb-3">
                      {/* Avatar - plain image to keep the photo's own border */}
                      <div className="mx-auto mb-3" style={{ maxWidth: '100%' }}>
                          {achiever.imageUrl || achiever.image ? (
                          <img
                            src={achiever.imageUrl ? (achiever.imageUrl.startsWith('data:') ? achiever.imageUrl : `http://localhost:5000${achiever.imageUrl}`) : achiever.image}
                            alt={achiever.name}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: 'auto',
                              maxHeight: '210px',
                              objectFit: 'contain',
                              objectPosition: 'center center',
                              display: 'block'
                            }}
                          />
                        ) : (
                          <div style={{ 
                            fontSize: '4rem', 
                            color: '#fff',
                            fontWeight: 'bold',
                            fontFamily: '"Poppins", sans-serif'
                          }}>
                            {achiever.name.split(' ')[0].charAt(0)}{achiever.name.split(' ')[1]?.charAt(0) || ''}
                          </div>
                        )}
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: '#111827', fontFamily: '"Poppins", sans-serif', fontSize: '1.25rem' }}>
                        {achiever.name}
                      </h5>
                      <div className="mb-2">
                        <span 
                          className="d-inline-block px-3 py-2"
                          style={{
                            background: '#276eb9',
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            borderRadius: '14px',
                            color: 'white',
                            lineHeight: 1.15
                          }}
                        >
                          {achiever.achievement || `CBSE ${achiever.class}th - ${achiever.percentage}%`}
                        </span>
                      </div>
                      <span 
                        className="d-inline-block px-3 py-2"
                        style={{
                          background: 'white',
                          color: '#276eb9',
                            fontSize: '0.85rem',
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: '1px solid #9cc4ee'
                        }}
                      >
                        Year: {achiever.year}
                      </span>
                    </div>
                    <div className="position-relative px-4 pb-3 pt-3" style={{ borderTop: '1px solid #E5EEF9' }}>
                      <p 
                        className="fst-italic mb-0"
                        style={{ 
                          color: '#444444',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          textAlign: 'center',
                          padding: '0.25rem 0',
                          fontWeight: '400'
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

      {/* Animations removed for static display */}
    </section>
  );
};

export default Achievers;
