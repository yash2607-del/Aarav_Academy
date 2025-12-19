import { useEffect, useState, useRef } from 'react';

function Stats() {
  const [counts, setCounts] = useState({
    students: 0,
    faculty: 0,
    courses: 0,
    success: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const finalStats = {
    students: 3000,
    faculty: 20,
    courses: 10,
    success: 95
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        students: Math.floor(finalStats.students * progress),
        faculty: Math.floor(finalStats.faculty * progress),
        courses: Math.floor(finalStats.courses * progress),
        success: Math.floor(finalStats.success * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(finalStats);
      }
    }, stepDuration);
  };

  return (
    <section className="py-5" ref={statsRef} style={{ background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)' }}>
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <div className="stat-card p-4">
              <i className="bi bi-people-fill fs-1 mb-3" style={{color: '#4A90E2'}}></i>
              <h2 className="display-4 fw-bold mb-0" style={{color: '#2E5C8A'}}>{counts.students.toLocaleString()}+</h2>
              <p className="mb-0 fs-5 text-muted">Students Enrolled</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-card p-4">
              <i className="bi bi-person-workspace fs-1 mb-3" style={{color: '#4A90E2'}}></i>
              <h2 className="display-4 fw-bold mb-0" style={{color: '#2E5C8A'}}>{counts.faculty}+</h2>
              <p className="mb-0 fs-5 text-muted">Expert Faculty</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-card p-4">
              <i className="bi bi-book-fill fs-1 mb-3" style={{color: '#4A90E2'}}></i>
              <h2 className="display-4 fw-bold mb-0" style={{color: '#2E5C8A'}}>{counts.courses}+</h2>
              <p className="mb-0 fs-5 text-muted">Courses Offered</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-card p-4">
              <i className="bi bi-trophy-fill fs-1 mb-3" style={{color: '#4A90E2'}}></i>
              <h2 className="display-4 fw-bold mb-0" style={{color: '#2E5C8A'}}>{counts.success}%</h2>
              <p className="mb-0 fs-5 text-muted">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
