import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Tail = () => {
  return (
    <footer className="bg-[#0f172a] text-white px-[10%] py-20 font-sans">
      <div className="flex flex-wrap justify-between gap-10 mb-16">
        
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-3xl font-bold mb-5">DigiTools</h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-[300px]">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="min-w-[120px]">
          <h3 className="text-lg font-medium mb-5">Product</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div className="min-w-[120px]">
          <h3 className="text-lg font-medium mb-5">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        <div className="min-w-[120px]">
          <h3 className="text-lg font-medium mb-5">Resources</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h3 className="text-lg font-medium mb-5">Social Links</h3>
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0f172a] cursor-pointer hover:bg-slate-200 transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0f172a] cursor-pointer hover:bg-slate-200 transition-colors">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0f172a] cursor-pointer hover:bg-slate-200 transition-colors">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
        <div>© 2026 Digitools. All rights reserved.</div>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Tail