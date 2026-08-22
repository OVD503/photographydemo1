import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'workshops', label: 'Workshops & Mentorship' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="site-logo"
        >
          SIDD<span style={{ color: 'var(--color-accent)' }}>OLOGY</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '24px',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    color: activeSection === item.id ? 'var(--color-accent)' : 'var(--color-text-light)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) e.currentTarget.style.color = 'var(--color-text-light)';
                  }}
                >
                  {item.label === 'Workshops & Mentorship' ? 'Workshops' : item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Action button */}
          <button
            onClick={() => handleNavClick('workshops')}
            className="btn-brutal white"
            style={{
              padding: '6px 16px',
              fontSize: '1.2rem',
              border: '3px solid #121212',
              boxShadow: '3px 3px 0px #121212'
            }}
          >
            Workshops
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('workshops')}
            className="btn-brutal white mobile-cta-btn"
            style={{
              padding: '10px 20px',
              fontSize: '1.3rem',
              border: '3px solid #121212',
              boxShadow: '4px 4px 0px #121212'
            }}
          >
            Explore Workshops
          </button>
        </div>
      )}
    </header>
  );
};

