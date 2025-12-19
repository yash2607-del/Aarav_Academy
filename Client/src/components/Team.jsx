import { FaUserTie, FaChalkboardTeacher, FaAward, FaUser } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Arvind Kumar",
      role: "Founder",
      icon: <FaUserTie />,
      color: "primary",
      description: "Visionary leader dedicated to providing quality education and transforming the lives of students through excellence in teaching.",
      specialization: "Educational Leadership & Student Development",
      showDetails: true,
      image: null // Will be added by user
    },
    {
      id: 2,
      name: "Reena",
      role: "Co-Founder",
      icon: <FaUserTie />,
      color: "info",
      description: "Committed to academic excellence and ensuring every student reaches their full potential through personalized guidance.",
      specialization: "Academic Planning & Student Mentoring",
      showDetails: true,
      image: null // Will be added by user
    },
    {
      id: 3,
      name: "Science Faculty",
      role: "Expert Faculty - Science",
      icon: <FaChalkboardTeacher />,
      color: "success",
      qualification: "M.Sc. Science",
      description: "Experienced science educator specializing in CBSE curriculum.",
      specialization: "Science Education",
      showDetails: false
    },
    {
      id: 4,
      name: "Mathematics Faculty",
      role: "Expert Faculty - Mathematics",
      icon: <FaChalkboardTeacher />,
      color: "warning",
      qualification: "M.Sc. Mathematics",
      description: "Expert in teaching mathematics with focus on conceptual clarity.",
      specialization: "Mathematics Education",
      showDetails: false
    },
    {
      id: 5,
      name: "English Faculty",
      role: "Expert Faculty - English",
      icon: <FaChalkboardTeacher />,
      color: "danger",
      qualification: "M.A. English",
      description: "Passionate English teacher focused on language and literature.",
      specialization: "English Language & Literature",
      showDetails: false
    },
    {
      id: 6,
      name: "SST Faculty",
      role: "Expert Faculty - Social Studies",
      icon: <FaChalkboardTeacher />,
      color: "secondary",
      qualification: "M.A. History",
      description: "Dedicated social studies educator with comprehensive subject knowledge.",
      specialization: "Social Studies & History",
      showDetails: false
    },
    {
      id: 7,
      name: "Play School Faculty",
      role: "Expert Faculty - Child Play School",
      icon: <FaUser />,
      color: "primary",
      qualification: "B.Ed, Montessori Trained",
      description: "Specialized in early childhood education and play-based learning.",
      specialization: "Early Childhood Education",
      showDetails: false
    }
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }} id="team">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2 fs-6 fw-normal" style={{ 
              background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
              color: 'white',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}>
              <i className="bi bi-people-fill me-2"></i>
              OUR TEAM
            </span>
          </div>
          <h2 className="display-3 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #2E5C8A 0%, #4A90E2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Our Expert Team
          </h2>
          <p className="lead text-muted mx-auto" style={{ 
            maxWidth: '700px',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.7'
          }}>
            Meet our dedicated faculty members who are committed to shaping the future of our students
          </p>
        </div>
        
        <div className="row g-4 justify-content-center mb-5">
          {teamMembers.filter(member => member.showDetails).map((member) => (
            <div key={member.id} className="col-lg-5 col-md-6">
              <div 
                className="text-center"
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(46, 92, 138, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Curved Top Border */}
                <div style={{
                  height: '15px',
                  background: 'linear-gradient(90deg, #2E5C8A 0%, #4A90E2 100%)',
                  borderRadius: '25px 25px 0 0'
                }}></div>

                {/* Image Container */}
                <div className="p-4">
                  <div 
                    className="mx-auto mb-3 overflow-hidden"
                    style={{
                      width: '100%',
                      height: '280px',
                      background: '#f0f0f0',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #e0e0e0'
                    }}
                  >
                    {/* Placeholder for image - add <img src="path" alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
                    <div style={{ 
                      fontSize: '5rem', 
                      color: '#bbb',
                      fontWeight: 'bold',
                      fontFamily: '"Poppins", sans-serif'
                    }}>
                      {member.icon}
                    </div>
                  </div>
                  
                  <h3 className="fw-bold mb-2" style={{ 
                    color: '#2c3e50', 
                    fontFamily: '"Poppins", sans-serif', 
                    fontSize: '1.6rem' 
                  }}>
                    {member.name}
                  </h3>
                  <p className="mb-3" style={{ 
                    color: '#666', 
                    fontSize: '1.1rem',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    ( {member.role} )
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Faculty List - Coming Soon */}
        <div className="mt-5 pt-4">
          <h4 className="text-center mb-4" style={{ color: '#2E5C8A', fontFamily: '"Poppins", sans-serif' }}>
            Our Expert Faculty Team
          </h4>
          <p className="text-center text-muted mb-4" style={{ fontSize: '0.95rem' }}>
            Highly qualified educators across all subjects
          </p>
          <div className="row g-3 justify-content-center" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
            {teamMembers.filter(member => !member.showDetails).map((member) => (
              <div key={member.id} className="col-auto" style={{ minWidth: '250px' }}>
                <div 
                  className="text-center p-3 rounded-3"
                  style={{
                    background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                    border: '1px solid #E6F3FF'
                  }}
                >
                  <div style={{ fontSize: '2rem', color: '#4A90E2', marginBottom: '8px' }}>
                    {member.icon}
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: '#2E5C8A', fontSize: '0.95rem' }}>
                    {member.role}
                  </h6>
                  <small className="text-muted">{member.qualification}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
