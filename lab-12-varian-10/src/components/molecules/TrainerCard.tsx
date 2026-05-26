import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Trainer } from '../../types/Trainer';
import { Badge } from '../atoms/Badge';

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer: t }: TrainerCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/trainer/${t.id}`)}
      style={{
        background: '#181818',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#3a3a3a';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <img
          src={t.image ?? `https://ui-avatars.com/api/?name=${t.firstName}+${t.lastName}&background=212121&color=e8ff47`}
          alt={`${t.firstName} ${t.lastName}`}
          style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #2a2a2a' }}
        />
        <div>
          <h3 style={{ margin: 0, fontSize: '17px', color: '#fff' }}>
            {t.firstName} {t.lastName}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <span style={{ color: '#e8ff47', fontSize: '13px' }}>★ {t.rating}</span>
            <span style={{ color: '#606060', fontSize: '13px' }}>• {t.experience}y exp</span>
          </div>
        </div>
      </div>

      <p style={{ margin: 0, fontSize: '13px', color: '#707070', lineHeight: 1.5 }}>{t.bio}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {t.specialization.map((spec) => (
          <Badge key={spec}>{spec}</Badge>
        ))}
      </div>
    </div>
  );
}

