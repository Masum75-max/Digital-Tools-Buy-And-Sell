import React from "react";

const Stats = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
        
       
        <div className="py-4">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-white/80 mt-2">Active Users</p>
        </div>

        
        <div className="py-4 md:border-l md:border-r border-white/30">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-white/80 mt-2">Premium Tools</p>
        </div>

      
        <div className="py-4">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-white/80 mt-2">Rating</p>
        </div>

      </div>

    </section>
  );
};

export default Stats;