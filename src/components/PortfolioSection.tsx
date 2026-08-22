import React, { useState } from 'react';
import { IMAGES } from '../constants/images';

export const PortfolioSection: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  // Core 4 Categories (from the user text)
  const coreCategories = [
    {
      title: 'Travel & Stories',
      subtitle: 'Traditional Wisdom',
      image: IMAGES.travelStories,
      text: 'Documenting life, people, and the in-between moments that make travel real.'
    },
    {
      title: 'Photography',
      subtitle: 'Frames & Light',
      image: IMAGES.photography,
      text: 'From portraits to fashion, crafted with light, emotion, and storytelling.'
    },
    {
      title: 'Cinematography',
      subtitle: 'In Motion',
      image: IMAGES.cinematography,
      text: 'Cinematic storytelling, where emotion meets precision.'
    },
    {
      title: 'Hospitality & Architecture',
      subtitle: 'Spaces & Stays',
      image: IMAGES.hospitality,
      text: 'Showcasing spaces as experiences, not just structures.'
    }
  ];

  // Secondary categories list (from the user text)
  const genres = [
    { name: 'All', image: IMAGES.photography, desc: 'A curated selection across all genres.' },
    { name: 'Brand Catalogue and Campaign', image: IMAGES.brandCatalogue, desc: 'High-end commercial campaigns and catalogs for lifestyle brands.' },
    { name: 'Corporate and Factories', image: IMAGES.corporate, desc: 'Industrial, factory processes, corporate profiles, and executive portraits.' },
    { name: 'Documentary and Travel', image: IMAGES.documentary, desc: 'Photo essays, cultural documentation, and travel stories.' },
    { name: 'Events and Music', image: IMAGES.eventsMusic, desc: 'Concerts, festivals, live music energy, and key corporate events.' },
    { name: 'Food and Bev', image: IMAGES.foodBev, desc: 'Delectable, styled commercial food and beverage photography.' },
    { name: 'Real Estate and Architecture', image: IMAGES.realEstate, desc: 'Interior design, architectural structures, and luxury real estate showcases.' },
    { name: 'Still Life', image: IMAGES.stillLife, desc: 'Creative studio setups, lighting experiments, and product portraits.' }
  ];

  const activeGenreData = genres.find(g => g.name === selectedGenre) || genres[0];

  return (
    <section className="section-light" id="portfolio" style={{ zIndex: 5, paddingBottom: '7rem' }}>
      {/* Ripped Divider Top (makes the wavy tear over the dark hero section) */}
      <div className="ripped-divider-top" />

      <div className="content-container" style={{ marginTop: '20px' }}>
        
        {/* Title row mirroring "WIDE SELECTION OF BEST COMICS" */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          alignItems: 'baseline',
          marginBottom: '50px'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              color: 'var(--color-accent)',
              textShadow: '2px 2px 0px #fff, 4px 4px 0px #121212',
              marginBottom: '10px'
            }}>
              WIDE SELECTION
            </h2>
            <h3 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--color-text-dark)',
              marginTop: '-10px',
              letterSpacing: '0.05em'
            }}>
              OF BEST IMAGES & FILMS
            </h3>
          </div>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ color: 'var(--color-text-dark)', fontWeight: 500 }}>
              Explore core categories capturing life, design, and light with precision. Siddharth blends cinematic styling with raw storytelling across digital mediums.
            </p>
          </div>
        </div>

        {/* 4-column Comic Card Grid */}
        <div className="grid-brutal" style={{ marginBottom: '80px' }}>
          {coreCategories.map((cat, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: '#ffffff',
                border: 'var(--border-thick)',
                boxShadow: 'var(--shadow-flat)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-4px, -4px)';
                e.currentTarget.style.boxShadow = '12px 12px 0px #121212';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-flat)';
              }}
            >
              {/* Image Frame */}
              <div style={{ 
                borderBottom: '4px solid #121212', 
                height: '240px', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'var(--color-accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  padding: '3px 8px',
                  border: '2px solid #121212',
                  boxShadow: '2px 2px 0px #121212'
                }}>
                  {cat.subtitle}
                </div>
              </div>

              {/* Text Area */}
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#121212' }}>
                <div>
                  <h4 style={{ fontSize: '2rem', marginBottom: '10px', fontWeight: 800 }}>{cat.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#444444', marginBottom: '20px' }}>{cat.text}</p>
                </div>
                <button className="btn-brutal" style={{
                  width: '100%',
                  fontSize: '1.1rem',
                  padding: '6px',
                  backgroundColor: '#ffffff',
                  color: '#121212',
                  boxShadow: '3px 3px 0px #121212',
                  border: '3px solid #121212'
                }}>
                  See Category
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <hr style={{ border: 'none', borderTop: '4px dashed #121212', margin: '60px 0' }} />

        {/* Detailed Photography Portfolio Area */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          
          <div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: 'var(--color-text-dark)',
              marginBottom: '15px'
            }}>
              Photography Portfolio
            </h2>
            <p style={{
              maxWidth: '800px',
              fontSize: '1.1rem',
              color: '#333333',
              lineHeight: '1.7',
              marginBottom: '30px'
            }}>
              Over the course of my 8-year photography career, I've worked in a wide range of genres. Based on my extensive experience, I've created few distinct categories to encapsulate my diverse skill set better. Click a category pill below to view.
            </p>

            {/* Genre Pill Selection Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px'
            }}>
              {genres.map((g) => (
                <button
                  key={g.name}
                  onClick={() => setSelectedGenre(g.name)}
                  className={`category-pill ${selectedGenre === g.name ? 'active' : ''}`}
                >
                  {g.name === 'All' ? 'All Genres' : g.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dynamic Genre Display Panel */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
            backgroundColor: '#ffffff',
            border: 'var(--border-thick)',
            boxShadow: 'var(--shadow-flat)',
            padding: '30px'
          }}>
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 768px) {
                .genre-panel { grid-template-columns: 1fr 1fr !important; }
              }
            `}} />
            <div className="genre-panel" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center' }}>
              
              {/* Taped preview photo within the category panel */}
              <div className="taped-photo-container tilt-slight tape-double" style={{ margin: '15px' }}>
                <img 
                  src={activeGenreData.image} 
                  alt={activeGenreData.name} 
                  style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Category Bio/Description */}
              <div style={{ color: 'var(--color-text-dark)', padding: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  border: '2px solid #121212',
                  boxShadow: '3px 3px 0px #121212'
                }}>
                  GENRE PROFILE
                </span>
                
                <h3 style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  marginTop: '20px',
                  marginBottom: '15px',
                  lineHeight: '0.9'
                }}>
                  {activeGenreData.name}
                </h3>
                
                <p style={{
                  fontSize: '1.15rem',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  {activeGenreData.desc}
                </p>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <button className="btn-brutal" style={{ fontSize: '1.25rem' }}>
                    View Gallery
                  </button>
                  <button className="btn-brutal white" style={{ fontSize: '1.25rem' }}>
                    Book Shoot
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
