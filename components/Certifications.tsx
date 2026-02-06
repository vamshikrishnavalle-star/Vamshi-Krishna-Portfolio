import React from 'react';
import FadeIn from './FadeIn';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
        name: "C++ with OOPs Programming Language",
        issuer: "Cipher Schools",
        date: "July 2025",
        logoUrl: "/images/CipherSchools.png",
        link: "https://www.cipherschools.com/courses/c-programming-course-beginner-friendly-with-data-structures-0c5b/overview-of-course-and-basics-of-c-program-part1-0e4f"
    },
    {
        name: "The Bits and Bytes of Computer Networking",
        issuer: "Google (Coursera)",
        date: "August 2025",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
        link: "https://www.coursera.org/learn/computer-networking"
    },
    {
        name: "Hardware and Operating Systems",
        issuer: "IBM",
        date: "November 2024",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        link: "https://www.coursera.org/learn/introduction-to-hardware-and-operating-systems"
    }
  ];

  return (
    <section>
      <FadeIn>
        <div className="w-full max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-brand-red">
              <span className="w-10 h-[4px] bg-brand-red rounded-full"></span> CERTIFICATIONS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, idx) => (
                    <a 
                        key={idx}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-[24px] border border-gray-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden block h-full"
                    >
                        
                        <div>
                            {/* Header Icon Bubble */}
                            <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all border border-gray-100 group-hover:border-gray-200 overflow-hidden p-2">
                                {cert.logoUrl ? (
                                    <img src={cert.logoUrl} alt={cert.issuer} className="w-full h-full object-contain" />
                                ) : (
                                    <Award size={28} className="text-gray-400 group-hover:text-brand-red transition-colors" />
                                )}
                            </div>
                            
                            {/* Title */}
                            <div className="flex items-start gap-3 mb-3">
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-brand-red transition-colors">{cert.name}</h3>
                            </div>
                            
                            <p className="text-gray-500 text-base font-medium uppercase tracking-wide mb-1">{cert.issuer}</p>
                        </div>
                        <p className="text-xl font-bold text-brand-red font-mono mt-6 pt-6 border-t border-gray-100 group-hover:border-brand-red/20 transition-colors flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-black group-hover:bg-brand-red transition-colors"></span>
                             {cert.date}
                        </p>
                    </a>
                ))}
            </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Certifications;