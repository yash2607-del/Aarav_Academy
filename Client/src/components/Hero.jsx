import heroImage from '../assets/hero.png';

function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden" id="home" style={{ 
      background: 'linear-gradient(135deg, #2E5C8A 0%, #1a3a5a 100%)',
      minHeight: '85vh',
      paddingTop: '80px',
      paddingBottom: '150px'
    }}>
      {/* Animated Background Pattern */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.1 }}>
        <div className="position-absolute" style={{ 
          width: '100%', 
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.3) 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="position-absolute" 
          style={{ 
            width: '300px', 
            height: '300px', 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            top: '-100px', 
            left: '-100px', 
            animation: 'morphing 8s ease-in-out infinite, float 6s ease-in-out infinite',
            backdropFilter: 'blur(10px)'
          }}></div>
        <div className="position-absolute" 
          style={{ 
            width: '200px', 
            height: '200px', 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
            bottom: '50px', 
            right: '10%', 
            animation: 'morphing 10s ease-in-out infinite reverse, float 5s ease-in-out infinite',
            animationDelay: '2s',
            backdropFilter: 'blur(10px)'
          }}></div>
        <div className="position-absolute" 
          style={{ 
            width: '150px', 
            height: '150px', 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
            borderRadius: '50%',
            top: '20%', 
            right: '5%', 
            animation: 'pulse 4s ease-in-out infinite, float 4s ease-in-out infinite',
            animationDelay: '1s',
            backdropFilter: 'blur(10px)'
          }}></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '40px' }}>
          <div className="col-lg-6 text-white py-4">
            <div className="hero-content" style={{ animation: 'fadeInUp 1s ease-out' }}>
              
              <h1 className="fw-bold mb-3 lh-sm" style={{ 
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                Shape Your Future with <span className="fw-bold">Excellence</span>
              </h1>
              
              <p className="mb-3 fs-5" style={{ 
                color: 'rgba(255,255,255,0.95)',
                maxWidth: '520px',
                textShadow: '0 1px 10px rgba(0,0,0,0.2)',
                fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Expert guidance for CBSE (Class 6-12) and IIT preparation. Join successful students who trusted us.
              </p>

              <div className="d-flex gap-4 flex-wrap mb-4">
                <a href="#programs" className="btn btn-lg px-5 py-3 fw-semibold position-relative overflow-hidden" style={{
                  background: '#4A90E2',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  EXPLORE COURSES
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="#contact" className="btn btn-lg px-5 py-3 fw-semibold" style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #fff',
                  color: '#2E5C8A',
                  borderRadius: '50px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  <i className="bi bi-telephone-fill me-2"></i>
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-illustration position-relative" style={{ 
              animation: 'fadeInUp 1s ease-out 0.3s backwards',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '100%',
              paddingTop: '80px',
              marginBottom: '80px'
            }}>
              <img 
                src={heroImage} 
                alt="Aarav Academy - Education Excellence" 
                style={{
                  width: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
                  animation: 'float 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="position-absolute bottom-0 w-100" style={{ zIndex: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" fill="#f8f9fa">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes morphing {
          0%, 100% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cardFloat {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotateY(0deg);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-15px) rotateY(5deg);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
