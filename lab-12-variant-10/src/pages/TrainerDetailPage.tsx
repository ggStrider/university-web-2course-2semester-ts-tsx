import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTrainer } from '../hooks';
import { Badge } from '../components/atoms/Badge';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';

export function TrainerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { trainer, loading, error } = useTrainer(Number(id));

  if (loading) return <LoadingSpinner text="Loading trainer..." />;
  if (error || !trainer)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        {error ?? 'Trainer not found'}
      </div>
    );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'none',
          border: 'none',
          color: '#707070',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '32px',
          padding: 0,
          fontFamily: 'inherit',
        }}
      >
        ← Back
      </button>

      <div style={{ background: '#181818', border: '1px solid #2a2a2a', borderRadius: '16px', padding: '40px' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
          <img
            src={trainer.image ?? `https://ui-avatars.com/api/?name=${trainer.firstName}+${trainer.lastName}&size=120&background=212121&color=e8ff47`}
            alt={`${trainer.firstName} ${trainer.lastName}`}
            style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '3px solid #2a2a2a' }}
          />
          <div>
            <h1 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: 700 }}>
              {trainer.firstName} {trainer.lastName}
            </h1>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#e8ff47', fontSize: '16px' }}>★ {trainer.rating}</span>
              <span style={{ color: '#606060' }}>•</span>
              <span style={{ color: '#a0a0a0', fontSize: '14px' }}>{trainer.experience} years experience</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {trainer.specialization.map((spec) => (
                <Badge key={spec}>{spec}</Badge>
              ))}
            </div>
          </div>
        </div>

        <p style={{ color: '#a0a0a0', lineHeight: 1.7, marginBottom: '32px', fontSize: '15px' }}>
          {trainer.bio}
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', margin: '0 0 32px' }} />

        <h3 style={{ fontSize: '14px', color: '#606060', letterSpacing: '0.08em', marginBottom: '20px' }}>
          CONTACT
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px', fontSize: '14px', color: '#a0a0a0' }}>
          <span>📧 {trainer.email}</span>
          <span>📞 {trainer.phone}</span>
        </div>

        <h3 style={{ fontSize: '14px', color: '#606060', letterSpacing: '0.08em', marginBottom: '20px' }}>
          SCHEDULE
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
          {trainer.schedule.map(({ day, timeSlots }) => (
            <div key={day} style={{ background: '#111', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '12px', color: '#606060', marginBottom: '8px', fontWeight: 600, letterSpacing: '0.06em' }}>
                {day.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {timeSlots.map((slot) => (
                  <span
                    key={slot}
                    style={{
                      background: '#2a2a2a',
                      color: '#e8ff47',
                      fontSize: '12px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

