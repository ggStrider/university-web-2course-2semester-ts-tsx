import React from 'react';
import type { Product } from '../../types/Product';

type Props = {
  cart: Product[];
  onRemove: (id: number) => void;
  count: number;
};

export const Cart: React.FC<Props> = ({ cart, onRemove, count }) => {
  return (
    <div>
      <h2>Кошик ({count}):</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((c) => (
          <li
            key={c.id}
            style={{
              background: '#212121',
              padding: '8px 14px',
              marginBottom: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{c.name}</span>
            <button
              onClick={() => onRemove(c.id)}
              style={{
                background: 'transparent',
                color: '#aaa',
                border: '1px solid #444',
                padding: '3px 8px',
                cursor: 'pointer',
              }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
