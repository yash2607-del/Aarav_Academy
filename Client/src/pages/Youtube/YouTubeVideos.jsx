import React, { useEffect, useRef } from 'react';
import Thumbnail_1 from '../../assets/youtube-thumbnail/thumbnail_1.png';
import Thumbnail_2 from '../../assets/youtube-thumbnail/thumbnail_2.png';
import Thumbnail_3 from '../../assets/youtube-thumbnail/thumbnail_3.png';




const YouTubeVideos = () => {
  const cardRefs = useRef([]);

  const videos = [
    {
      id: 1,
      thumbnail: Thumbnail_1, // Replace with actual video ID
      videoUrl: "https://youtube.com/live/zGfSk21uXOI?feature=share" // Replace with actual video URL
    },
    {
      id: 2,
      thumbnail: Thumbnail_2, // Replace with actual video ID
      videoUrl: "https://youtu.be/19BMQekIinE" // Replace with actual video URL
    },
    {
      id: 3,
      thumbnail: Thumbnail_3, // Replace with actual video ID
      videoUrl: "https://youtube.com/live/_0oh0Id5fOo?feature=share" // Replace with actual video URL
    }
  ];

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
  }, []);

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
          {videos.map((video) => (
            <div key={video.id} className="col-lg-5 col-md-8">
              <a 
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  ref={(node) => { cardRefs.current[video.id - 1] = node; }}
                  className="video-card-reveal position-relative overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(46, 92, 138, 0.15)',
                    cursor: 'default',
                    aspectRatio: '16 / 9',
                    transitionDelay: `${video.id * 90}ms`
                  }}
                >
                  <img 
                    src={video.thumbnail}
                    alt="YouTube Video Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                </div>
              </a>
            </div>
          ))}
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
