import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/send-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          class: formData.grade, // Convert grade to class for backend
          course: formData.grade, // Use grade as course
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          grade: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(data.message || 'Failed to send query. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header text-center">
          <h1 className="section-title fw-bold" style= {{color: '#083D77' }}>Get In Touch</h1>
          <h6 className="section-description" style= {{color: '#083D77' }} >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </h6>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>D-250, Gali No- 54, Mahavir Enclave Part-3<br />Uttam Nagar, New Delhi - 110059</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" style={{ transform: 'scaleX(-1)' }} />
              <div>
                <h4>Phone</h4>
                <p>Arvind Kumar: +91 9540772241</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>Aaravacademy10@gmail.com</p>
              </div>
            </div>
            <div className="office-hours">
              <h4>Contact Timing</h4>
              <p>Monday to Sunday: 9:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Query</h3>
              
              {error && (
                <div style={{
                  padding: '12px',
                  marginBottom: '15px',
                  backgroundColor: '#fee',
                  color: '#c33',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  {error}
                </div>
              )}
              
              {success && (
                <div style={{
                  padding: '12px',
                  marginBottom: '15px',
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  ✓ Query sent successfully! We'll contact you soon.
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Grade/Class *</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="iit">IIT Foundation</option>
                  <option value="neet">NEET Foundation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span style={{ marginRight: '8px' }}>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
