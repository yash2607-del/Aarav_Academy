import React, { useState, useEffect, useRef } from 'react';
import Thumbnail_1 from '../../assets/youtube-thumbnail/thumbnail_1.png';
import Thumbnail_2 from '../../assets/youtube-thumbnail/thumbnail_2.png';
import Thumbnail_3 from '../../assets/youtube-thumbnail/thumbnail_3.png';
import { API_URL } from "../../config.js";

const YouTubeVideos = () => {
  const cardRefs = useRef([]);
  const [videos, setVideos] = useState([]);

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?\/]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${API_URL}/api/videos`);
        const dbVideos = await res.json();
        
        if (Array.isArray(dbVideos)) {
          // Only keep videos that have a valid URL saved in the database
          const validVideos = dbVideos.filter(v => v && v.videoUrl && v.videoUrl.trim() !== '');
          setVideos(validVideos);
        } else {
          setVideos([]);
        }
      } catch (err) {
        console.error('Failed to fetch videos', err);
        setVideos([]);
      }
    };
    fetchVideos();
  }, []);


  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, [videos]);

  if (videos.length === 0) {
    return null;
  }

  return (
    <section id="youtube-videos" className="py-5" style={{ 
      background: '#FFFFFF',
      position: 'relative',
      marginTop: '2rem',
        paddingTop: '2rem'
    }}>
      <div className="container py-4">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{
            color: '#276eb9',
            fontFamily: '"Playfair Display", "Georgia", serif',
            fontSize: '3rem',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            fontWeight: '800'
          }}>
            Our YouTube Videos
          </h2>
        </div>

        <style>{`
          .video-card-reveal {
            opacity: 0;
            transform: translateY(32px) scale(0.96);
            transition: opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
          }

          .video-card-reveal.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          @media (prefers-reduced-motion: reduce) {
            .video-card-reveal {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}</style>
        
        {/* Video Thumbnails */}
        <div className="row g-5 justify-content-center mb-5">
          {videos.map((video, index) => {
            const videoId = extractVideoId(video.videoUrl);
            const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : video.thumbnail;
            
            return (
              <div key={video.slotId || index} className="col-lg-5 col-md-8">
                <a 
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    ref={(node) => { cardRefs.current[index] = node; }}
                    className="video-card-reveal position-relative overflow-hidden"
                    style={{
                      borderRadius: '20px',
                      boxShadow: '0 10px 40px rgba(46, 92, 138, 0.15)',
                      cursor: 'default',
                      aspectRatio: '16 / 9',
                      transitionDelay: `${(index + 1) * 90}ms`
                    }}
                  >
                    <img 
                      src={thumbUrl}
                      alt={video.title || "YouTube Video Thumbnail"}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                      <h5 className="text-white fw-bold mb-0 text-truncate" style={{ fontFamily: '"Inter", sans-serif', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                        {video.title || 'Watch Video'}
                      </h5>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div style={{ width: '60px', height: '40px', background: 'rgba(255,0,0,0.9)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                        <div style={{ width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid white' }}></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Visit Channel Button */}
        <div className="text-center">
          <a 
            href="https://www.youtube.com/@aaravacademy9551" // Replace with your actual YouTube channel
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg px-5 py-3 fw-semibold"
            style={{
              background: '#276eb9',
              border: 'none',
              color: 'white',
              boxShadow: '0 8px 25px rgba(39, 110, 185, 0.4)',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'none',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(39, 110, 185, 0.5)';
              e.currentTarget.style.background = '#1f5f9f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(39, 110, 185, 0.4)';
              e.currentTarget.style.background = '#276eb9';
            }}
          >
            Visit the Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
