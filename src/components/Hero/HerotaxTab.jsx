import { ArrowRight} from 'lucide-react';


const HerotaxTab = () => {
  return (
    <>
    
       <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            We Help Tech Startup Business Grow Through Innovation And Technology. 
            We Are Working Hard To Make Your Business Easier And Better.
          </p>

          {/* Action Button */}
          <button className= " cursor-pointer bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 group shadow-xl shadow-blue-200 active:scale-95">
            Explore Now 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
    </>      
   
  )
}

export default HerotaxTab
