import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight, Share2, Twitter, Linkedin, Check, Copy, X, Layout } from 'lucide-react';

interface ProjectTag {
    name: string;
    iconUrl?: string;
    Icon?: React.ElementType;
}

// Custom GoHighLevel Logo Component
const GHLLogo = ({ size = 20, className }: { size?: number | string, className?: string }) => (
   <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 12L15 19H10.5V32H5.5V19H1L8 12Z" fill="#FCC006"/>
      <path d="M20 7L27 14H22.5V32H17.5V14H13L20 7Z" fill="#157EFB"/>
      <path d="M32 12L39 19H34.5V32H29.5V19H25L32 12Z" fill="#27C25E"/>
   </svg>
);

// Custom LinkedIn Logo Component
const LinkedInLogo = ({ size = 20, className }: { size?: number | string, className?: string }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20.447 20.452H16.892V14.881C16.892 13.553 16.865 11.844 15.043 11.844C13.195 11.844 12.912 13.287 12.912 14.786V20.452H9.357V9H12.768V10.565H12.817C13.292 9.664 14.453 8.713 16.186 8.713C19.791 8.713 20.447 11.085 20.447 14.168V20.452ZM5.337 7.433C4.195 7.433 3.274 6.511 3.274 5.373C3.274 4.235 4.195 3.313 5.337 3.313C6.478 3.313 7.4 4.235 7.4 5.373C7.4 6.511 6.478 7.433 5.337 7.433ZM7.119 20.452H3.556V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="#0077B5"/>
   </svg>
);

const ProjectCard: React.FC<{
  title: string;
  category: string;
  year: string;
  link: string;
  description: string;
  tags: ProjectTag[];
  imageUrl?: string;
}> = ({ title, category, year, link, description, tags, imageUrl }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShareOpen(!isShareOpen);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setIsShareOpen(false), 2500);
  };

  const shareUrl = encodeURIComponent(link);
  const shareText = encodeURIComponent(`Check out ${title} by Vamshi Krishna!`);

  return (
    <div className="group relative flex flex-col justify-between rounded-[40px] bg-neutral-900 border border-neutral-800 hover:border-brand-red transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-2xl">
      {/* Background Glow Blob */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-red/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      {/* Main Link (Background) */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label={`View ${title}`}></a>

      <div className="relative z-10 flex flex-col h-full p-6 md:p-8 pointer-events-none">
          <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-red transition-colors">{category}</span>
              
              <div className="flex gap-3 pointer-events-auto">
                {/* Share Button */}
                <div className="relative">
                    <button 
                        onClick={handleShareClick}
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 border border-white/10 text-white"
                        aria-label="Share project"
                    >
                        {isShareOpen ? <X size={20} /> : <Share2 size={20} />}
                    </button>

                     {/* Share Modal */}
                     {isShareOpen && (
                        <div className="absolute top-14 right-0 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-2 min-w-[160px] animate-fade-in-up z-50">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors text-sm font-bold"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Twitter size={16} /> Twitter
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors text-sm font-bold"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors text-sm font-bold w-full text-left"
                            >
                                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                                {copied ? 'Copied!' : 'Copy Link'}
                            </button>
                        </div>
                    )}
                </div>

                {/* Visit Button Indicator */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300 border border-white/10 text-white">
                    <ArrowUpRight size={20} />
                </div>
              </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-4 leading-none group-hover:translate-x-1 transition-transform duration-300">
              {title}
          </h3>
          
          {/* Fixed height description for alignment */}
          <p className="text-gray-400 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors max-w-lg min-h-[110px]">
              {description}
          </p>

          {imageUrl && (
              <div className="w-full h-96 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/30 transition-all">
                  <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
          )}

          <div className="mt-auto">
              <div className="h-[1px] w-full bg-white/10 mb-5 group-hover:bg-brand-red transition-colors"></div>
              {/* Removed flex-wrap to keep year on the right side even if tags overflow */}
              <div className="flex gap-4 justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                      {tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-bold bg-white/5 text-gray-300 px-3 py-2 rounded-full border border-white/10 group-hover:border-brand-red group-hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-default">
                              {tag.iconUrl ? (
                                  <img src={tag.iconUrl} alt={tag.name} className="w-5 h-5 object-contain" />
                              ) : tag.Icon ? (
                                  <tag.Icon size={18} className="text-gray-300 group-hover:text-white" />
                              ) : null}
                              <span>{tag.name}</span>
                          </div>
                      ))}
                  </div>
                  <span className="text-base md:text-lg font-mono text-brand-red font-bold whitespace-nowrap shrink-0 bg-white px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(214,52,40,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                      {year}
                  </span>
              </div>
          </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
    // Official n8n logo from SimpleIcons
    const n8nLogo = "https://cdn.simpleicons.org/n8n/FF6584";

    const pencraftTags: ProjectTag[] = [
        { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Gemini API', iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
        { name: 'n8n', iconUrl: n8nLogo },
        { name: 'Google AI Studio', iconUrl: 'https://cdn.simpleicons.org/google/4285F4' },
        { name: 'Vite', iconUrl: 'https://cdn.simpleicons.org/vite/646CFF' },
        { name: 'LinkedIn', Icon: LinkedInLogo }
    ];

    const ecogenTags: ProjectTag[] = [
        { name: 'GoHighLevel', Icon: GHLLogo },
        { name: 'n8n', iconUrl: n8nLogo },
        { name: 'Google AI Studio', iconUrl: 'https://cdn.simpleicons.org/google/4285F4' },
        { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' }
    ];

    const chatrizTags: ProjectTag[] = [
        { name: 'n8n', iconUrl: n8nLogo },
        { name: 'Supabase', iconUrl: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
        { name: 'Gemini API', iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
        { name: 'Telegram', iconUrl: 'https://cdn.simpleicons.org/telegram/26A5E4' }
    ];

    const librizzTags: ProjectTag[] = [
        { name: 'C++', iconUrl: 'https://cdn.simpleicons.org/cplusplus/00599C' },
        { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'HTML5', iconUrl: 'https://cdn.simpleicons.org/html5/E34F26' }
    ];

  return (
    <div className="relative">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
            <div>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest text-brand-red mb-4 block">Technical Projects</span>
                <h2 className="text-6xl md:text-8xl font-bold font-oswald uppercase text-brand-red leading-[0.9]">
                    Featured<br/>Work
                </h2>
            </div>
            <div className="hidden md:block pb-2">
                <p className="text-gray-400 text-lg max-w-md text-right">
                    A selection of AI agents, automation pipelines, and full-stack applications built to solve real-world problems.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ProjectCard 
                title="Pencraft AI"
                category="AI Content Suite"
                year="2026"
                link="https://pencraftai.netlify.app/"
                description="Advanced AI writing assistant mainly focusing on LinkedIn Post writing with Image Generation. Features tone customization and multi-language support."
                tags={pencraftTags}
                imageUrl="https://res.cloudinary.com/duoemrmsy/image/upload/PencraftAI_oe6xsa"
            />
            <ProjectCard 
                title="EcoGen"
                category="AI Automation"
                year="2026"
                link="https://aiagenticverse.shop/"
                description="Intelligent ecosystem for business automation. Integrated Booking system with Automated Follow-up messaging and Email models built directly into the website."
                tags={ecogenTags}
                imageUrl="https://res.cloudinary.com/duoemrmsy/image/upload/EcoGen_cpa3nb"
            />
            <ProjectCard 
                title="ChatRiz"
                category="AI Agent"
                year="2025"
                link="https://github.com/vamshikrishnavalle-star/ChatRiz-An-AI-Chat-Agent-Integrated-with-LLM-"
                description="24/7 customer interaction agent for websites and Telegram. Capabilities include appointment booking and client dashboards."
                tags={chatrizTags}
            />
            <ProjectCard 
                title="LibRizz"
                category="Management System"
                year="2025"
                link="https://github.com/vamshikrishnavalle-star/Librizz-Library-Management-Sytem"
                description="Comprehensive Library Management System for efficient tracking of books and student records with custom API integration."
                tags={librizzTags}
            />
        </div>
      </FadeIn>
    </div>
  );
};

export default Projects;