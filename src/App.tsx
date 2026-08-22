import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Automatically update active section on scroll
  useEffect(() => {
    const sections = ['hero', 'portfolio', 'workshops', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for sticky header
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Layout */}
      <main style={{ flexGrow: 1 }}>
        <HeroSection />
        <PortfolioSection />
        <WorkshopsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
