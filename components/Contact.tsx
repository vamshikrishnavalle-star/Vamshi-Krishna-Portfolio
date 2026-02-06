import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Mail, Phone, Linkedin, Github, MapPin, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBJf8WPobh4nx_uYwRkjH4aOziWyO_3Km9cgokJcylVFMB0huhIwKMloabD3_fl2GD/exec';

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script Web Apps
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact">
      <FadeIn>
        <div className="bg-white border border-border-gray rounded-[32px] p-8 md:p-16 overflow-hidden shadow-xl shadow-gray-200">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Left Info */}
                <div>
                    <span className="text-xl font-mono uppercase tracking-widest text-brand-red mb-4 block font-bold">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">Let's build the <br/> future <span className="text-brand-red">together.</span></h2>
                    <p className="text-subtle-gray mb-12 text-lg leading-relaxed">
                        Have a project in mind? Looking to automate your workflows? 
                        I'm always open to discussing new projects and opportunities.
                    </p>

                    <div className="space-y-8">
                        <a href="mailto:vamshikrishnavalle@gmail.com" className="flex items-center gap-4 text-black group">
                            <div className="w-12 h-12 rounded-full bg-cream-light border border-border-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg font-medium group-hover:text-brand-red transition-colors break-all">vamshikrishnavalle@gmail.com</span>
                        </a>
                        <a href="tel:+917330761220" className="flex items-center gap-4 text-black group">
                            <div className="w-12 h-12 rounded-full bg-cream-light border border-border-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                                <Phone size={20} />
                            </div>
                            <span className="text-lg font-medium group-hover:text-brand-red transition-colors">+91-7330761220</span>
                        </a>
                        <div className="flex items-center gap-4 text-black group">
                             <div className="w-12 h-12 rounded-full bg-cream-light border border-border-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                                <MapPin size={20} />
                            </div>
                            <span className="text-lg font-medium group-hover:text-brand-red transition-colors">Hyderabad, India</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a 
                            href="https://www.linkedin.com/in/vamshikrishnavalle/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 border border-border-gray rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a 
                            href="https://github.com/vamshikrishnavalle-star" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 border border-border-gray rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <form onSubmit={handleSubmit} className="space-y-8 mt-4 md:mt-0 bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                    
                    {/* Success Overlay */}
                     {status === 'success' && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl animate-fade-in-up">
                            <CheckCircle size={64} className="text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                            <p className="text-gray-500 text-center px-4 mb-6">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button 
                                type="button" 
                                onClick={() => setStatus('idle')}
                                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold transition-colors text-black"
                            >
                                Send another
                            </button>
                        </div>
                    )}

                    <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className="w-full bg-white border-b-2 border-gray-200 py-3 px-2 text-black focus:outline-none focus:border-brand-red transition-colors text-lg rounded-t-lg disabled:opacity-50" 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className="w-full bg-white border-b-2 border-gray-200 py-3 px-2 text-black focus:outline-none focus:border-brand-red transition-colors text-lg rounded-t-lg disabled:opacity-50" 
                            placeholder="john@example.com" 
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={4} 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className="w-full bg-white border-b-2 border-gray-200 py-3 px-2 text-black focus:outline-none focus:border-brand-red transition-colors resize-none text-lg rounded-t-lg disabled:opacity-50" 
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-medium">
                            <AlertCircle size={18} />
                            Something went wrong. Please try again later.
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-brand-red text-white font-medium py-5 rounded-2xl hover:bg-red-700 transition-all mt-8 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> Sending...
                            </>
                        ) : (
                            <>
                                Send Message <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;