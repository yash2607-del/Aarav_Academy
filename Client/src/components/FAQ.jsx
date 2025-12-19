import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What grades do you offer coaching for?',
      answer: 'We offer comprehensive coaching for students from Class 6th to 12th, covering both CBSE curriculum and competitive exam preparation for IIT and NEET.'
    },
    {
      question: 'What is the batch size for classes?',
      answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention and effective learning for each student.'
    },
    {
      question: 'Do you provide study material?',
      answer: 'Yes, we provide comprehensive study material including detailed notes, practice worksheets, previous year papers, and mock tests for all subjects.'
    },
    {
      question: 'Are there separate batches for IIT and NEET preparation?',
      answer: 'Yes, we have dedicated foundation batches for IIT and NEET preparation with specialized faculty and tailored curriculum.'
    },
    {
      question: 'What are the class timings?',
      answer: 'We offer flexible timings with multiple batches - morning, afternoon, and evening sessions. Specific timings can be discussed during admission.'
    },
    {
      question: 'Do you conduct regular tests and assessments?',
      answer: 'Yes, we conduct weekly tests, monthly assessments, and periodic mock exams to track student progress and identify areas for improvement.'
    },
    {
      question: 'Is there any demo class available?',
      answer: 'Yes, we offer a free demo class for new students. You can contact us to schedule a demo session at your convenience.'
    },
    {
      question: 'How can parents track their childs progress?',
      answer: 'We provide regular progress reports and conduct parent-teacher meetings. Parents can also reach out to faculty members for updates on their childs performance.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fee structure varies based on the class and course selected. Please contact our admission team for detailed information about fees and payment options.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Currently, we are an offline-based institute focusing on in-person interactive learning. However, we share recorded lectures and study materials online for revision.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-5" style={{ background: 'white' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{color: '#2E5C8A'}}>Frequently Asked Questions</h2>
          <p className="lead text-muted">Find answers to common questions</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item border-0 shadow-sm mb-3 rounded">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'} fw-semibold`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        backgroundColor: activeIndex === index ? '#E6F3FF' : 'white',
                        color: activeIndex === index ? '#2E5C8A' : '#212529'
                      }}
                    >
                      <i className={`bi ${activeIndex === index ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} me-3`}></i>
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
