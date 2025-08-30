// src/components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This school has been a blessing for our child. The teachers are caring and the curriculum is challenging yet engaging.",
      author: "Sarah Johnson",
      role: "Parent of Basic Student",
    },
    {
      quote: "The STEM program prepared me exceptionally well for college. I felt ahead of my peers in my freshman year.",
      author: "Michael Adebowale",
      role: "Alumni, Class of 2020",
    },
    {
      quote: "As a teacher, I appreciate the supportive environment and resources available to help students succeed.",
      author: "Adewale Babajide",
      role: "Science Teacher",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say About Us</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Hear from our students, parents, and faculty about their experiences at our school.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-700 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">"</div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-blue-200">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;