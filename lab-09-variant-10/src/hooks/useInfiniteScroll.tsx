import { useState } from 'react';

// Тип одного елемента каталогу
export type CatalogItem = {
  id: number;
  name: string;
  price: number;
};

// Симулює "базу даних" з 30 товарів
const ALL_ITEMS: CatalogItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Product #${i + 1}`,
  price: Math.round((Math.random() * 900 + 100) * 100) / 100,
}));

const PAGE_SIZE = 8;

export const useInfiniteScroll = () => {
  const [items, setItems] = useState<CatalogItem[]>(ALL_ITEMS.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // hasMore — derived state, не useState
  // Я не використовував тут useMemo для обчислення hasMore,
  // тому що це тривіальне порівняння двох чисел.
  // useMemo мав би більше накладних витрат (порівняння залежностей,
  // збереження в пам'яті), ніж саме обчислення.
  const hasMore = items.length < ALL_ITEMS.length;

  const loadMore = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    // Симулюємо мережевий запит
    setTimeout(() => {
      const nextPage = page + 1;
      const nextItems = ALL_ITEMS.slice(0, nextPage * PAGE_SIZE);
      setItems(nextItems);
      setPage(nextPage);
      setIsLoading(false);
    }, 800);
  };

  return {
    items,
    hasMore,
    isLoading,
    loadMore,
  };
};
