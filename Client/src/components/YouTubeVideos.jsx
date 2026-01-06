import { FaYoutube, FaPlay } from 'react-icons/fa';

const YouTubeVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Learn Math Concepts Easily",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual video ID
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    },
    {
      id: 2,
      title: "Science Made Simple",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual video ID
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    }
  ];

  return (
    <section className="py-5" style={{ 
      background: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px',
              boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
            }}>
              <FaYoutube className="me-2" />
              WATCH & LEARN
            </span>
          </div>
          <h2 className="fw-bold mb-4" style={{
            color: '#2E5C8A',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            fontSize: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Watch Our Learning Videos
          </h2>
        </div>
        
        <div className="row g-4 justify-content-center">
          {videos.map((video) => (
            <div key={video.id} className="col-lg-5 col-md-6">
              <a 
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="card border-0 position-relative overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(46, 92, 138, 0.12)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    border: '2px solid #D0E4F7'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 0, 0, 0.25)';
                    e.currentTarget.style.borderColor = '#FF0000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(46, 92, 138, 0.12)';
                    e.currentTarget.style.borderColor = '#D0E4F7';
                  }}
                >
                  {/* Thumbnail Container */}
                  <div 
                    className="position-relative"
                    style={{
                      width: '100%',
                      height: '320px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div 
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 0, 0, 0.95)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <FaPlay style={{ 
                        color: 'white', 
                        fontSize: '2rem',
                        marginLeft: '6px'
                      }} />
                    </div>
                    {/* YouTube Corner Badge */}
                    <div 
                      className="position-absolute"
                      style={{
                        top: '15px',
                        right: '15px',
                        background: '#FF0000',
                        padding: '8px 15px',
                        borderRadius: '25px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      <FaYoutube style={{ color: 'white', fontSize: '1.8rem' }} />
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-bold mb-0" style={{
                      fontSize: '1.3rem',
                      color: '#2E5C8A',
                      fontFamily: '"Poppins", sans-serif',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}>
                      {video.title}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-5">
          <a 
            href="https://www.youtube.com/@YourChannelName" // Replace with your actual YouTube channel
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg px-5 py-3 fw-semibold"
            style={{
              background: '#FF0000',
              border: 'none',
              color: 'white',
              borderRadius: '50px',
              boxShadow: '0 8px 25px rgba(255, 0, 0, 0.4)',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              fontFamily: '"Inter", sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.4)';
            }}
          >
            <FaYoutube className="me-2" style={{ fontSize: '1.4rem' }} />
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
