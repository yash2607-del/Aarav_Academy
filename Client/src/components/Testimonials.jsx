function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      class: 'Class 12 - CBSE (2024)',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'Aarav Academy has been instrumental in my success. The faculty is excellent and always ready to help. I scored 95% in my Class 12 boards thanks to their guidance.'
    },
    {
      name: 'Arjun Singh',
      class: 'Class 10 - CBSE (2024)',
      image: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'I was weak in mathematics, but the personalized attention I received here boosted my confidence. Scored 98% in my Class 10 boards. Now maths is my favorite subject!'
    },
    {
      name: 'Sneha Reddy',
      class: 'Class 12 - CBSE (2024)',
      image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'The environment at Aarav Academy is very motivating. Teachers are supportive and the batch size is perfect for individual attention. Achieved 96.8% in boards!'
    },
    {
      name: 'Rahul Verma',
      class: 'Class 10 - CBSE (2023)',
      image: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'The teaching methodology here is outstanding. Complex concepts are explained in such a simple manner. Scored 97.4% in my Class 10 boards.'
    },
    {
      name: 'Ananya Patel',
      class: 'Class 12 - CBSE (2023)',
      image: 'https://ui-avatars.com/api/?name=Ananya+Patel&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'The study material and regular tests helped me track my progress. The doubt sessions are really helpful. Scored 94.6% in Class 12 boards!'
    },
    {
      name: 'Vikram Kumar',
      class: 'Class 10 - CBSE (2024)',
      image: 'https://ui-avatars.com/api/?name=Vikram+Kumar&background=2E5C8A&color=fff&size=200',
      rating: 5,
      text: 'Best decision to join Aarav Academy! The comprehensive study material and regular mock tests were key to my success. Scored 99.2% in boards!'
    }
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{color: '#2E5C8A'}}>Student Testimonials</h2>
          <p className="lead text-muted">Hear from our successful students</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow hover-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.class}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="card-text text-muted fst-italic">"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
