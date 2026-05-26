import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  name,
  required,
  disabled,
}: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label
          htmlFor={name}
          style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 500, letterSpacing: '0.04em' }}
        >
          {label}
          {required && <span style={{ color: '#e8ff47', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={{
          background: '#1a1a1a',
          border: `1px solid ${error ? '#ff4444' : '#2e2e2e'}`,
          borderRadius: '6px',
          padding: '10px 14px',
          fontSize: '14px',
          color: '#ffffff',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'inherit',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = error ? '#ff4444' : '#e8ff47')}
        onBlur={(e) => (e.target.style.borderColor = error ? '#ff4444' : '#2e2e2e')}
      />
      {error && (
        <span style={{ fontSize: '12px', color: '#ff4444' }}>{error}</span>
      )}
    </div>
  );
}

