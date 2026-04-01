import React, { useState } from 'react';
  
const Work = ({work,selectedSetter}) => {

    const [buy,setBuy]=useState("Buy Now");

 function clickHandler(work){
       setBuy("Bought")

       selectedSetter(work)
 }

    return (
       <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
  <div class="relative max-w-sm bg-white rounded-3xl border border-gray-100 shadow-sm p-8 font-sans">
    
    <span class="absolute top-4 right-4 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
     {work.tag}
    </span>

    <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
      <img src={work.image} />
    </div>

    <h2 class="text-2xl font-bold text-slate-800 mb-3">{work.name}</h2>
    <p class="text-slate-500 text-sm leading-relaxed mb-6">
      {work.description}
    </p>

    <div class="flex items-baseline mb-8">
      <span class="text-3xl font-bold text-slate-800">$ {work.price}</span>
      <span class="text-slate-400 text-lg ml-1">{work.period=="monthly"?"/MO":"Once"}</span>
    </div>

    <ul class="space-y-4 mb-10">
      <li class="flex items-center text-slate-600">
        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        {work.features[0]}
      </li>
      <li class="flex items-center text-slate-600">
        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
       {work.features[1]}
      </li>
      <li class="flex items-center text-slate-600">
        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
       {work.features[2]}
      </li>
    </ul>

    <button class={`${buy==="Buy Now"?"w-full bg-[#8B2CFF]":"bg-green-500"} w-full  text-white font-bold py-4 rounded-full transition-colors duration-200`} onClick={()=>clickHandler(work)}>
     {buy}
    </button>
  </div>
</div>
    );
};

export default Work;