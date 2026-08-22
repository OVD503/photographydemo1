import React from 'react';

export const WorkshopsSection: React.FC = () => {
  const plans = [
    {
      title: 'Studio Workshops',
      price: '₹14,999 / Seat',
      duration: 'In-Person (Delhi)',
      tag: 'POPULAR',
      desc: 'Hands-on intensive studio lighting training sessions. Learn to sculpt light, work with modifiers, and build professional portfolios.',
      features: [
        'Hands-on lighting setups',
        'Working with live models',
        'Understanding light shapes',
        'Portfolio review session'
      ],
      tiltClass: 'tilt-left',
      buttonText: 'Book In-Person'
    },
    {
      title: '1-on-1 Mentorship',
      price: '₹24,999 / Month',
      duration: 'Personalized Coaching',
      tag: 'INTENSIVE',
      desc: 'Custom-tailored mentoring program designed to accelerate your photographic career. Weekly video calls, assignments, and constant feedback.',
      features: [
        'Custom syllabus for your needs',
        'Direct project guidance',
        'Studio lighting mastery',
        'Business & marketing strategy'
      ],
      tiltClass: 'tilt-slight',
      buttonText: 'Apply Now'
    },
    {
      title: 'Online Masterclass',
      price: '₹4,999 / Course',
      duration: 'Self-Paced Learning',
      tag: 'FLEXIBLE',
      desc: 'Lifetime access to detailed studio lighting video modules, diagrams, downloadable gear guide checklists, and assignment portals.',
      features: [
        '25+ HD video lessons',
        'Lighting setup cheat sheets',
        'Access to private community',
        'Lifetime free updates'
      ],
      tiltClass: 'tilt-right',
      buttonText: 'Buy Course'
    }
  ];

  return (
    <section className="section-accent" id="workshops" style={{ paddingBottom: '7rem' }}>
      {/* Ripped Edge Transition */}
      <div className="ripped-divider-top accent" />

      <div className="content-container" style={{ marginTop: '20px' }}>
        
        {/* Header Block similar to "CHOOSE YOUR PLAN" */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'baseline',
          marginBottom: '50px',
          color: '#ffffff'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              color: '#ffffff',
              textShadow: '4px 4px 0px #000000',
              lineHeight: '0.85',
              marginBottom: '10px'
            }}>
              CHOOSE YOUR PLAN
            </h2>
            <h3 style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: '#000000',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: '0.9'
            }}>
              Master Studio Lighting
            </h3>
          </div>
          <div style={{
            maxWidth: '650px',
            borderLeft: '4px solid #ffffff',
            paddingLeft: '20px'
          }}>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.6',
              color: '#ffffff'
            }}>
              Unlock the full power of your vision. Learn how to shape light, craft mood, and build high-impact imagery. Through Siddology, I make advanced lighting concepts accessible, practical, and highly creative.
            </p>
          </div>
        </div>

        {/* Pricing Plan Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`taped-photo-container ${plan.tiltClass} tape-top-right`}
              style={{
                backgroundColor: '#ffffff',
                border: 'var(--border-thick)',
                boxShadow: '8px 8px 0px #000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                color: '#121212'
              }}
            >
              <div>
                {/* Header info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                    padding: '2px 8px',
                    border: '2px solid #000000',
                    fontWeight: 'bold'
                  }}>
                    {plan.tag}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: 600
                  }}>
                    {plan.duration}
                  </span>
                </div>

                {/* Plan Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  marginBottom: '5px'
                }}>
                  {plan.title}
                </h3>

                {/* Plan Price */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: 'var(--color-accent)',
                  fontWeight: 900,
                  marginBottom: '20px'
                }}>
                  {plan.price}
                </div>

                {/* Plan Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#444444',
                  lineHeight: '1.5',
                  marginBottom: '25px',
                  borderBottom: '2px dashed #cccccc',
                  paddingBottom: '20px'
                }}>
                  {plan.desc}
                </p>

                {/* Features List */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 30px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--color-accent)',
                        display: 'inline-block',
                        border: '1.5px solid #000'
                      }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Button */}
              <button className="btn-brutal" style={{
                width: '100%',
                fontSize: '1.35rem',
                padding: '10px',
                textAlign: 'center',
                boxShadow: '4px 4px 0px #121212',
                border: '3px solid #121212'
              }}>
                {plan.buttonText}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
