// // src/components/Hero.tsx
// 'use client';

// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div 
//             className="md:w-1/2 mb-10 md:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
//               Shaping Future <span className="text-blue-600">Leaders</span> Through Quality Education
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Our school provides a nurturing environment where students can grow academically, socially, and emotionally to become well-rounded individuals.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
//                 Explore Programs
//               </button>
//               <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
//                 Schedule a Tour
//               </button>
//             </div>
//           </motion.div>
//           <motion.div 
//             className="md:w-1/2"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="w-full h-96 bg-blue-200 rounded-2xl overflow-hidden shadow-xl">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-70 rounded-2xl"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="text-xl font-bold mb-2">Modern Learning Environment</h3>
//                   <p>State-of-the-art facilities designed to inspire creativity and innovation.</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero.tsx










'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = [
    {
        id:"slide-1",
      title: "Shaping Future Leaders",
      subtitle: "Through Quality Education",
      description: "Our school provides a nurturing environment where students can grow academically, socially, and emotionally.",
    //   bgColor: "from-blue-500 to-blue-700",
      image: "🎓",
      cta: "Explore Programs"
    },
    {
        id: "slide-2",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art Facilities",
      description: "Designed to inspire creativity and innovation with cutting-edge technology and resources.",
      bgColor: "transparent",
      image: "🏫",
      cta: "Take a Virtual Tour"
    },
    {
        id: "slide-3",
      title: "Inclusive Community",
      subtitle: "Where Everyone Belongs",
      description: "We celebrate diversity and foster an inclusive environment that respects all cultures and backgrounds.",
      bgColor: "transparent",
      image: "🌍",
      cta: "Join Our Community"
    }
  ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);



useEffect(() => {
    const startSlideShow = () => {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    const stopSlideShow = () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };

    startSlideShow();

    // Clean up on component unmount
    return () => stopSlideShow();
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };




  return (
    <section id="home" className="relative bg-[url('/school1.jpeg')] h-screen overflow-hidden pt-24 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} flex items-center`}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 z-10 pt-80 md:pt-80 pb-20 md:pb-80">
            <div className="flex flex-col md:flex-row items-center ">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slides[currentSlide].title}
                  <span className="block text-yellow-300">{slides[currentSlide].subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    {slides[currentSlide].cta}
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                    Schedule a Tour
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="text-[200px] md:text-[300px] opacity-80">
                  {slides[currentSlide].image}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
