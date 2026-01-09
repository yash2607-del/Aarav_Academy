import React, { useState, useEffect, useRef } from 'react';

function Stats() {
  const stats = [
    { 
      number: 3000, 
      label: 'Students Enrolled',
      suffix: '+'
    },
    { 
      number: 20, 
      label: 'Expert Faculty',
      suffix: '+'
    },
    { 
      number: 10, 
      label: 'Courses Offered',
      suffix: '+'
    },
    { 
      number: 95, 
      label: 'Success Rate',
      suffix: '%'
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            animateCounter(index, stat.number);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (index, target) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters((prev) => {
        const newCounters = [...prev];
        newCounters[index] = Math.floor(current);
        return newCounters;
      });
    }, duration / steps);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-5" 
      style={{ 
        background: '#083D77',
        borderTop: '1px solid #dee2e6',
        borderBottom: '1px solid #dee2e6'
      }}
    >
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0">
              <div className="stat-item">
                <h2 
                  className="stat-number"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    color: '#f2f2f2ff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {counters[index].toLocaleString()}{stat.suffix}
                </h2>
                <p 
                  className="stat-label"
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    color: '#f8fafbff',
                    margin: 0,
                    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                    fontWeight: '500'
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
