import React from 'react';
import { Mail, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-[#F8FAFC] sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Text & Info Card */}
        <div className="lg:col-span-5 space-y-12">
          {/* Main Title & Description */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Contact us
            </h2>
            <p className="text-gray-600 max-w-xl">
              MicroDeft helps startup to start their journey smoothly and efficient way. Reach out to us for any tech support or inquiries.
            </p>
          </div>

          {/* Re-designed Info Card (Sales & Inquiries) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-gray-400 tracking-widest">
                Sales & inquiries
              </span>
              <div className="flex gap-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                <Mail size={30} strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Reach out via email
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur risus euismod sed aliquam nibh pellentesque velit.
                </p>
              </div>
              <a href="mailto:sales@datacenter.com" className="group flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700">
                akz@itsolution.com 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form (Full Width Card) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {/* First Name */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800">First name</label>
                <input type="text" placeholder="ex. John" className="input-style p-2 border-2  rounded-md border-sky-600" />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800 ">Last name</label>
                <input type="text" placeholder="ex. Carter" className="input-style p-2 border-2  rounded-md border-sky-600" />
              </div>
              {/* Email - Full width on mobile, full width on larger screens too */}
              <div className="sm:col-span-2 flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800">Email address</label>
                <input type="email" placeholder="example@youremail.com" className="input-style p-2 border-2  rounded-md border-sky-600  " />
              </div>
              {/* Phone Number */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800">Phone number</label>
                <input type="tel" placeholder="(123) 456 - 7890" className="input-style p-2 border-2  rounded-md border-sky-600" />
              </div>
              {/* Company */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800">Company</label>
                <input type="text" placeholder="ex. Google" className="input-style p-2 border-2  rounded-md border-sky-600  " />
              </div>
              {/* Message */}
              <div className="sm:col-span-2 flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-800">Message</label>
                <textarea 
                  placeholder="Type your message here..." 
                  rows={5}
                  className="input-style p-2 border-2  rounded-md border-sky-600 resize-none"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md active:scale-[0.98]">
              Send message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;