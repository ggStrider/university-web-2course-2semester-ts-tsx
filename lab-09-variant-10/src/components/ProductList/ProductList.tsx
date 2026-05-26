import React from 'react';
import type { Product } from '../../types/Product';

type Props = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export const ProductList = React.memo(({ products, onAdd }: Props) => {
  return (
    <div>
      <h2>Товари:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              background: '#212121',
              padding: '10px 14px',
              marginBottom: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {p.name} — ${p.price}
            </span>
            <button
              onClick={() => onAdd(p)}
              style={{
                background: '#fff',
                color: '#0f0f0f',
                border: 'none',
                padding: '4px 10px',
                cursor: 'pointer',
              }}
            >
              У кошик
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
