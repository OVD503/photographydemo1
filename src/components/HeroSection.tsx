import React, { useRef, useState } from 'react';
import { IMAGES } from '../constants/images';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Automatically enable voice/audio on hover
      videoRef.current.muted = false;
      setIsMuted(false);

      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if browser blocks unmuted playback before user interaction
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMutedState = !isMuted;
      videoRef.current.muted = nextMutedState;
      setIsMuted(nextMutedState);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
          }
        });
      }
    }
  };

  return (
    <section className="section-dark" id="hero" style={{ paddingTop: '2.5rem', paddingBottom: '6rem' }}>

      {/* Floating Tape Picture Decorations in the "Void" */}
      <div className="hanging-tape-pic animate-float-1" style={{
        top: '40px',
        right: '40px',
        width: '130px',
        display: 'none', // hidden on small screens
      }}>
        <img
          src={IMAGES.brandCatalogue}
          alt="Tape Deco 1"
          style={{ width: '100%', height: '140px', objectFit: 'cover', border: '3px solid #121212' }}
        />
      </div>
      <div className="hanging-tape-pic animate-float-2" style={{
        top: '180px',
        right: '15px',
        width: '100px',
        transform: 'rotate(8deg)',
        display: 'none', // hidden on small screens
      }}>
        <img
          src={IMAGES.stillLife}
          alt="Tape Deco 2"
          style={{ width: '100%', height: '110px', objectFit: 'cover', border: '3px solid #121212' }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          .hanging-tape-pic { display: block !important; }
        }
        .hero-video-frame {
          position: relative;
          width: 100%;
          border: 4px solid #121212;
          box-shadow: 10px 10px 0px var(--color-accent);
          background-color: #000;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-video-frame:hover {
          transform: translateY(-2px);
          box-shadow: 12px 12px 0px #ffffff;
        }
        .video-control-bar {
          position: absolute;
          bottom: 12px;
          right: 12px;
          z-index: 20;
          display: flex;
          gap: 10px;
          align-items: center;
        }
      `}} />

      <div className="content-container">

        {/* HERO VIDEO SECTION (Positioned ABOVE Hero Text Section) */}
        <div style={{ marginBottom: '45px' }}>
          <div
            className="hero-video-frame"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={togglePlay}
          >
            {/* Clean Video Canvas with NO typography overlaying the video */}
            <video
              ref={videoRef}
              src="/hero video.mp4"
              playsInline
              loop
              preload="auto"
              style={{
                width: '100%',
                maxHeight: '620px',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Hover Play & Voice Controls (Positioned at corners to keep video clear) */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(9, 9, 9, 0.85)',
              border: '2px solid var(--color-accent)',
              padding: '6px 14px',
              backdropFilter: 'blur(4px)',
              pointerEvents: 'none'
            }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: isPlaying ? '#00ff66' : 'var(--color-accent)',
                display: 'inline-block',
                boxShadow: isPlaying ? '0 0 8px #00ff66' : 'none'
              }} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                color: '#fff',
                letterSpacing: '0.05em'
              }}>
                {isPlaying ? '' : ' '}
              </span>
            </div>

            {/* Sound / Voice Mute-Unmute Toggle Button */}
            <div className="video-control-bar">
              <button
                onClick={toggleMute}
                type="button"
                style={{
                  backgroundColor: isMuted ? '#121212' : 'var(--color-accent)',
                  color: '#fff',
                  border: '2px solid #fff',
                  padding: '8px 14px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '3px 3px 0px #000',
                  transition: 'all 0.15s ease'
                }}
              >
                {isMuted ? '' : ''}
              </button>
            </div>
          </div>
        </div>

        {/* HERO TEXT SECTION (Positioned BELOW Hero Video) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'start',
          marginBottom: '50px'
        }}>
          {/* Main Title Block */}
          <div>
            <h1 style={{
              fontSize: 'clamp(4.5rem, 10vw, 9.5rem)',
              color: 'var(--color-accent)',
              letterSpacing: '-0.03em',
              fontWeight: 900,
              textShadow: '4px 4px 0px #000000',
              lineHeight: '0.85',
              marginBottom: '10px'
            }}>
              SIDDHARTH ARORA
            </h1>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 4.25rem)',
              color: 'var(--color-text-light)',
              letterSpacing: '-0.02em',
              fontWeight: 700,
              lineHeight: '0.9',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Photographer, Videographer & Educator
            </h2>
          </div>

          {/* Description Block */}
          <div style={{
            maxWidth: '750px',
            borderLeft: '4px solid var(--color-accent)',
            paddingLeft: '20px',
            marginTop: '10px'
          }}>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-light)',
              fontWeight: 300,
              lineHeight: '1.6',
              marginBottom: '15px'
            }}>
              Hey, I’m <strong style={{ color: 'var(--color-accent)' }}>Siddharth Arora</strong>, the face behind Siddology.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#d0d0d0',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              I create visuals that don’t just look good; they evoke a sense of emotion. From fashion studios to real-world stories, I blend cinematic lighting with raw emotion to craft images and films that stay with you long after you’ve seen them.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic'
            }}>
              Based in Delhi, working anywhere the story takes me.
            </p>
          </div>
        </div>

        {/* Hero Graphic Showcase Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginTop: '60px',
          paddingBottom: '30px'
        }}>
          {/* Card 1 - Travel & Stories */}
          <div className="taped-photo-container tilt-left tape-double">
            <img
              src={IMAGES.travelStories}
              alt="Travel & Stories Showcase"
              style={{ height: '320px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '15px', color: 'var(--color-text-dark)' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                padding: '3px 8px',
                verticalAlign: 'middle',
                marginRight: '6px'
              }}>DOCUMENTARY</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '6px', fontWeight: 800 }}>TRAVEL & STORIES</h3>
            </div>
          </div>

          {/* Card 2 - Frames & Light */}
          <div className="taped-photo-container tilt-slight tape-top-left" style={{ transform: 'translateY(-15px)' }}>
            <img
              src={IMAGES.photography}
              alt="Photography Showcase"
              style={{ height: '320px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '15px', color: 'var(--color-text-dark)' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                backgroundColor: '#121212',
                color: '#fff',
                padding: '3px 8px',
                marginRight: '6px'
              }}>PORTFOLIO</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '6px', fontWeight: 800 }}>FRAMES & LIGHT</h3>
            </div>
          </div>

          {/* Card 3 - In Motion */}
          <div className="taped-photo-container tilt-right tape-top-right">
            <img
              src={IMAGES.cinematography}
              alt="Cinematography Showcase"
              style={{ height: '320px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '15px', color: 'var(--color-text-dark)' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                padding: '3px 8px',
                marginRight: '6px'
              }}>CINEMA</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '6px', fontWeight: 800 }}>IN MOTION</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

