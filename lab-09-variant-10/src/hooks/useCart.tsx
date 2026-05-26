import { useState } from 'react';
import type { Product } from '../types/Product';
import { addToCartLogic, removeFromCartLogic } from '../services/cartService';

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => addToCartLogic(prev, product));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => removeFromCartLogic(prev, id));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    cartCount: cart.length,
  };
};
