import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук..."
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      style={{
        background: '#212121',
        color: '#fff',
        border: '1px solid #444',
        padding: '8px 12px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '16px',
      }}
    />
  );
};
