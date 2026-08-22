import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'workshops', label: 'Workshops & Mentorship' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--color-bg-dark)',
      borderBottom: '3px solid #121212',
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveSection('hero')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.25rem',
            color: 'var(--color-text-light)',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          SIDD<span style={{ color: 'var(--color-accent)' }}>OLOGY</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
                    setActiveSection(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
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

          {/* Action button matching the "SUBSCRIBE" button in screenshot */}
          <button
            onClick={() => {
              setActiveSection('workshops');
              document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' });
            }}
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
      </div>
    </header>
  );
};
