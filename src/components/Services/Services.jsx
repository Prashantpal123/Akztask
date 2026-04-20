import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion
import { Monitor, Smartphone, Code, Search, PenTool, ShieldCheck, Cog, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, isActive, index }) => (
  <motion.div 
    // Card animation logic
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }} // Hover karne par thoda upar uthega
    className={`
      min-w-70 sm:min-w-0 shrink-0 
      p-8 rounded-4xl transition-all duration-300 border-2 flex flex-col items-center text-center h-full
      ${isActive 
        ? 'border-blue-600 bg-white shadow-xl shadow-blue-50' 
        : 'border-gray-100 bg-[#F9FAFB] hover:bg-white hover:border-blue-200 hover:shadow-lg'}
    `}
  >
    <div className={`mb-6 p-4 rounded-2xl ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-400 bg-white'}`}>
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-8 grow">{description}</p>
    <button className={`
      mt-auto flex items-center gap-2 font-bold text-sm px-6 py-2.5 rounded-xl transition-all
      ${isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-500 hover:bg-blue-600 hover:text-white'}
    `}>
      Learn More <ArrowRight size={16} />
    </button>
  </motion.div>
);

const servicesData = [
  { icon: Monitor, title: "Web Development", description: "MicroDeft deliver creative and trustful web experiences through innovative technology and continuous support.", isActive: true },
  { icon: Smartphone, title: "App Development", description: "MicroDeft are developing apps for phones, tablets, smart watches, and all other kinds of wearable devices.", isActive: false },
  { icon: Code, title: "Software Development", description: "MicroDeft generate creative and trustful software and application through innovative technology.", isActive: false },
  { icon: Search, title: "Seo & Digital Marketing", description: "MicroDeft is a graphic design agency that creates stunning visuals for businesses of all sizes.", isActive: false },
  { icon: PenTool, title: "Graphic Design", description: "MicroDeft is a graphic design agency that creates stunning visuals for businesses of all sizes.", isActive: false },
  { icon: ShieldCheck, title: "Backup & Security", description: "Data is the most important asset in every technology business. MicroDeft ensure highest backup and security.", isActive: false }
];

const Services = () => {
  return (
    <section id='service' className="py-12 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Cog size={16} className="animate-spin-slow" /> Service
          </div>
          <h2 className="text-[17px] md:text-4xl font-extrabold text-gray-900 mb-6">
            We are business boosters and <span className="text-blue-600">trusted Services.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Microdeft helps startup to start their journey smoothly and efficient way with various Tech services.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="
          flex overflow-x-auto pb-10 gap-8 snap-x snap-mandatory scrollbar-hide
          lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0
        ">
          {servicesData.map((service, index) => (
            <div key={index} className="snap-center min-w-77.5 h-full">
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom Button with Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 flex items-center gap-2 mx-auto transition-all shadow-xl shadow-blue-200 active:scale-95">
            View More <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;