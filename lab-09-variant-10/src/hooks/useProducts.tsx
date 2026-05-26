import { useState, useEffect } from 'react';
import type { Product } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      try {
        setProducts([
          { id: 1, name: 'Laptop', price: 1000 },
          { id: 2, name: 'Phone', price: 500 },
          { id: 3, name: 'Tablet', price: 300 },
        ]);
      } catch (e) {
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // derived state — не зберігаємо в useState
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    products,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    isLoading,
    error,
  };
};
