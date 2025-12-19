import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aarav Academy</h3>
            <p className="footer-about">
              Dedicated to providing quality education and shaping the future of students from Nursery to 12th grade with CBSE curriculum.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://www.youtube.com/@aaravacademy9551" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/people/Aarav-Academy/100064210173603/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/arav_academy?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('programs')}>Our Programs</a></li>
              <li><a onClick={() => scrollToSection('Trailblazers')}>Trailblazers</a></li>
              <li><a onClick={() => scrollToSection('team')}>Our Team</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Programs</h3>
            <ul className="footer-links">
              <li><a>Aarav Child School (Nursery-V)</a></li>
              <li><a>Junior Classes (VI-VIII)</a></li>
              <li><a>Academic Classes (IX-XII)</a></li>
              <li><a>CBSE Curriculum</a></li>
              <li><a>IIT Foundation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>D-250, Gali No- 54, Mahavir Enclave Part-3, Uttam Nagar, New Delhi - 110059</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" style={{ transform: 'scaleX(-1)' }} />
                <div>
                  <p>Arvind Kumar: +91 9540772241</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>Aaravacademy10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aarav Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
