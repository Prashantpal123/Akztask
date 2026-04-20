import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id='about' className="relative py-12 md:py-24 px-6 max-w-7xl mx-auto bg-white overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        
        {/* LEFT COLUMN */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Our Story</span>
              <div className="w-10 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-[17px] md:text-4xl font-extrabold text-gray-900 leading-[1.1] relative pl-6">
              <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-blue-600 to-blue-400 rounded-full"></span>
              Your Vision Our Expertise Your Success Get Noticed Generate <br />
              <span className="text-blue-600">Leads Dominate.</span>
            </h2>
          </div>

          {/* Large Image with Reveal Effect */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team Discussion" 
              className="w-full h-75 sm:h-112.5 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div variants={itemVariants} className="space-y-12">
          {/* Top Two Small Images with Hover Sync */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative rounded-3xl overflow-hidden group shadow-lg"
              >
                <img src={img} alt="Tech" className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter">Trends</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description Text with Quote Style */}
          <p className="text-gray-500 leading-relaxed text-lg sm:text-xl font-medium border-l-4 border-gray-100 pl-6 italic">
            "Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam. Molestie nunc non blandit massa enim nec. Felis bibendum ut tristique et egestas quis ipsum suspendisse."
          </p>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-gray-100 pb-12">
            {[
              { val: "10k+", label: "Projects" },
              { val: "15k", label: "Clients" },
              { val: "12+", label: "Years" },
              { val: "45+", label: "Awards" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex flex-col"
              >
                <h4 className="text-3xl font-black text-gray-900">{stat.val}</h4>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1 font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-wrap items-center gap-8">
            {/* Avatar Stack */}
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.img 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                  src={`https://i.pravatar.cc/150?u=${i+25}`}
                  alt="User"
                />
              ))}
            </div>
            
            {/* Watch Intro Button with Pulse Effect */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:hidden"></div>
                <div className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-md">
                  <Play size={20} className="text-gray-900 group-hover:text-white fill-current translate-x-0.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">About Video</span>
                <span className="text-sm font-black text-gray-900 uppercase">Watch Intro</span>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutUs;