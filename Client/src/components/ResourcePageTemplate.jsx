import { useState } from 'react';
import { CLASSES_STRUCTURE } from '../data/classStructure';
import { FaBook, FaFlask, FaAtom, FaCalculator, FaGraduationCap, FaDownload, FaArrowLeft } from 'react-icons/fa';

export const ResourcePageTemplate = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  buttonText, 
  pdfPathPrefix,
  iconGradient,
  onBackToHome 
}) => {
  const getSubjectIcon = (subjectId) => {
    const icons = {
      maths: <FaCalculator />,
      science: <FaFlask />,
      physics: <FaAtom />,
      chemistry: <FaFlask />,
    };
    return icons[subjectId] || <FaBook />;
  };

  const getSubjectGradient = (subjectId) => {
    const gradients = {
      maths: '#083D77',
      science: '#083D77',
      physics: '#083D77',
      chemistry: '#083D77',
    };
    return gradients[subjectId] || '#083D77';
  };

  const classes = CLASSES_STRUCTURE.map((cls) => ({
    ...cls,
    subjects: cls.subjects.map((subj) => ({
      ...subj,
      chapters: Array.from({ length: subj.chapterCount }, (_, i) => ({
        id: `${cls.id}-${subj.id}-ch${i + 1}`,
        title: `Chapter ${i + 1}`,
        pdf: `${pdfPathPrefix}/class-${cls.id}/${subj.id}/chapter-${i + 1}.pdf`,
      })),
    })),
  }));

  const [selectedClassId, setSelectedClassId] = useState(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  const selectedClass = classes.find((cls) => cls.id === selectedClassId) || null;
  const selectedSubject =
    selectedClass?.subjects.find((subj) => subj.id === selectedSubjectId) || null;

  return (
    <section className="py-5" style={{ 
      background: 'white', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '150px',
      marginTop: '80px'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(8, 61, 119, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(8, 61, 119, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container py-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
            background: '#083D77',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(8, 61, 119, 0.3)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <Icon style={{ fontSize: '2.5rem', color: 'white' }} />
          </div>
          <h1 className="fw-bold mb-2" style={{
            color: '#083D77',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '2.8rem',
            letterSpacing: '-0.5px'
          }}>
            {title}
          </h1>
          <p className="text-muted mb-4" style={{ 
            fontFamily: '"Inter", sans-serif', 
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {subtitle}
          </p>
        
        </div>

        {/* Step 1: Select Class */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div style={{
              background: '#083D77',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginRight: '1rem',
              boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)'
            }}>
              1
            </div>
            <div>
              <h4 className="fw-bold mb-0" style={{ 
                fontFamily: '"Poppins", sans-serif', 
                color: '#083D77',
                fontSize: '1.5rem'
              }}>
                Choose Your Class
              </h4>
              <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                Select the class you're studying in
              </p>
            </div>
          </div>
          <div className="row g-4">
            {classes.map((cls) => (
              <div key={cls.id} className="col-6 col-md-4 col-lg-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedClassId(cls.id);
                    setSelectedSubjectId(null);
                    setTimeout(() => {
                      const subjectSection = document.getElementById('subject-selection');
                      if (subjectSection) {
                        const yOffset = -100; // Offset for navbar
                        const y = subjectSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-100"
                  style={{
                    borderRadius: '20px',
                    border: 'none',
                    padding: '1.5rem 1rem',
                    background: selectedClassId === cls.id
                      ? '#083D77'
                      : 'white',
                    boxShadow: selectedClassId === cls.id
                      ? '0 10px 30px rgba(8, 61, 119, 0.4)'
                      : '0 5px 20px rgba(8, 61, 119, 0.15)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: selectedClassId === cls.id ? 'none' : '2px solid #083D77',
                    transform: selectedClassId === cls.id ? 'translateY(-5px) scale(1.02)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedClassId !== cls.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedClassId !== cls.id) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                    }
                  }}
                >
                  <FaGraduationCap style={{ 
                    fontSize: '2rem', 
                    color: selectedClassId === cls.id ? 'white' : '#083D77',
                    marginBottom: '0.5rem'
                  }} />
                  <div style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: selectedClassId === cls.id ? 'white' : '#083D77',
                    marginBottom: '0.2rem'
                  }}>
                    {cls.label}
                  </div>
                  <div style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.8rem',
                    color: selectedClassId === cls.id ? 'rgba(255,255,255,0.9)' : '#666',
                    fontWeight: 500
                  }}>
                    {cls.subjects.length} Subjects
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Select Subject */}
        {selectedClass && (
          <div id="subject-selection" className="mb-5" style={{
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <div className="d-flex align-items-center mb-4">
              <div style={{
                background: '#083D77',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)'
              }}>
                2
              </div>
              <div>
                <h4 className="fw-bold mb-0" style={{ 
                  fontFamily: '"Poppins", sans-serif', 
                  color: '#083D77',
                  fontSize: '1.5rem'
                }}>
                  Choose Subject
                </h4>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                  Class {selectedClass.id} • Pick your subject
                </p>
              </div>
            </div>
            <div className="row g-4">
              {selectedClass.subjects.map((subject) => (
                <div key={subject.id} className="col-6 col-md-4 col-lg-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSubjectId(subject.id);
                      setTimeout(() => {
                        const chapterSection = document.getElementById('chapter-selection');
                        if (chapterSection) {
                          const yOffset = -100; // Offset for navbar
                          const y = chapterSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="w-100"
                    style={{
                      borderRadius: '20px',
                      border: 'none',
                      padding: '1.5rem 1rem',
                      background: selectedSubjectId === subject.id
                        ? '#083D77'
                        : 'white',
                      boxShadow: selectedSubjectId === subject.id
                        ? '0 10px 30px rgba(8, 61, 119, 0.4)'
                        : '0 5px 20px rgba(8, 61, 119, 0.15)',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: selectedSubjectId === subject.id ? 'none' : '2px solid #083D77',
                      transform: selectedSubjectId === subject.id ? 'translateY(-5px) scale(1.02)' : 'translateY(0)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedSubjectId !== subject.id) {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSubjectId !== subject.id) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                      }
                    }}
                  >
                    <div style={{ 
                      fontSize: '2.5rem', 
                      color: selectedSubjectId === subject.id ? 'white' : '#083D77',
                      marginBottom: '0.5rem'
                    }}>
                      {getSubjectIcon(subject.id)}
                    </div>
                    <div style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: selectedSubjectId === subject.id ? 'white' : '#083D77',
                      marginBottom: '0.2rem'
                    }}>
                      {subject.name}
                    </div>
                    <div style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.8rem',
                      color: selectedSubjectId === subject.id ? 'rgba(255,255,255,0.9)' : '#666',
                      fontWeight: 500
                    }}>
                      {subject.chapterCount} Chapters
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Chapter Cards */}
        {selectedSubject && (
          <div id="chapter-selection" className="mt-4" style={{
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <div className="d-flex align-items-center mb-4">
              <div style={{
                background: '#083D77',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)'
              }}>
                3
              </div>
              <div>
                <h4 className="fw-bold mb-0" style={{ 
                  fontFamily: '"Poppins", sans-serif', 
                  color: '#083D77',
                  fontSize: '1.5rem'
                }}>
                  {title}
                </h4>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                  Class {selectedClass.id} • {selectedSubject.name}
                </p>
              </div>
            </div>

            <div className="row g-4">
              {selectedSubject.chapters.map((chapter, index) => (
                <div key={chapter.id} className="col-12 col-md-6 col-lg-4">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    boxShadow: '0 5px 20px rgba(8, 61, 119, 0.15)',
                    transition: 'all 0.3s ease',
                    border: '2px solid #083D77',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(8, 61, 119, 0.25)';
                    e.currentTarget.style.borderColor = '#083D77';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(8, 61, 119, 0.15)';
                    e.currentTarget.style.borderColor = '#083D77';
                  }}
                  >
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        background: '#083D77',
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        marginRight: '1rem',
                        flexShrink: 0,
                        boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 style={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 600,
                          color: '#083D77',
                          fontSize: '1.1rem',
                          marginBottom: '0.3rem'
                        }}>
                          {chapter.title}
                        </h5>
                        <p style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.85rem',
                          color: '#666',
                          marginBottom: 0
                        }}>
                          Complete study material
                        </p>
                      </div>
                    </div>
                    <a
                      href={chapter.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100 d-flex align-items-center justify-content-center"
                      style={{
                        background: '#083D77',
                        color: 'white',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '0.9rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        fontFamily: '"Inter", sans-serif',
                        marginTop: 'auto',
                        boxShadow: '0 4px 15px rgba(8, 61, 119, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(8, 61, 119, 0.5)';
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.background = '#0a4d8f';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(8, 61, 119, 0.3)';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = '#083D77';
                      }}
                    >
                      <FaDownload style={{ marginRight: '0.5rem' }} />
                      {buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
