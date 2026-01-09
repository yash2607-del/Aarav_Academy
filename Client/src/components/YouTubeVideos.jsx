import React from 'react';
import Thumbnail_1 from '../assets/youtube-thumbnail/thumbnail_1.png';
import Thumbnail_2 from '../assets/youtube-thumbnail/thumbnail_2.png';
import Thumbnail_3 from '../assets/youtube-thumbnail/thumbnail_3.png';




const YouTubeVideos = () => {
  const videos = [
    {
      id: 1,
      thumbnail: Thumbnail_1, // Replace with actual video ID
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    },
    {
      id: 2,
      thumbnail: Thumbnail_2, // Replace with actual video ID
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    },
    {
      id: 3,
      thumbnail: Thumbnail_3, // Replace with actual video ID
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    }
  ];

  return (
    <section id="youtube-videos" className="py-5" style={{ 
      background: '#FFFFFF',
      position: 'relative',
      marginTop: '3rem'
    }}>
      <div className="container py-4">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{
            color: '#083D77',
            fontFamily: '"Playfair Display", "Georgia", serif',
            fontSize: '3rem',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            fontWeight: '800'
          }}>
            Our YouTube Videos
          </h2>
        </div>
        
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
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(46, 92, 138, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    height: '400px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(46, 92, 138, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(46, 92, 138, 0.15)';
                  }}
                >
                  <img 
                    src={video.thumbnail}
                    alt="YouTube Video Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
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
              background: '#083D77',
              border: 'none',
              color: 'white',
              borderRadius: '50px',
              boxShadow: '0 8px 25px rgba(8, 61, 119, 0.4)',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'none',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(8, 61, 119, 0.5)';
              e.currentTarget.style.background = '#0a4d94';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 61, 119, 0.4)';
              e.currentTarget.style.background = '#083D77';
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
