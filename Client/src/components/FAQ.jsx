import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

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
      answer: 'Yes, we offer both morning and evening batches to suit students’ schedules.'
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
    <section className="py-5" style={{ background: 'white' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{color: '#2E5C8A'}}>Frequently Asked Questions</h2>
          <p className="lead text-muted">Find quick answers about Aarav Academy</p>
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
