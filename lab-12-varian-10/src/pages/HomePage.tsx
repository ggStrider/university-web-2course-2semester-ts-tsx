import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/Button';

export function HomePage() {
  const stats = [
    { value: '1200+', label: 'Active Members' },
    { value: '24', label: 'Expert Trainers' },
    { value: '40+', label: 'Weekly Classes' },
    { value: '8', label: 'Years Experience' },
  ];

  const highlights = [
    {
      icon: '🏋️',
      title: 'State-of-the-art Equipment',
      desc: 'Over 200 machines and free weights for every workout type.',
    },
    {
      icon: '🧘',
      title: 'Expert Trainers',
      desc: 'Certified professionals across strength, yoga, crossfit and dance.',
    },
    {
      icon: '💆',
      title: 'Recovery & Spa',
      desc: 'Premium members enjoy sauna, steam room and massage services.',
    },
    {
      icon: '📱',
      title: 'Online Scheduling',
      desc: 'Book classes, manage your plan and track progress online.',
    },
  ];

  return (
    <div style={{ color: '#fff' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #141400 100%)',
          padding: '100px 24px',
          textAlign: 'center',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#1e1e00',
              color: '#e8ff47',
              fontSize: '12px',
              fontWeight: 600,
              padding: '4px 14px',
              borderRadius: '20px',
              marginBottom: '24px',
              letterSpacing: '0.08em',
              border: '1px solid #e8ff4720',
            }}
          >
            ODESA FITNESS CLUB
          </div>
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Train Hard.{' '}
            <span style={{ color: '#e8ff47' }}>Live Strong.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#707070', marginBottom: '40px', lineHeight: 1.6 }}>
            Your complete fitness management platform. Browse plans, find trainers, join classes — everything in one place.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
              <Button size="lg">View Plans</Button>
            </Link>
            <Link to="/trainers" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="ghost">Meet Trainers</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid #1e1e1e' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#e8ff47', letterSpacing: '-0.02em' }}>
                {value}
              </div>
              <div style={{ fontSize: '13px', color: '#707070', marginTop: '4px', letterSpacing: '0.04em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>
            Why Choose FitClub?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {highlights.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: '#181818',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  padding: '28px',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{icon}</div>
                <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: '#fff' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#707070', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>
            Ready to start?
          </h2>
          <p style={{ color: '#707070', marginBottom: '32px', fontSize: '15px' }}>
            Pick the plan that fits your lifestyle and begin your fitness journey today.
          </p>
          <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
            <Button size="lg" fullWidth>Browse Plans</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

