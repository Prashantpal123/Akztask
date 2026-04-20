import React, { useEffect, useState, useRef } from 'react';
import { Info, Users, Headset, Shield } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// 1. Counter Component for Numbers
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Clean numeric value nikalein (e.g., "10+" -> 10)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
};

const StatItem = ({ icon: Icon, value, label, hasBorder, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`flex flex-col  sm:flex-row items-center justify-center gap-4 py-8 md:py-10 ${hasBorder ? 'lg:border-r border-gray-100' : ''}`}
  >
    <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    
    <div className="flex flex-col items-center sm:items-start leading-tight">
      <div className="text-2xl sm:text-4xl font-black text-blue-600">
        <Counter value={value} />
      </div>
      <span className="text-gray-500 text-[10px] text-center font-bold uppercase tracking-[0.15em] w-24">
        {label}
      </span>
    </div>
  </motion.div>
);

const Experience = () => {
  const stats = [
    { icon: Info, value: "10", label: "Years Of Experience" },
    { icon: Users, value: "3K", label: "Satisfaction Client" },
    { icon: Headset, value: "24", label: "Support (Hours)" },
    { icon: Shield, value: "10+", label: "Dedicated Services" },
  ];

  return (
    <section id='experience' className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6  sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-blue-100">
             <span className="bg-blue-600 text-white rounded-full p-0.5"><Info size={10} /></span> Company Experience
          </div>
          <h2 className="text-[17px] md:text-4xl font-extrabold text-gray-900 leading-tight">
            We Have Been Processing For <br /> 
            Over <span className="text-blue-600">10 Years</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center bg-[#F9FAFB] rounded-[3rem] py-0 p-4 sm:p-10 shadow-sm border border-gray-50">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              index={index}
              {...stat} 
              hasBorder={index !== stats.length - 1} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;