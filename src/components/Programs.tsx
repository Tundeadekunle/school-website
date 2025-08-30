// src/components/Programs.tsx
'use client';

import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      title: "Elementary School",
      description: "Foundational learning with a focus on literacy, numeracy, and social skills.",
      icon: "🧒",
    },
    {
      title: "Middle School",
      description: "Building critical thinking skills and exploring various subjects in depth.",
      icon: "👦",
    },
    {
      title: "High School",
      description: "College preparatory curriculum with advanced placement opportunities.",
      icon: "👨‍🎓",
    },
    {
      title: "STEM Program",
      description: "Specialized program in Science, Technology, Engineering, and Mathematics.",
      icon: "🔬",
    },
    {
      title: "Arts Program",
      description: "Creative expression through visual arts, music, theater, and dance.",
      icon: "🎨",
    },
    {
      title: "Sports Academy",
      description: "Competitive sports programs with professional coaching facilities.",
      icon: "⚽",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a diverse range of programs to meet the unique needs and interests of every student.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
              <button className="mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;