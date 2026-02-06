import React from 'react';
import FadeIn from './FadeIn';

const Education: React.FC = () => {
  return (
    <div className="relative">
      <FadeIn>
         <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-brand-red">
              <span className="w-10 h-[4px] bg-brand-red rounded-full"></span> EDUCATION
            </h2>
             <div className="space-y-8">
                {/* LPU */}
                <div className="bg-neutral-900/50 p-10 rounded-3xl shadow-sm border border-white/10 hover:border-brand-red hover:bg-neutral-900/80 transition-all relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors">Bachelor of Technology - CSE</h3>
                            <p className="text-xl text-gray-300 font-medium mt-1">Lovely Professional University, Punjab</p>
                            <p className="text-sm text-gray-500 mt-2 font-medium">Focus: OOPs, Web Development, DSA</p>
                        </div>
                        <span className="text-sm font-bold bg-white text-brand-red px-4 py-2 rounded-full whitespace-nowrap group-hover:bg-brand-red group-hover:text-white transition-colors border border-white/20">Aug 2023 – Present</span>
                    </div>
                    <div className="flex justify-start md:justify-end mt-4 md:mt-0 relative z-10">
                        <span className="font-mono font-bold text-gray-300 bg-white/10 px-4 py-2 rounded-lg border border-white/10">CGPA: 7.0</span>
                    </div>
                </div>

                {/* Narayana */}
                <div className="bg-neutral-900/50 p-10 rounded-3xl shadow-sm border border-white/10 hover:border-white/30 transition-all opacity-90 hover:opacity-100">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-4">
                         <div>
                            <h3 className="text-2xl font-bold text-white">Intermediate Education</h3>
                            <p className="text-xl text-gray-300 font-medium mt-1">Narayana Junior College, Hyderabad</p>
                        </div>
                        <span className="text-sm font-bold bg-white text-brand-red px-4 py-2 rounded-full whitespace-nowrap border border-white/20">May 2021 – April 2023</span>
                    </div>
                    <div className="flex justify-start md:justify-end mt-4 md:mt-0">
                         <span className="font-mono font-bold text-white bg-white/10 px-4 py-2 rounded-lg border border-white/10">96%</span>
                    </div>
                </div>

                {/* Daffodils */}
                <div className="bg-neutral-900/50 p-10 rounded-3xl shadow-sm border border-white/10 hover:border-white/30 transition-all opacity-80 hover:opacity-100">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Matriculation (High School)</h3>
                            <p className="text-xl text-gray-300 font-medium mt-1">Daffodils High School, Warangal</p>
                        </div>
                         <span className="text-sm font-bold bg-white text-brand-red px-4 py-2 rounded-full whitespace-nowrap border border-white/20">June 2010 – April 2021</span>
                    </div>
                    <div className="flex justify-start md:justify-end mt-4 md:mt-0">
                        <span className="font-mono font-bold text-white bg-white/10 px-4 py-2 rounded-lg border border-white/10">97%</span>
                    </div>
                </div>
             </div>
          </div>
      </FadeIn>
    </div>
  );
};

export default Education;