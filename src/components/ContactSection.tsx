import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section-dark" id="contact" style={{ paddingBottom: '6rem', backgroundColor: '#090909' }}>
      {/* Ripped Edge Transition */}
      <div className="ripped-divider-top dark" />

      <div className="content-container" style={{ marginTop: '20px' }}>
        
        <style dangerouslySetInnerHTML={{__html: `
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
          }
          @media (min-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr 1.2fr !important;
            }
          }
        `}} />

        <div className="contact-grid">
          
          {/* Left Column: Direct Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                color: 'var(--color-accent)',
                textShadow: '3px 3px 0px #000000',
                marginBottom: '10px'
              }}>
                CONTACT
              </h2>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#ffffff',
                lineHeight: '0.9',
                textTransform: 'uppercase',
                marginBottom: '30px'
              }}>
                Let's Make Something Great
              </h3>
              
              <p style={{ color: '#cccccc', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                I'm always looking for new and exciting opportunities. Whether you are a brand seeking high-quality commercial assets, a creator looking to master lighting, or have a project story to tell, let's connect!
              </p>
            </div>

            {/* Brutalist Address Details Box */}
            <div style={{
              backgroundColor: 'var(--color-accent)',
              border: 'var(--border-thick)',
              boxShadow: 'var(--shadow-flat-white)',
              padding: '30px',
              color: '#ffffff'
            }}>
              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '2.25rem', 
                marginBottom: '20px', 
                color: '#000000',
                textShadow: '1px 1px 0px #fff'
              }}>
                SIDDHARTH ARORA
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-body)' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(0,0,0,0.6)' }}>LOCATION</strong>
                  <span style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#000000' }}>Delhi, India (Working Anywhere)</span>
                </div>
                
                <div>
                  <strong style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(0,0,0,0.6)' }}>EMAIL ADDRESS</strong>
                  <span style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
                    <a href="mailto:contact@siddology.in" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                      contact@siddology.in
                    </a>
                  </span>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(0,0,0,0.6)' }}>PHONE / WHATSAPP</strong>
                  <span style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#000000' }}>+91-9990072543</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{
            backgroundColor: '#161616',
            border: 'var(--border-thick)',
            boxShadow: 'var(--shadow-flat-accent)',
            padding: '40px 30px'
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  border: '4px solid #121212',
                  boxShadow: '4px 4px 0px #121212'
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>Thank You!</h3>
                <p style={{ fontSize: '1.1rem', color: '#cccccc' }}>
                  Your message has been sent successfully. Siddharth will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="label-brutal" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="input-brutal"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="label-brutal" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="input-brutal"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="label-brutal" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="input-brutal"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="label-brutal" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="input-brutal"
                    placeholder="Write your message details..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-brutal" style={{
                  width: '100%',
                  fontSize: '1.5rem',
                  padding: '12px',
                  marginTop: '10px'
                }}>
                  Submit Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
