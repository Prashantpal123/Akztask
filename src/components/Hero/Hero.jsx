import React from 'react';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion
import heroPng from '../../assets/hero.png';
import HerotaxTab from './HerotaxTab';

const Hero = () => {
  // Animation Variants (Reuse karne ke liye)
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section id='home' className="relative w-full min-h-[10vh] flex items-center bg-white overflow-hidden py-12 lg:py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-12 grid grid-cols-2 gap-4 md:gap-29 items-center">
        
        {/* 1. Left Content Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
            <div className="bg-blue-600 p-1 rounded-full text-white">
              <Settings size={14} className="animate-spin-slow" />
            </div>
            <span className="font-bold text-xs uppercase tracking-widest italic">IT Service</span>
          </div>

          {/* Headline */}
          <h1 className="text-[17px] md:text-4xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Best Start-up Focused <br />
            <span className="text-blue-600">Software Development</span> <br />
            Company In Our Country
          </h1>

          {/* Subtext */}
          <div className='hidden md:block'>
            <HerotaxTab />
          </div>
        </motion.div>

        {/* 2. Right Image Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className=" relative flex justify-center items-center"
        >
          {/* Blue Arch Shape Background */}
          <div className="relative w-70 h-50 sm:w-87.5 sm:h-100 md:w-100 md:h-145 bg-blue-600 rounded-t-full shadow-2xl">
            
            <img 
              src={heroPng}
              alt="Professional Person" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52.5 sm:w-full md:w-[120%] max-w-none z-10 drop-shadow-2xl object-cover"
            />

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -bottom-6 -left-4 md:-left-12 bg-white p-1 sm:p-4 md:p-2 rounded-4xl shadow-2xl z-20 flex items-center gap-4 border border-slate-50 min-w-55 md:min-w-70 animate-bounce-subtle"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/thumb/men/${i+20}.jpg`} 
                    className="w-7 h-7 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md"
                    alt="user"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-black text-blue-600 leading-none">3K+</span>
                <p className="text-[10px] sm:text-[12px] md:text-xs text-slate-500 font-bold uppercase tracking-tighter">Satisfaction Client</p>
              </div>
            </motion.div>

            <div className="absolute top-10 -right-4 w-12 h-12 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;