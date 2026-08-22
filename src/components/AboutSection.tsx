import React from 'react';
import { IMAGES } from '../constants/images';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-light" id="about" style={{ paddingBottom: '6rem' }}>
      {/* Ripped Divider Transition */}
      <div className="ripped-divider-top" />

      <div className="content-container" style={{ marginTop: '20px' }}>
        
        <style dangerouslySetInnerHTML={{__html: `
          .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
          }
          @media (min-width: 1024px) {
            .about-grid {
              grid-template-columns: 420px 1fr;
            }
          }
        `}} />

        <div className="about-grid">
          
          {/* Left Column - Profile Picture & Quick Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Taped Profile Photo */}
            <div className="taped-photo-container tilt-left tape-double">
              <img 
                src={IMAGES.aboutPortrait} 
                alt="Siddharth Arora portrait" 
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div style={{ marginTop: '20px', color: '#121212', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '5px' }}>Siddharth Arora</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-accent)', fontWeight: 700 }}>
                  Founder, Siddology
                </p>
              </div>
            </div>

            {/* Quick Links Card */}
            <div style={{
              backgroundColor: '#ffffff',
              border: 'var(--border-thick)',
              boxShadow: 'var(--shadow-flat)',
              padding: '24px',
              color: '#121212'
            }}>
              <h4 style={{ fontSize: '1.75rem', marginBottom: '15px', fontWeight: 800 }}>Connect directly</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#777' }}>EMAIL</strong>
                  <a href="mailto:contact@siddology.in" style={{ color: 'var(--color-accent)', fontWeight: 700, textDecoration: 'none' }}>
                    contact@siddology.in
                  </a>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#777' }}>PHONE</strong>
                  <a href="tel:+919990072543" style={{ color: '#121212', fontWeight: 700, textDecoration: 'none' }}>
                    +91 99900 72543
                  </a>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#777' }}>SOCIAL CHANNELS</strong>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#121212', fontWeight: 'bold' }}>LinkedIn</a>
                    <span>•</span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Instagram</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column - Detailed Biography */}
          <div style={{ color: 'var(--color-text-dark)' }}>
            
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              backgroundColor: '#121212',
              color: '#ffffff',
              padding: '4px 10px',
              border: '2px solid #121212',
              boxShadow: '3px 3px 0px var(--color-accent)',
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              ABOUT THE ARTIST & EDUCATOR
            </span>
            
            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              color: 'var(--color-text-dark)',
              lineHeight: '0.9',
              marginBottom: '30px'
            }}>
              Hello! I'm Siddharth.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.1rem', lineHeight: '1.7' }}>
              
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                Founder of Siddology. I am a photographer, cinematographer, studio lighting educator, and content creator based in Delhi NCR.
              </p>

              <p>
                Over the years, I have worked across commercial photography, fashion photography, portrait photography, product photography, brand films, and cinematic content production.
              </p>

              {/* Neobrutalist Blockquote Highlight */}
              <div style={{
                backgroundColor: 'var(--color-bg-dark)',
                color: '#ffffff',
                border: 'var(--border-thick)',
                boxShadow: 'var(--shadow-flat-accent)',
                padding: '30px',
                margin: '20px 0',
                position: 'relative'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '8rem',
                  color: 'var(--color-accent)',
                  position: 'absolute',
                  top: '-30px',
                  left: '15px',
                  opacity: 0.3,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>"</span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.25rem',
                  lineHeight: '1',
                  textTransform: 'uppercase',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '15px'
                }}>
                  What started as a passion for creating images gradually evolved into an obsession with understanding light.
                </p>
                <p style={{ fontSize: '1rem', color: '#cccccc', position: 'relative', zIndex: 2 }}>
                  While many photographers focus on cameras and gear, I became fascinated by how lighting shapes mood, storytelling, and visual impact. This curiosity led me to experiment, study, and build hundreds of lighting setups for brands, models, businesses, and creative projects.
                </p>
              </div>

              <p>
                Today, through Siddology, I not only create commercial photography and cinematography projects but also teach photographers, filmmakers, and content creators how to master studio lighting in a practical and easy-to-understand way. My workshops, mentoring sessions, online tutorials, and hands-on training programs are designed to help creators move beyond theory and confidently create professional-quality images and videos.
              </p>

              <p>
                I regularly conduct photography workshops, studio lighting workshops, fashion photography training sessions, and portfolio-building experiences for beginners, enthusiasts, and working professionals. My goal is simple: make advanced lighting concepts accessible, practical, and creative.
              </p>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '3px dashed #121212'
              }}>
                <p style={{ fontWeight: 600 }}>
                  Whether you are a brand looking for visual content, a photographer wanting to improve your lighting skills, or a creator seeking professional guidance, Siddology is built around one belief:
                </p>
                <p style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.75rem', 
                  color: 'var(--color-accent)', 
                  marginTop: '10px',
                  textTransform: 'uppercase'
                }}>
                  Great visuals are created when creativity meets a deep understanding of light.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
