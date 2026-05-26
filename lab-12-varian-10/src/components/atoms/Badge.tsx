import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent';
}

const colorMap: Record<string, { bg: string; color: string }> = {
  default: { bg: '#2a2a2a', color: '#a0a0a0' },
  success: { bg: '#1a3a1a', color: '#4caf50' },
  warning: { bg: '#3a2a00', color: '#ffb300' },
  danger: { bg: '#3a1a1a', color: '#ff4444' },
  accent: { bg: '#2a2f00', color: '#e8ff47' },
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const { bg, color } = colorMap[variant];
  return (
    <span
      style={{
        background: bg,
        color,
        fontSize: '11px',
        fontWeight: 600,
        padding: '3px 8px',
        borderRadius: '4px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}

