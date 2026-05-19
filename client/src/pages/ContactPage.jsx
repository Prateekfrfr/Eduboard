import React, { useState } from 'react';

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
    // Placeholder submission handler for demo purposes
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-[#0a0e1a] text-[#f1f5f9] font-sans antialiased min-h-screen selection:bg-purple-500 selection:text-white">
      
      {/* ─── HERO HEADER ────────────────────────── */}
      <section className="text-center pt-20 pb-12 px-5 relative overflow-hidden">
        {/* Glow Background Mesh */}
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.22)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="inline-block bg-[#7c3aed]/14 border border-[#7c3aed]/18 text-[#9f67ff] text-xs font-semibold tracking-widest uppercase px-3.5 py-1.25 rounded-full mb-5.5 animate-[fadeUp_0.5s_ease_both]">
          Get In Touch
        </div>
        
        <h1 className="font-['Sora'] font-bold text-[clamp(2rem,5vw,3.2rem)] bg-gradient-to-r from-[#c4b5fd] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent mb-4 leading-[1.15] tracking-tight animate-[fadeUp_0.5s_0.1s_ease_both]">
          Contact Our Team
        </h1>
        
        <p className="text-[#94a3b8] text-base max-w-[520px] mx-auto mb-4 leading-relaxed animate-[fadeUp_0.5s_0.2s_ease_both]">
          Have questions about EduBoard, features, or need help? Drop us a message and we'll get back to you shortly.
        </p>
      </section>

      {/* ─── MAIN CONTENT GRID ──────────────────── */}
      <div className="max-w-[1000px] mx-auto px-5 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: DEMO CONTACT INFO */}
        <div className="md:col-span-5 space-y-6 md:pr-4 animate-[fadeUp_0.5s_0.3s_ease_both]">
          <div className="bg-[#131929] border border-[#7c3aed]/18 rounded-2xl p-6 transition-all duration-200 hover:border-[#7c3aed]/40">
            <h3 className="font-['Sora'] text-sm font-semibold tracking-wider uppercase text-[#9f67ff] mb-4 flex items-center gap-2">
              <span>⚡</span> Support Hub
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              For comprehensive technical setups or integration issues, explore our core help resources.
            </p>
            <a href="faq.html" className="inline-text text-xs font-semibold text-[#9f67ff] hover:underline flex items-center gap-1">
              Read FAQs & Documentation →
            </a>
          </div>

          <div className="bg-[#131929] border border-[#7c3aed]/18 rounded-2xl p-6 space-y-4.5">
            <h4 className="font-['Sora'] text-xs font-semibold tracking-wider uppercase text-[#f1f5f9]">
              Demo Channels
            </h4>
            
            <div className="flex items-start gap-3.5 text-sm">
              <span className="text-lg">✉️</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">General Inquiries</p>
                <p className="text-[#64748b] text-xs mt-0.5">support@eduboard.demo</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-sm">
              <span className="text-lg">🌐</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Open Source HQ</p>
                <p className="text-[#64748b] text-xs mt-0.5">Distributed & Collaborative</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="md:col-span-7 bg-[#131929] border border-[#7c3aed]/18 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.03)] relative overflow-hidden animate-[fadeUp_0.5s_0.4s_ease_both]">
          
          {/* Success Banner */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-[#131929] z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">🎉</span>
              <h3 className="font-['Sora'] text-lg font-bold text-[#f1f5f9] mb-1">Message Sent Successfully!</h3>
              <p className="text-[#94a3b8] text-xs max-w-[320px]">
                Thank you for reaching out. This demo form submission completed without any errors.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-[#94a3b8] tracking-wide">
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
                  className="w-full bg-[#0a0e1a]/60 border border-[#7c3aed]/18 rounded-xl py-2.75 px-4 text-[#f1f5f9] text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.25)] placeholder:text-[#64748b]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-[#94a3b8] tracking-wide">
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
                  className="w-full bg-[#0a0e1a]/60 border border-[#7c3aed]/18 rounded-xl py-2.75 px-4 text-[#f1f5f9] text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.25)] placeholder:text-[#64748b]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-[#94a3b8] tracking-wide">
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
                className="w-full bg-[#0a0e1a]/60 border border-[#7c3aed]/18 rounded-xl py-2.75 px-4 text-[#f1f5f9] text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.25)] placeholder:text-[#64748b]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-[#94a3b8] tracking-wide">
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
                className="w-full bg-[#0a0e1a]/60 border border-[#7c3aed]/18 rounded-xl py-2.75 px-4 text-[#f1f5f9] text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.25)] placeholder:text-[#64748b] resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-br from-[#7c3aed] to-[#a855f7] border-none text-white text-sm font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-150 hover:opacity-88 hover:-translate-y-px shadow-[0_4px_12px_rgba(124,58,237,0.2)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ─── FOOTER MATCHED PARTIAL ─────────────── */}
      <footer className="bg-[#0a0e1a] border-t border-[#7c3aed]/18 p-10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-['Sora'] text-xs font-semibold text-[#f1f5f9] mb-1.5">Product</h4>
            <a href="features.html" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Features</a>
            <a href="about.html" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">About</a>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Dashboard</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-['Sora'] text-xs font-semibold text-[#f1f5f9] mb-1.5">Company</h4>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">About Us</a>
            <a href="contact.html" className="text-[#f1f5f9] text-xs transition-colors mb-0.5 font-medium">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-['Sora'] text-xs font-semibold text-[#f1f5f9] mb-1.5">Resources</h4>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Documentation</a>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Support</a>
            <a href="faq.html" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">FAQ</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-['Sora'] text-xs font-semibold text-[#f1f5f9] mb-1.5">Legal</h4>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Privacy Policy</a>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] text-xs transition-colors mb-0.5">Terms of Service</a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#7c3aed]/18 max-w-[1100px] mx-auto text-xs text-[#94a3b8]">
          <div className="flex items-center gap-2 font-['Sora']">
            <div className="w-7 h-7 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded flex items-center justify-center text-[11px] text-white">⚡</div>
            © 2026 EduBoard. All rights reserved.
          </div>
          <div className="flex gap-4 text-base">
            <a href="#" title="GitHub" className="text-[#64748b] hover:text-[#f1f5f9] transition-colors">⌨</a>
            <a href="#" title="Twitter" className="text-[#64748b] hover:text-[#f1f5f9] transition-colors">𝕏</a>
            <a href="#" title="LinkedIn" className="text-[#64748b] hover:text-[#f1f5f9] transition-colors">in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}