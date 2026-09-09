import React, { useState } from 'react';
import { X, Send, CheckCircle2, Loader2, AlertCircle, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hariyanivaidehi1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Project Collaboration Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8E323F', '#B76E79', '#FCEEE9', '#D4AF37']
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setErrorMessage('Could not connect to the form backend. You can send it directly via email:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  const mailtoFallback = `mailto:hariyanivaidehi1@gmail.com?subject=${encodeURIComponent(`Project Collaboration from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-md w-full max-h-[92vh] overflow-y-auto no-scrollbar border border-[#E8D9CF] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#FAF0EA] hover:bg-[#F2DFD4] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#FAF2ED] to-[#FCEEE9] p-4 sm:p-6 rounded-t-3xl border-b border-[#F0E2D8]">
          <span className="text-[9px] sm:text-[10px] font-sans-clean font-bold tracking-widest text-[#111111] uppercase bg-white px-2.5 py-0.5 rounded-full shadow-xs">
            Project Collaboration & Contact
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold text-[#111111] mt-1.5 sm:mt-2">
            Let's Collaborate
          </h3>
          <p className="font-sans-clean text-[11px] sm:text-xs text-[#7A6A68] mt-0.5 sm:mt-1">
            Have a project or collaboration in mind? Drop your message below!
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 font-sans-clean text-xs sm:text-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#2C2325]">
                Message Delivered!
              </h4>
              <p className="text-xs text-[#6B5A57] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#111111]">{formData.name}</span>! Your message has been sent directly to <span className="font-bold text-[#8E323F]">hariyanivaidehi1@gmail.com</span>. I will review and reply promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#8E323F] text-white rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md hover:bg-[#752632] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={mailtoFallback}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#8E323F] text-white rounded-lg font-bold text-[11px] hover:bg-[#752632]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send directly via Email App</span>
                  </a>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-[#4A3E3D] uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Miller"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9CF] focus:outline-none focus:ring-2 focus:ring-[#8E323F] bg-[#FDFBF9] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#4A3E3D] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9CF] focus:outline-none focus:ring-2 focus:ring-[#8E323F] bg-[#FDFBF9] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#4A3E3D] uppercase tracking-wider mb-1">
                  Your Message / Project Collaboration *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or how we can collaborate..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9CF] focus:outline-none focus:ring-2 focus:ring-[#8E323F] bg-[#FDFBF9] text-xs resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#8E323F] hover:bg-[#752632] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending to hariyanivaidehi1@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-[#F2E5DC] text-center text-[11px] text-[#7A6A68]">
            Direct email: <a href={`mailto:${contact.email}`} className="font-bold text-[#8E323F] underline">{contact.email}</a> • Located in Surat, Gujarat
          </div>
        </div>
      </div>
    </div>
  );
}
