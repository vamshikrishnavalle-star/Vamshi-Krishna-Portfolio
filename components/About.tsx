import React from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative z-10">
        <FadeIn>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
                
                {/* Title */}
                <div className="w-full md:w-1/3 md:sticky md:top-24">
                    <h2 className="text-6xl md:text-9xl font-oswald font-bold tracking-tighter leading-none mb-6 text-brand-red">
                        ABOUT
                    </h2>
                     <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer group">
                         <ArrowUpRight size={40} className="group-hover:rotate-45 transition-transform" />
                     </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-8 pt-2">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
                        "I am an <span className="text-gray-400">AI Developer</span> & <span className="text-gray-400">Automation Engineer</span> based in Hyderabad. I specialize in building intelligent agents and workflow automations that drive real business impact."
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-10 mt-10 border-t border-white/10 pt-10">
                         <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Focus</h3>
                            <p className="text-xl font-medium text-gray-200 leading-relaxed">
                                Building autonomous agents, RAG pipelines, and scalable automation systems using n8n and Python. Built responsive web applications with Google AI Studio integration.
                            </p>
                         </div>
                         <div>
                             <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Education</h3>
                            <p className="text-xl font-medium text-gray-200 leading-relaxed">
                                BTech CSE at Lovely Professional University.<br/>
                                <span className="text-gray-400">CGPA 7.0</span>
                            </p>
                         </div>
                    </div>

                    <div className="pt-6">
                        <a 
                            href="https://drive.google.com/file/d/1mEIfQ9mCmgpcbYpvkWGyzr_i6bVS7Zr4/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block border-b-2 border-brand-red pb-1 text-2xl font-bold text-brand-red hover:text-white transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </FadeIn>
    </div>
  );
};

export default About;