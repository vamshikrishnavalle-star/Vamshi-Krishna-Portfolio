import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
          <img 
              src="/images/hero.jpeg" 
              alt="Vamshi Krishna"
              className="w-full h-full object-cover object-[70%_center] lg:object-right"
          />
          {/* Gradient Overlay for better text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-80"></div>
          
          {/* Crosshairs Background Pattern (Overlaying image but behind content) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
              <div className="absolute top-[20%] left-[25%] text-4xl font-thin text-brand-red animate-pulse-slow">+</div>
              <div className="absolute top-[40%] right-[30%] text-6xl font-thin text-white animate-pulse-slow" style={{ animationDelay: '1s' }}>+</div>
              <div className="absolute bottom-[30%] left-[20%] text-2xl font-thin text-brand-red animate-pulse-slow" style={{ animationDelay: '2s' }}>+</div>
          </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto min-h-screen flex flex-col justify-center p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center pt-20">
              
              {/* Left Content - Constrained to 6 columns to stay on left */}
              <div className="lg:col-span-7 flex flex-col justify-center order-1 mt-12 lg:mt-0">
                  <div className="overflow-hidden">
                      <h1 className="text-4xl md:text-6xl lg:text-[8rem] leading-[0.85] font-oswald font-bold uppercase tracking-tighter mb-8 animate-fade-in-up text-white drop-shadow-2xl">
                          Vamshi<br/>
                          <span className="text-brand-red">Krishna</span>
                      </h1>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                      <span className="w-12 h-[2px] bg-brand-red box-shadow-lg"></span>
                      <p className="text-2xl md:text-3xl text-gray-100 font-medium drop-shadow-md">
                          AI Developer & <span className="text-white font-bold">Automation Engineer</span>
                      </p>
                  </div>
              </div>

              {/* Right UI Elements (Floating Card) */}
              <div className="lg:col-span-5 flex flex-col justify-end items-end order-2 h-full relative">
                  
                  {/* Floating Card */}
                  <div className="w-full max-w-[320px] bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-[32px] mt-auto relative overflow-hidden group hover:border-brand-red transition-all shadow-2xl animate-float lg:mb-12" style={{ animationDelay: '0.6s' }}>
                      <div className="mb-5 relative z-10">
                          <h3 className="text-xl font-bold leading-tight text-white mb-1">
                              Building <span className="text-brand-red">AI Agents</span> &
                          </h3>
                           <h3 className="text-xl font-bold leading-tight text-white/90">
                              Workflow Automations
                          </h3>
                      </div>
                      
                      {/* Circuit Image */}
                      <div className="h-40 w-full bg-black/50 rounded-2xl relative overflow-hidden border border-white/10 mb-5 group-hover:scale-[1.02] transition-transform duration-500">
                          <img 
                              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop" 
                              alt="AI Circuit"
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                      </div>

                      <div className="flex justify-between items-center relative z-10">
                          <span className="text-xs text-gray-300 font-mono font-bold tracking-widest">© 2026</span>
                          <a 
                              href="#contact" 
                              onClick={scrollToContact}
                              className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-all cursor-pointer hover:scale-105 active:scale-95 duration-200"
                          >
                              Let's chat 
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;