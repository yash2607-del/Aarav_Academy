import React, { useState } from 'react';
import { FaBook, FaUsers, FaLightbulb, FaChartLine, FaTrophy, FaHeart, FaUserGraduate, FaRocket } from 'react-icons/fa';
import arvind from '../assets/founder/arvind.jpeg';
import reena from '../assets/founder/reena.jpeg';
import hero1 from '../assets/hero/hero_1.jpeg';

function AboutPage({ onBackToHome }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Arvind Kumar",
      role: "Founder",
      image: arvind,
    },
    {
      id: 2,
      name: "Reena",
      role: "Co-Founder",
      image: reena,
    },
  ];

  const faqs = [
    {
      question: 'Which classes does Aarav Academy cover?',
      answer: 'Aarav Academy provides coaching for students from Classes 1st to 12th.'
    },
    {
      question: 'Do you offer coaching for all subjects?',
      answer: 'Yes, we provide coaching for all subjects as per the school curriculum.'
    },
    {
      question: 'How experienced are the faculty members?',
      answer: 'Our faculty consists of experienced and qualified teachers who focus on conceptual clarity and student development.'
    },
    {
      question: 'Are there flexible batch timings available?',
      answer: 'Yes, we offer both morning and evening batches to suit students\' schedules.'
    },
    {
      question: 'How does Aarav Academy ensure good academic results?',
      answer: 'We ensure results through structured teaching, regular assessments, revision sessions, personalized attention, and continuous performance monitoring.'
    },
    {
      question: 'Do you provide individual attention to students?',
      answer: 'Yes, we maintain small batch sizes to ensure every student receives proper guidance and support.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#ffffff' }}>
      <div className="container py-4">

        {/* Founder Introduction Section */}
        <div className="row align-items-center mb-5 py-4">
          {/* Left Content Section */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2
              className="fw-bold mb-4"
              style={{
                color: '#1a2332',
                fontFamily: '"Poppins", sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bolder',
                lineHeight: '1.3'
              }}
            >
              Meet Our Founders
            </h2>
            <p
              style={{
                color: '#090a0cff',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                fontFamily: '"Inter", sans-serif'
              }}
            >
              Unlock success with Aarav Academy! Elevate your academic journey with expert coaching from Class 1st to Class 12th. Led by our experienced founders, we provide personalized guidance to help every student achieve excellence.
            </p>
          </div>
          
          {/* Right Photos Section */}
          <div className="col-lg-7">
            <div className="row g-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-6">
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                        background: 'linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #5eead4 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: '270px',
                          height: '270px',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          border: '8px solid white'
                        }}
                      />
                      {/* Decorative elements */}
                      <div style={{ position: 'absolute', top: '5px', right: '15px', fontSize: '1.5rem' }}>📚</div>
                      <div style={{ position: 'absolute', bottom: '20px', left: '5px', fontSize: '1.5rem' }}>✨</div>
                      <div style={{ position: 'absolute', top: '50px', right: '-5px', fontSize: '1.5rem' }}>✈️</div>
                      <div style={{ position: 'absolute', bottom: '60px', right: '-10px', fontSize: '1.5rem' }}>✖️</div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <h4
                      className="fw-bold mb-1"
                      style={{
                        color: '#1a2332',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '1.3rem'
                      }}
                    >
                      {member.name}
                    </h4>
                    <p
                      style={{
                        color: '#14b8a6',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '1rem',
                        fontWeight: '600',
                        margin: 0
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ 
          border: 'none', 
          height: '2px', 
          background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)',
          margin: '4rem 0'
        }} />

        {/* About Aarav Academy Section */}
        <div className="row align-items-center mb-5 py-5">
          <div className="col-lg-5 mb-4 mb-lg-0 order-lg-2">
            <div
              style={{
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(8, 61, 119, 0.2)',
                border: '5px solid #083D77',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(8, 61, 119, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(8, 61, 119, 0.2)';
              }}
            >
              <img
                src={hero1}
                alt="About Aarav Academy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <h2
              className="fw-bold mb-4"
              style={{
                color: '#1a2332',
                fontFamily: '"Poppins", sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              About Aarav Academy
            </h2>
            <p
              style={{
                color: '#14171bff',
                fontSize: '1.05rem',
                lineHeight: '1.9',
                marginBottom: '1.5rem',
                fontFamily: '"Inter", sans-serif',
                textAlign: 'left'
              }}
            >
              Aarav Academy is a well-established and trusted educational institute dedicated to providing high-quality academic coaching for students from Classes 6th to 12th across all subjects. We believe that strong fundamentals built at an early stage play a vital role in shaping a student's future.
            </p>
            <p
              style={{
                color: '#17191cff',
                fontSize: '1.05rem',
                lineHeight: '1.9',
                marginBottom: '1.5rem',
                fontFamily: '"Inter", sans-serif',
                textAlign: 'left'
              }}
            >
              Our academy focuses on nurturing young minds by providing personalized attention and a disciplined yet encouraging environment. We understand that every student has a unique learning style and pace. Our experienced faculty members adopt interactive and student-centered teaching methods to help students clarify concepts rather than relying on rote learning.
            </p>
            <p
              style={{
                color: '#101214ff',
                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontFamily: '"Inter", sans-serif',
                textAlign: 'left'
              }}
            >
              Regular assessments, doubt clearing sessions, revision classes, and performance tracking help students gain confidence and improve consistently. We aim not only to help students excel in school and board examinations but also to develop critical thinking, problem-solving skills, and self-discipline. With years of experience and a strong record of academic improvement, Aarav Academy has earned the trust of parents and students alike.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-5 py-5">
          <h1
            className="fw-bold text-center mb-5"
            style={{
              color: '#1a2332',
              fontFamily: '"Poppins", sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
            }}
          >
            Our Mission
          </h1>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaBook style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Student-Centric Learning
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Blend learning process that encourage curiosity and discipline
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaUsers style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Personalized Guidance
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Individual attention at every stage of academic journey
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaLightbulb style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Unlock True Potential
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Motivation and innovation for sustainable success
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaChartLine style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Regular Assessment
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Regular monitoring and academic assessment for growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-5 py-5">
          <h1
            className="fw-bold text-center mb-5"
            style={{
              color: '#1a2332',
              fontFamily: '"Poppins", sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
            }}
          >
            Our Vision
          </h1>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaTrophy style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Academic Excellence
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Leading institution with proven results and integrity
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaHeart style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Supportive Ecosystem
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Nurturing environment building student confidence
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaUserGraduate style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Innovation Mindsets
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Continuously upgrading teaching methodologies
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(20, 184, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ccfbf1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <FaRocket style={{ fontSize: '1.8rem', color: '#14b8a6' }} />
                </div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: '#1a2332',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1.15rem'
                  }}
                >
                  Future Ready
                </h5>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Preparing confident individuals for tomorrow's challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section 
          className="py-5 mt-5" 
          style={{ 
            background: '#ffffff'
          }}
        >
          <div className="container">
            <div className="text-center mb-5">
              <h2 
                className="fw-bold mb-3" 
                style={{
                  color: '#1a2332',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Frequently Asked Questions
              </h2>
              <p 
                className="mb-0" 
                style={{
                  color: '#6b7280',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
                }}
              >
                Find quick answers about Aarav Academy
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="faq-container">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="faq-item"
                      style={{
                        background: 'white',
                        borderRadius: '12px',
                        marginBottom: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        border: activeIndex === index ? '2px solid #1e3a5f' : '2px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (activeIndex !== index) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <button
                        className="w-100 text-start p-4 border-0 bg-transparent d-flex align-items-center justify-content-between"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <span 
                          style={{
                            color: '#1e3a5f',
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            fontWeight: '600',
                            fontFamily: '"Poppins", "Segoe UI", system-ui, sans-serif',
                            paddingRight: '20px',
                            flex: 1
                          }}
                        >
                          {faq.question}
                        </span>
                        <span 
                          style={{
                            fontSize: '1.5rem',
                            color: '#1e3a5f',
                            fontWeight: 'bold',
                            transition: 'transform 0.3s ease',
                            transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            display: 'inline-block',
                            minWidth: '24px',
                            textAlign: 'center'
                          }}
                        >
                          {activeIndex === index ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        style={{
                          maxHeight: activeIndex === index ? '500px' : '0',
                          opacity: activeIndex === index ? '1' : '0',
                          overflow: 'hidden',
                          transition: 'all 0.4s ease',
                          paddingLeft: activeIndex === index ? '24px' : '24px',
                          paddingRight: activeIndex === index ? '24px' : '24px',
                          paddingBottom: activeIndex === index ? '24px' : '0'
                        }}
                      >
                        <div 
                          style={{
                            borderTop: '1px solid #e0e0e0',
                            paddingTop: '16px'
                          }}
                        >
                          <p 
                            style={{
                              color: '#555',
                              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                              lineHeight: '1.7',
                              margin: 0,
                              fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
