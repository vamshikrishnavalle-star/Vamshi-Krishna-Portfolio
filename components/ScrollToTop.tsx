import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [showNext, setShowNext] = useState(true);

  // List of section IDs in order
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'contact'];

  const toggleVisibility = () => {
    // Top button visibility
    if (window.scrollY > 300) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }

    // Next button visibility
    // Hide when near bottom of page
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // If within 50px of bottom, hide next button
    if (documentHeight - scrollPosition < 50) {
        setShowNext(false);
    } else {
        setShowNext(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToNext = () => {
    // Current scroll position with a buffer to ensure we find the next one
    const currentScroll = window.scrollY + 100;
    
    for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
            // Find first section that starts after current view
            if (element.offsetTop > currentScroll) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
    }
    // Fallback: scroll to bottom
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-30 flex items-center gap-4">
      {/* Next Section Button */}
      <button
        onClick={scrollToNext}
        className={`group flex items-center justify-center w-14 h-14 rounded-full bg-brand-red border-2 border-black text-white shadow-xl hover:bg-black hover:text-white hover:border-brand-red transition-all duration-500 transform ${showNext ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label="Next section"
      >
        <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
      </button>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`group flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-brand-red text-white shadow-xl hover:bg-brand-red hover:text-white hover:border-black transition-all duration-500 transform ${showTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ScrollToTop;