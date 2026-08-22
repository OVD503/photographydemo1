import React from 'react';

export const Footer: React.FC = () => {
  const socials = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Pinterest', url: 'https://pinterest.com' }
  ];

  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: '4px solid #121212',
      padding: '40px 24px',
      color: '#ffffff'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Social Icons Grid */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="category-pill"
              style={{
                margin: 0,
                fontSize: '1rem',
                padding: '6px 12px',
                backgroundColor: '#ffffff',
                color: '#000000',
                boxShadow: '3px 3px 0px var(--color-accent)'
              }}
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Footer Brand Info */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          letterSpacing: '0.05em',
          textAlign: 'center'
        }}>
          SIDD<span style={{ color: 'var(--color-accent)' }}>OLOGY</span> BY SIDDHARTH ARORA
        </div>

        {/* Copyright */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
          fontFamily: 'var(--font-body)'
        }}>
          &copy; 2024 by Siddharth Arora. All rights reserved. Created with passion for light & storytelling.
        </p>
      </div>
    </footer>
  );
};
