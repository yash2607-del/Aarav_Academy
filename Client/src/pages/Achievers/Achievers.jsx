import React, { useState, useEffect, useRef } from 'react';
import {
  images,
} from '../../data/images.js'
// Animations removed: GSAP/ScrollTrigger not used

const Achievers = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const achievers = [
    {
      id: 1,
      name: "Ayushi",
      achievement: "CBSE 12th - 88%",
      percentage: 88,
      year: "2025",
      class: "12",
      image: images.Toppers12.Ayushi,
      testimonial: "Outstanding teaching methodology and regular practice tests helped me score exceptionally."
    },
    {
      id: 2,
      name: "Sambhavi",
      achievement: "CBSE 12th - 93%",
      percentage: 93,
      year: "2025",
      class: "12",
      image: images.Toppers12.Sambhavi,
      testimonial: "The personalized attention and excellent study material helped me achieve top marks."
    },
    {
      id: 3,
      name: "Nandani",
      achievement: "CBSE 12th - 90%",
      percentage: 90,
      year: "2025",
      class: "12",
      image: images.Toppers12.Nandani,
      testimonial: "Aarav Academy's dedicated faculty and comprehensive curriculum helped me excel."
    },
    {
      id: 4,
      name: "Laxmi",
      achievement: "CBSE 10th - 88%",
      percentage: 88,
      year: "2025",
      class: "10",
      image: images.Toppers10.Laxmi,
      testimonial: "The structured approach and regular assessments built my strong foundation for success."
    },
    {
      id: 5,
      name: "Amnish",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: images.Toppers12.Amnish,
      testimonial: "Expert faculty and regular mock tests prepared me well for examinations."
    },
    {
      id: 6,
      name: "Ayush",
      achievement: "CBSE 10th - 90%",
      percentage: 90,
      year: "2025",
      class: "10",
      image: images.Toppers10.Ayush,
      testimonial: "The interactive teaching methods helped me achieve excellent results."
    },
    {
      id: 7,
      name: "Siya",
      achievement: "CBSE 10th - 83%",
      percentage: 83,
      year: "2025",
      class: "10",
      image: images.Toppers10.Siya,
      testimonial: "The supportive environment and excellent teaching helped me build strong foundation."
    },
    {
      id: 8,
      name: "Dishant",
      achievement: "CBSE 10th - 90%",
      percentage: 90,
      year: "2025",
      class: "10",
      image: images.Toppers10.Dishant,
      testimonial: "The comprehensive study material was instrumental in my board exam success."
    },
    {
      id: 9,
      name: "Vikas",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: images.Toppers12.Vikas,
      testimonial: "Outstanding guidance and support from faculty helped me achieve my goals."
    },
    {
      id: 10,
      name: "Tanya",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: images.Toppers12.Tanya,
      testimonial: "Regular assessments and doubt sessions were key to my success."
    },
    {
      id: 11,
      name: "Garima",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
      image: images.Toppers10.Garima,
      testimonial: "The structured teaching approach helped me excel in my board exams."
    },
    {
      id: 12,
      name: "Aditya",
      achievement: "CBSE 10th - 92%",
      percentage: 92,
      year: "2025",
      class: "10",
      image: images.Toppers10.Aditya,
      testimonial: "Excellent faculty and comprehensive study material ensured my success."
    },
    {
      id: 13,
      name: "Simran",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: images.Toppers12.Simran,
      testimonial: "The personalized attention helped me achieve excellent results."
    },
    {
      id: 14,
      name: "Karishma",
      achievement: "CBSE 12th - 92%",
      percentage: 92,
      year: "2025",
      class: "12",
      image: images.Toppers12.Karishma,
      testimonial: "Interactive teaching methods made learning enjoyable and effective."
    },
    {
      id: 15,
      name: "Rajat",
      achievement: "CBSE 10th - 91%",
      percentage: 91,
      year: "2025",
      class: "10",
      image: images.Toppers10.Rajat,
      testimonial: "Regular mock tests and practice sessions helped me score well."
    },
    {
      id: 16,
      name: "Aryan",
      achievement: "CBSE 10th - 94%",
      percentage: 94,
      year: "2025",
      class: "10",
      image: images.Toppers10.Aryan,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
    },
     {
      id: 17,
      name: "Aditya",
      achievement: "CBSE 12th - 85%",
      percentage: 85,
      year: "2025",
      class: "12",
      image: images.Toppers12.Aditya,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
    },
       {
      id: 18,
      name: "Muskan",
      achievement: "CBSE 10th - 89%",
      percentage: 89,
      year: "2025",
      class: "10",
        image: images.Toppers10.Muskan,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
    },
       {
      id: 19,
      name: "Janvi",
      achievement: "CBSE 10th - 97%",
      percentage: 97,
      year: "2025",
      class: "10",
        image: images.Toppers10.Janvi,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
    },
       {
      id: 20,
      name: "Raman",
      achievement: "CBSE 10th - 90%",
      percentage: 90,
      year: "2025",
      class: "10",
        image: images.Toppers10.Raman,
      testimonial: "The comprehensive curriculum and dedicated faculty ensured my success."
       }

  ];

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
                          {achiever.image ? (
                          <img
                            src={achiever.image}
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
                          {achiever.achievement}
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
