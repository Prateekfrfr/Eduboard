import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="text-slate-200 min-h-[calc(100vh-4rem)] selection:bg-purple-500/30 selection:text-white pb-16">
      
      {/* ─── HERO HEADER ────────────────────────── */}
      <section className="text-center pt-16 pb-10 px-5 relative overflow-hidden">
        {/* Glow Background Mesh matching EduBoard Theme */}
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
        
        {/* "Get In Touch" Badge Removed as requested by maintainer */}
        
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
          Contact Our Team
        </h1>
        
        <p className="text-slate-400 text-sm sm:text-base max-w-[520px] mx-auto leading-relaxed">
          Have questions about EduBoard, features, or need help? Drop us a message and we'll get back to you shortly.
        </p>
      </section>

      {/* ─── MAIN CONTENT GRID ──────────────────── */}
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: CONTACT INFO */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-400 mb-3 flex items-center gap-2">
              <span>⚡</span> Support Hub
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              For comprehensive technical setups or integration issues, explore our core help resources.
            </p>
            <Link to="/faq" className="inline-flex text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors items-center gap-1">
              Read FAQs & Documentation →
            </Link>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Communication Channels
            </h4>
            
            <div className="flex items-start gap-3.5 text-sm">
              <span className="text-lg">✉️</span>
              <div>
                <p className="text-slate-200 font-medium">General Inquiries</p>
                <p className="text-slate-500 text-xs mt-0.5">support@eduboard.demo</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-sm">
              <span className="text-lg">🌐</span>
              <div>
                <p className="text-slate-200 font-medium">Open Source HQ</p>
                <p className="text-slate-500 text-xs mt-0.5">Distributed & Collaborative</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="md:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm">
          
          {/* Success Banner */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-slate-900 z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">🎉</span>
              <h3 className="text-lg font-bold text-slate-100 mb-1">Message Sent Successfully!</h3>
              <p className="text-slate-400 text-xs max-w-[320px]">
                Thank you for reaching out. Your message has been processed completely without any errors.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-4 text-slate-200 text-sm outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-4 text-slate-200 text-sm outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-400 tracking-wide">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-4 text-slate-200 text-sm outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400 tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Type your feedback, question, or message details here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-4 text-slate-200 text-sm outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-600 resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/10 transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}