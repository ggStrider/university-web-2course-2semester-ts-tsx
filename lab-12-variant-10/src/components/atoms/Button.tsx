import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: 600,
    letterSpacing: '0.03em',
    transition: 'background 0.15s, opacity 0.15s, transform 0.1s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '6px',
  },
  primary: { background: '#e8ff47', color: '#0f0f0f' },
  secondary: { background: '#2a2a2a', color: '#ffffff', border: '1px solid #3a3a3a' },
  danger: { background: '#ff4444', color: '#ffffff' },
  ghost: { background: 'transparent', color: '#e8ff47', border: '1px solid #e8ff47' },
  sm: { padding: '6px 14px', fontSize: '13px' },
  md: { padding: '10px 20px', fontSize: '14px' },
  lg: { padding: '14px 28px', fontSize: '16px' },
};

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  size = 'md',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        width: fullWidth ? '100%' : undefined,
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
}

