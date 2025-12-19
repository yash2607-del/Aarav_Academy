import { useState } from 'react';

function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        class: '',
        course: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 mb-3 fs-6">Get In Touch</span>
          <h2 className="display-5 fw-bold text-primary mb-3">Have Questions? We're Here to Help!</h2>
          <p className="lead text-muted">Fill out the form below and our team will get back to you within 24 hours</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5">
                {submitted ? (
                  <div className="alert alert-success text-center" role="alert">
                    <i className="bi bi-check-circle-fill fs-1 d-block mb-3"></i>
                    <h4>Thank you for your interest!</h4>
                    <p className="mb-0">We have received your query and will contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control form-control-lg border-2"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            style={{height: '60px'}}
                          />
                          <label htmlFor="name">
                            <i className="bi bi-person-fill text-primary me-2"></i>Student Name *
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control form-control-lg border-2"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            style={{height: '60px'}}
                          />
                          <label htmlFor="email">
                            <i className="bi bi-envelope-fill text-primary me-2"></i>Email Address *
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control form-control-lg border-2"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="10-digit mobile number"
                            pattern="[0-9]{10}"
                            style={{height: '60px'}}
                          />
                          <label htmlFor="phone">
                            <i className="bi bi-telephone-fill text-primary me-2"></i>Phone Number *
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select form-select-lg border-2"
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                            style={{height: '60px'}}
                          >
                            <option value="">Select Class</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                          </select>
                          <label htmlFor="class">
                            <i className="bi bi-mortarboard-fill text-primary me-2"></i>Current Class *
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select form-select-lg border-2"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            style={{height: '60px'}}
                          >
                            <option value="">Select Course</option>
                            <option value="junior">Junior Classes (VI-VIII)</option>
                            <option value="cbse">CBSE (IX-XII)</option>
                            <option value="iit">IIT Foundation</option>
                            <option value="neet">NEET Foundation</option>
                          </select>
                          <label htmlFor="course">
                            <i className="bi bi-book-fill text-primary me-2"></i>Course Interested In *
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-2"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Any specific queries or requirements..."
                            style={{height: '120px'}}
                          ></textarea>
                          <label htmlFor="message">
                            <i className="bi bi-chat-text-fill text-primary me-2"></i>Your Message (Optional)
                          </label>
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm">
                          <i className="bi bi-send-fill me-2"></i>Submit Enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QueryForm;
