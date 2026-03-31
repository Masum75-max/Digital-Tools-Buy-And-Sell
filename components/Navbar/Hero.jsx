import React from "react";
import banner from "../../src/assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="py-24 px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

      
        <div className="max-w-xl">
          
         
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

        
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Supercharge Your <br />
            Digital Workflow
          </h1>

         
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

         
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
             <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>

        
        <div className="relative">
          <img
            src={banner}
            alt="banner"
            className="w-[420px] rounded-2xl object-cover"
          />

         
          <div className="absolute inset-y-0 left-[-20%] w-[60%] bg-gradient-to-r from-slate-50 to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;