import React from 'react';
import FadeIn from './FadeIn';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const list = [
    "Inspire Manak Science Fair Awardee (September 2022) - Selected among top 100 projects in India from Hyderabad",
    "Web Ka Hackathon Participant (March 2024)",
    "Built 50+ Projects in AI & Automation",
    "Co-Founded AI Agentic Verse"
  ];

  return (
    <div className="relative">
      <FadeIn>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                     <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-4 text-brand-red">Achievements</h2>
                     <p className="text-gray-400">Recognition & Extracurricular Activities</p>
                </div>
               
                <div className="grid md:grid-cols-2 gap-8">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand-red hover:shadow-lg transition-all">
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-1">
                                <Trophy size={18} />
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-gray-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
      </FadeIn>
    </div>
  );
};

export default Achievements;