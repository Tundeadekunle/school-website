// src/components/Facilities.tsx
'use client';

import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      title: "Science Laboratories",
      description: "Modern labs equipped with the latest technology for hands-on learning.",
      image: "/pupils-lab.jpeg",
    },
    {
      title: "Library & Resource Center",
      description: "Extensive collection of books, digital resources, and quiet study areas.",
      image: "/library.jpeg",
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor facilities for various sports and physical activities.",
      image: "/sports.jpeg",
    },
    {
      title: "Art Studios",
      description: "Dedicated spaces for visual arts, music, theater, and dance.",
      image: "/pupils-art.jpeg",
    },
    {
      title: "Cafeteria",
      description: "Healthy and nutritious meals prepared daily in our modern kitchen.",
      image: "/cafteria.jpeg",
    },
    {
      title: "Technology Center",
      description: "Computer labs and maker spaces with cutting-edge technology.",
      image: "/tech.jpeg",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities designed to inspire learning, creativity, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
  className={`h-48 bg-center bg-cover`}
  style={{ backgroundImage: `url('${facility.image}')` }}
></div>
              {/* <div className="h-48 bg-blue-200"></div> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;