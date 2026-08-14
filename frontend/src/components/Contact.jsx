import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return formData.fullname.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.message.trim() !== '' &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your message was sent successfully.');
        setFormData({ fullname: '', email: '', message: '' });
      } else {
        alert('Failed to send message: ' + (result.error || 'Please try again.'));
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      alert('An error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form scroll-anim anim-scale-up">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              value={formData.fullname}
              onChange={handleInputChange}
            />
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Your Message" 
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid() || isSubmitting}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
