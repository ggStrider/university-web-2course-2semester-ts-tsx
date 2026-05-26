import React from 'react';
import type { Member } from '../../types/Member';
import { Badge } from '../atoms/Badge';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member: m }: MemberCardProps) {
  const statusVariant: Record<string, 'success' | 'danger' | 'warning'> = {
    active: 'success',
    inactive: 'warning',
    suspended: 'danger',
  };
  const tierVariant: Record<string, 'accent' | 'default'> = {
    premium: 'accent',
    standard: 'default',
    basic: 'default',
  };

  return (
    <div
      style={{
        background: '#181818',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <img
        src={m.image ?? `https://ui-avatars.com/api/?name=${m.firstName}+${m.lastName}&background=212121&color=e8ff47`}
        alt={`${m.firstName} ${m.lastName}`}
        style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>
            {m.firstName} {m.lastName}
          </span>
          <Badge variant={statusVariant[m.status]}>{m.status}</Badge>
          <Badge variant={tierVariant[m.membershipType]}>{m.membershipType}</Badge>
        </div>
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#707070' }}>
          {m.email} • joined {new Date(m.joinDate).toLocaleDateString('uk-UA')}
        </div>
      </div>
    </div>
  );
}

