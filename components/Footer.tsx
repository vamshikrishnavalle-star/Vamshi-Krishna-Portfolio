import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-black pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Availability Section */}
        <div className="mb-24 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Status: Open</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-8 uppercase tracking-tighter leading-none">
                Available for<br/>
                <span className="text-brand-red">Projects.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
                Ready to transform your ideas into reality with cutting-edge AI solutions. 
                Let's create something extraordinary together.
            </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-900">
            <p>© 2026 Vamshi Krishna. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;