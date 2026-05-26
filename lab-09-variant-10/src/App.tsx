import React from 'react';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { InfiniteScrollDemo } from './components/InfiniteScrollDemo/InfiniteScrollDemo';

const App: React.FC = () => {
  return (
    <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Лабораторна робота №9</h1>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#aaa', fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Загальне завдання — Каталог товарів
        </h2>
        <ProductsPage />
      </section>

      <hr style={{ border: '1px solid #333', marginBottom: '48px' }} />

      <section>
        <h2 style={{ color: '#aaa', fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Індивідуальне завдання — useInfiniteScroll (варіант 10)
        </h2>
        <InfiniteScrollDemo />
      </section>
    </div>
  );
};

export default App;
