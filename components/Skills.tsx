import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Bot, Code, Brain, Database, Workflow, Terminal, Globe, Sparkles, Zap, Layout, BarChart, Table, Cpu, RefreshCw, Shield, Lightbulb, Users, Layers, Link, MessageSquare } from 'lucide-react';

interface Skill {
  name: string;
  logo?: string;
  icon?: React.ElementType;
  iconColor?: string; // Tailwind class for icon color
  description?: string;
}

const SkillChip: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [imgError, setImgError] = useState(false);

  const renderIcon = () => {
    if (skill.logo && !imgError) {
      return (
        <img 
          src={skill.logo} 
          alt={skill.name} 
          className="w-5 h-5 object-contain" 
          onError={() => setImgError(true)}
        />
      );
    }
    
    if (skill.icon) {
      const Icon = skill.icon;
      return <Icon size={18} className={`${skill.iconColor || 'text-gray-600'} transition-colors`} />;
    }

    return <Zap size={18} className="text-yellow-500 transition-colors" />;
  };

  return (
    <div className="relative group/tooltip">
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:border-brand-red hover:shadow-md transition-all duration-200 cursor-default hover:scale-105">
            {renderIcon()}
            <span className="text-sm font-semibold text-dark-text whitespace-nowrap group-hover/tooltip:text-black transition-colors">{skill.name}</span>
        </div>
        
        {/* Tooltip */}
        {skill.description && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none w-max max-w-[200px] z-50 shadow-xl border border-white/10">
                {skill.description}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900/95"></div>
            </div>
        )}
    </div>
  );
};

const SkillCard: React.FC<{ category: string; skills: Skill[]; icon: React.ReactNode }> = ({ category, skills, icon }) => (
  <div className="bg-white border border-border-gray rounded-[24px] p-8 hover:shadow-2xl hover:border-brand-red transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
    
    {/* Subtle Animated Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white bg-[length:400%_400%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    
    <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="bg-cream-light w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "group-hover:text-white transition-colors" }) : icon}
        </div>
        <h3 className="text-xl font-bold font-oswald uppercase tracking-wide group-hover:text-brand-red transition-colors">{category}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, idx) => (
        <SkillChip key={idx} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  // Brand colors added to CDN URLs or Icon classes
  const aiSkills: Skill[] = [
    { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic/D97757", icon: Bot, description: "Advanced reasoning & coding models" },
    { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991", icon: Bot, description: "GPT-4 & Embeddings API" },
    { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", icon: Sparkles, description: "Multimodal AI capabilities" },
    { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/FF6584", icon: Workflow, description: "Workflow automation powerhouse" },
    { name: "Lovable", icon: Sparkles, iconColor: "text-pink-500", description: "Full-stack AI generation" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E", icon: Database, description: "Open source Firebase alternative" },
    { name: "RAG Pipelines", icon: Database, iconColor: "text-blue-600", description: "Retrieval-Augmented Generation" },
  ];

  const devSkills: Skill[] = [
    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", icon: Code, description: "High-performance programming" },
    { name: "C", icon: Code, iconColor: "text-blue-700", description: "System level programming" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", icon: Code, description: "Interactive web development" },
    { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26", icon: Layout, description: "Web structure & semantics" },
    { name: "CSS", logo: "https://cdn.simpleicons.org/css3/1572B6", icon: Layout, description: "Styling & responsive design" },
    { name: "Calendly API", icon: Workflow, iconColor: "text-blue-500", description: "Automated scheduling integrations" },
  ];

  const dataSkills: Skill[] = [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", icon: Code, description: "Data science & AI scripting" },
      { name: "Excel", logo: "https://cdn.simpleicons.org/microsoftexcel/217346", icon: Table, description: "Data analysis & reporting" },
      { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811", icon: BarChart, description: "Business intelligence visualization" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1", icon: Database, description: "Relational database management" },
      { name: "REST APIs", icon: Globe, iconColor: "text-indigo-500", description: "System interoperability" },
      { name: "Webhooks", icon: Workflow, iconColor: "text-orange-500", description: "Real-time event triggers" },
  ];

  const methodologySkills: Skill[] = [
      { name: "Vibe Coding", icon: Sparkles, iconColor: "text-purple-500", description: "Coding with flow and intuition" },
      { name: "AI-Assisted Dev", icon: Bot, iconColor: "text-green-500", description: "Leveraging AI for efficiency" },
      { name: "Prompt Engineering", icon: Terminal, iconColor: "text-gray-700", description: "Crafting effective AI prompts" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717", icon: Code, description: "Version control & collaboration" },
  ];

  const softSkills: Skill[] = [
      { name: "Adaptability", icon: RefreshCw, iconColor: "text-blue-500", description: "Thriving in changing environments" },
      { name: "Resilience", icon: Shield, iconColor: "text-red-500", description: "Overcoming challenges" },
      { name: "Problem-Solving", icon: Lightbulb, iconColor: "text-yellow-500", description: "Analytical solution finding" },
      { name: "Leadership", icon: Users, iconColor: "text-indigo-500", description: "Guiding teams to success" },
  ];

  const specializationSkills: Skill[] = [
      { name: "Blockchain & Web3", icon: Link, iconColor: "text-orange-500", description: "Decentralized applications" },
      { name: "AI & Automations", icon: Bot, iconColor: "text-emerald-500", description: "Intelligent workflow systems" },
      { name: "LLM Integration", icon: MessageSquare, iconColor: "text-pink-500", description: "Embedding language models" },
      { name: "Data Science", icon: BarChart, iconColor: "text-indigo-600", description: "Data analysis & ML insights" },
  ];

  return (
    <section id="skills">
      <FadeIn>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-black mb-2 block">
                  Skills & <span className="text-brand-red">Technical Competencies</span>
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase text-black">
                    Tech Stack<br/>
                    <span className="text-brand-red">& Skills Matrix</span>
                </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <SkillCard 
            category="AI & Automation"
            icon={<Brain size={24} className="text-black" />}
            skills={aiSkills}
          />
          
          <SkillCard 
            category="Development"
            icon={<Code size={24} className="text-black" />}
            skills={devSkills}
          />

          <SkillCard 
            category="Data & Core"
            icon={<Database size={24} className="text-black" />}
            skills={dataSkills}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
                category="Methodologies"
                icon={<Workflow size={24} className="text-black" />} 
                skills={methodologySkills}
            />
            <SkillCard 
                category="Soft Skills"
                icon={<Users size={24} className="text-black" />} 
                skills={softSkills}
            />
            <SkillCard 
                category="Specializations"
                icon={<Sparkles size={24} className="text-black" />} 
                skills={specializationSkills}
            />
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills;