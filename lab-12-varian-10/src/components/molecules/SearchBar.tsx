import React, { useState } from 'react';
import { useDebounce } from '../../hooks';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  delay?: number;
}

export function SearchBar({ placeholder = 'Search...', onSearch, delay = 350 }: SearchBarProps) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, delay);

  React.useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          left: '14px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#606060',
          fontSize: '15px',
          pointerEvents: 'none',
        }}
      >
        🔍
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          background: '#1a1a1a',
          border: '1px solid #2e2e2e',
          borderRadius: '8px',
          padding: '10px 14px 10px 40px',
          fontSize: '14px',
          color: '#fff',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'inherit',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#e8ff47')}
        onBlur={(e) => (e.target.style.borderColor = '#2e2e2e')}
      />
    </div>
  );
}

