import React from 'react';

const Slides = () => {
    return (
        <div>
            <div class="bg-gray-50 py-16 px-4">
  <div class="max-w-6xl mx-auto text-center">
    
  
    <h2 class="text-3xl font-bold text-gray-900">
      Simple, Transparent Pricing
    </h2>
    <p class="text-gray-500 mt-2">
      Choose the plan that fits your needs. Upgrade or downgrade anytime.
    </p>

    
    <div class="mt-12 grid md:grid-cols-3 gap-6">
      
     
      <div class="bg-white rounded-xl shadow-sm p-6 text-left border">
        <h3 class="text-lg font-semibold text-gray-800">Starter</h3>
        <p class="text-sm text-gray-500">Perfect for getting started</p>

        <div class="mt-4">
          <span class="text-3xl font-bold">$0</span>
          <span class="text-gray-500">/Month</span>
        </div>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
          <li>✔ 1 project per month</li>
        </ul>

        <button class="mt-6 w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium">
          Get Started Free
        </button>
      </div>

      
      <div class="rounded-xl p-6 text-left text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg relative">
        
        
        <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-300 text-xs px-3 py-1 rounded-full text-gray-800">
          Most Popular
        </span>

        <h3 class="text-lg font-semibold">Pro</h3>
        <p class="text-sm opacity-90">Best for professionals</p>

        <div class="mt-4">
          <span class="text-3xl font-bold">$29</span>
          <span class="opacity-90">/Month</span>
        </div>

        <ul class="mt-4 space-y-2 text-sm">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>

        <button class="mt-6 w-full py-2 rounded-full bg-white text-indigo-600 text-sm font-medium">
          Start Pro Trial
        </button>
      </div>

    
      <div class="bg-white rounded-xl shadow-sm p-6 text-left border">
        <h3 class="text-lg font-semibold text-gray-800">Enterprise</h3>
        <p class="text-sm text-gray-500">For teams and businesses</p>

        <div class="mt-4">
          <span class="text-3xl font-bold">$99</span>
          <span class="text-gray-500">/Month</span>
        </div>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Team collaboration</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
          <li>✔ Custom branding</li>
        </ul>

        <button class="mt-6 w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Slides;