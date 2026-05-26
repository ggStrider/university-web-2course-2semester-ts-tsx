import { type Product } from '../types/Product';

export const addToCartLogic = (cart: Product[], product: Product): Product[] => {
  if (cart.find((item) => item.id === product.id)) return cart;
  return [...cart, product];
};

export const removeFromCartLogic = (cart: Product[], id: number): Product[] => {
  return cart.filter((item) => item.id !== id);
};
