import React from 'react';
import type { WorkoutClass } from '../../types/WorkoutClass';
import { Badge } from '../atoms/Badge';

interface ClassCardProps {
  workoutClass: WorkoutClass;
}

export function ClassCard({ workoutClass: c }: ClassCardProps) {
  const levelColor: Record<string, 'success' | 'warning' | 'danger'> = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'danger',
  };
  const spotsLeft = c.maxParticipants - c.currentParticipants;
  const fillPercent = (c.currentParticipants / c.maxParticipants) * 100;

  return (
    <div
      style={{
        background: '#181818',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.2s, border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#3a3a3a';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
      }}
    >
      {c.image && (
        <div style={{ height: '160px', overflow: 'hidden' }}>
          <img
            src={c.image}
            alt={c.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>{c.name}</h3>
          <Badge variant={levelColor[c.level]}>{c.level}</Badge>
        </div>

        <p style={{ margin: 0, fontSize: '12px', color: '#707070', lineHeight: 1.5 }}>{c.description}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#a0a0a0' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span>👤</span><span>{c.trainer}</span>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span>🕐</span><span>{c.schedule} • {c.duration} min</span>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '12px', color: '#707070' }}>
            <span>{c.currentParticipants}/{c.maxParticipants} enrolled</span>
            <span style={{ color: spotsLeft <= 2 ? '#ff4444' : '#a0a0a0' }}>
              {spotsLeft} spots left
            </span>
          </div>
          <div style={{ background: '#2a2a2a', borderRadius: '4px', height: '4px' }}>
            <div
              style={{
                width: `${fillPercent}%`,
                height: '100%',
                background: fillPercent > 80 ? '#ff4444' : '#e8ff47',
                borderRadius: '4px',
                transition: 'width 0.3s',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

