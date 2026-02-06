import React from 'react';
import FadeIn from './FadeIn';

const ExperienceItem: React.FC<{
  role: string;
  company: string;
  period?: string;
  description: string[];
  links?: { label: string; url: string }[];
}> = ({ role, company, period, description, links }) => (
  <div className="mb-12 last:mb-0 relative border-l-2 border-gray-200 pl-8 md:pl-10 ml-4 group hover:border-brand-red transition-colors duration-300">
    {/* Timeline Dot */}
    <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-[9px] top-2 border-2 border-white ring-1 ring-gray-100 group-hover:scale-150 group-hover:bg-brand-red group-hover:ring-red-200 transition-all duration-300"></div>
    
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 transition-transform duration-300 group-hover:translate-x-2">
        <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight group-hover:text-brand-red transition-all">{role}</h3>
            <span className="text-xl font-semibold text-black italic mt-1 block">{company}</span>
        </div>
        {period && (
             <span className="text-lg md:text-xl font-mono text-brand-red font-bold whitespace-nowrap shrink-0 bg-black px-4 py-2 rounded-lg border border-brand-red/20 shadow-md">
                {period}
             </span>
        )}
    </div>

    <div className="max-w-4xl transition-opacity duration-300 group-hover:opacity-100">
        <ul className="list-disc list-inside space-y-3 text-gray-800 mb-6">
          {description.map((item, idx) => (
            <li key={idx} className="text-lg leading-relaxed font-medium pl-2 marker:text-gray-400">{item}</li>
          ))}
        </ul>
        {links && (
          <div className="flex gap-5">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base font-bold underline underline-offset-4 text-brand-red hover:text-red-800 transition-colors hover:scale-105 inline-block decoration-red-200 hover:decoration-brand-red"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <FadeIn>
        <div className="w-full">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-brand-red">
              <span className="w-10 h-[4px] bg-brand-red rounded-full"></span> WORK EXPERIENCE
            </h2>
            
            <ExperienceItem 
              role="Co-Founder & AI Architect"
              company="AI Agentic Verse"
              period="June 2025 - Present"
              description={[
                "Built end-to-end AI Agents with CRM, telephony, and payment integrations.",
                "Built responsive web applications with Google AI Studio integration.",
                "Implemented Gemini API for intelligent features and content generation.",
                "Developed AI-powered user interfaces with real-time responses.",
                "Tech: Claude/OpenAI LLMs, Google AI Studio, Gemini API, n8n, Supabase, JavaScript, REST APIs, HTML/CSS, webhooks."
              ]}
              links={[
                { label: "Official Website", url: "https://aiagenticverse.com" }
              ]}
            />

            <ExperienceItem 
              role="GHL Web Designer & Funnel Developer"
              company="Neshama Training (Client of AI Agentic Verse)"
              period="November 2025 - Present"
              description={[
                "Designing and developing a career-focused EdTech platform with AI-assisted learning, focusing on conversions, automation, and seamless user experience.",
                "Designed and built a conversion-optimized landing page in GoHighLevel.",
                "Created high-impact CTAs, registration forms, and structured course curriculum sections.",
                "Set up lead capture, CRM integration, and automated follow-up workflows.",
                "Optimised layout for mobile responsiveness with smooth scroll-based animations."
              ]}
              links={[
                { label: "Official Website", url: "https://neshamatraining.com/" }
              ]}
            />
            
            <ExperienceItem 
              role="AI & Automation Engineer (Consultant)"
              company="String Metaverse Project"
              period="July - November 2025"
              description={[
                "Designed AI-powered website and Telegram chat agent.",
                "Implemented RAG pipelines using Claude and DeepSeek.",
                "Tech: DeepSeek, n8n, Supabase."
              ]}
              links={[
                { label: "Official Website", url: "https://www.stringmetaverse.com/" },
                { label: "Telegram Agent", url: "https://t.me/StringMetaAIBot" }
              ]}
            />

            <ExperienceItem 
              role="Technical Volunteer & Social Media Manager"
              company="TB Alert India"
              period="June - July 2024"
              description={[
                "Led digital presence and awareness campaigns.",
                "Managed social media and healthcare worker coordination."
              ]}
              links={[
                { label: "Official Website", url: "https://tbalertindia.org/" }
              ]}
            />
        </div>
      </FadeIn>
    </section>
  );
};

export default Experience;