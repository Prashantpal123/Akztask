import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight, Star } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const courseData = [
  {
    id: 1,
    category: "Full Stack",
    title: "MERN Stack Internship",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500",
    price: "₹4,999",
    originalPrice: "₹12,000",
    badge: "Bestseller",
    rating: 4.8
  },
  {
    id: 2,
    category: "Design",
    title: "UI/UX Mastery Course",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=500",
    price: "₹2,499",
    originalPrice: "₹5,999",
    badge: "40% OFF",
    rating: 4.9
  },
  {
    id: 3,
    category: "Mobile",
    title: "React Native Bootcamp",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
    price: "₹3,999",
    originalPrice: "₹8,000",
    badge: "Trending",
    rating: 4.7
  },
   {
    id: 3,
    category: "Mobile",
    title: "React Native Bootcamp",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
    price: "₹3,999",
    originalPrice: "₹8,000",
    badge: "Trending",
    rating: 4.7
  },
   {
    id: 3,
    category: "Mobile",
    title: "React Native Bootcamp",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
    price: "₹3,999",
    originalPrice: "₹8,000",
    badge: "Trending",
    rating: 4.7
  },
   {
    id: 3,
    category: "Mobile",
    title: "React Native Bootcamp",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
    price: "₹3,999",
    originalPrice: "₹8,000",
    badge: "Trending",
    rating: 4.7
  },
   {
    id: 3,
    category: "Mobile",
    title: "React Native Bootcamp",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
    price: "₹3,999",
    originalPrice: "₹8,000",
    badge: "Trending",
    rating: 4.7
  },
  // Aap aise hi 8-10 cards add kar sakte hain...
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group sm:mb-10">
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Badge */}
      <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {course.badge}
      </div>
      {/* Floating Explore Button */}
      <button className=" cursor-pointer absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={20} />
      </button>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{course.category}</span>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold text-gray-700">{course.rating}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
        {course.title}
      </h3>

      <div className="flex items-center justify-between mt-6 border-t pt-4">
        <div>
          <span className="text-2xl font-bold text-gray-900">{course.price}</span>
          <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
        </div>
        <button className=" cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id='course' className=" relative py-4 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold sm:mb-4">
               Latest Opportunities
            </div>
            <h2 className="text-[25px] md:text-4xl font-bold text-gray-900">
              Explore Our <span className="text-blue-600">Courses & Internships.</span>
            </h2>
          </div>

          {/* Custom Arrows */}
          <div className="flex justify-between gap-3">
            <button className="prev-btn sm:w-12 sm:h-12 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-gray-400 hover:text-blue-600">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all text-white shadow-lg shadow-blue-200">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {courseData.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;