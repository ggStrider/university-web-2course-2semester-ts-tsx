import React from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const InfiniteScrollDemo: React.FC = () => {
  const { items, hasMore, isLoading, loadMore } = useInfiniteScroll();

  return (
    <div>
      <h2>Infinite Scroll (варіант 10)</h2>
      <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '12px' }}>
        Завантажено: {items.length} товарів
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              background: '#212121',
              padding: '10px 14px',
              marginBottom: '6px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{item.name}</span>
            <span style={{ color: '#aaa' }}>${item.price}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={loadMore}
          disabled={isLoading}
          style={{
            background: isLoading ? '#333' : '#fff',
            color: '#0f0f0f',
            border: 'none',
            padding: '10px 20px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            width: '100%',
            marginTop: '8px',
          }}
        >
          {isLoading ? 'Завантаження...' : 'Завантажити ще'}
        </button>
      )}

      {!hasMore && (
        <p style={{ color: '#aaa', textAlign: 'center', marginTop: '12px' }}>
          Всі товари завантажено
        </p>
      )}
    </div>
  );
};
