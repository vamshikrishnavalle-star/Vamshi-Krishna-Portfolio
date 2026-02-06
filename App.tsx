import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Section = ({ children, className = "", id = "" }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <div id={id} className={`w-full py-20 px-4 md:px-8 ${className}`}>
    <div className="max-w-[1400px] mx-auto w-full">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-dark-text font-sans relative">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex flex-col">
        {/* 1. Hero (Black) */}
        <div className="bg-black text-white w-full">
            <Hero />
        </div>
        
        {/* 2. LogoTicker (White/Cream) */}
        <div className="bg-cream w-full border-b border-gray-200">
            <LogoTicker />
        </div>
        
        {/* 3. About (Black) */}
        <Section className="bg-black text-white" id="about">
            <About />
        </Section>
        
        {/* 4. Skills (Cream) */}
        <Section className="bg-cream" id="skills">
            <Skills />
        </Section>
        
        {/* 5. Projects (Black) */}
        <Section className="bg-black text-white" id="projects">
            <Projects />
        </Section>
        
        {/* 6. Experience (Cream) */}
        <Section className="bg-cream" id="experience">
            <Experience />
        </Section>
        
        {/* 7. Education (Black) */}
        <Section className="bg-black text-white" id="education">
            <Education />
        </Section>
        
        {/* 8. Certifications (Cream) */}
        <Section className="bg-cream" id="certifications">
            <Certifications />
        </Section>
        
        {/* 9. Achievements (Black) */}
        <Section className="bg-black text-white" id="achievements">
            <Achievements />
        </Section>
        
        {/* 10. Contact (Cream) */}
        <Section className="bg-cream" id="contact">
            <Contact />
        </Section>
      </main>

      {/* Footer (Black) */}
      <div className="bg-black text-white">
          <Footer />
      </div>
    </div>
  );
};

export default App;