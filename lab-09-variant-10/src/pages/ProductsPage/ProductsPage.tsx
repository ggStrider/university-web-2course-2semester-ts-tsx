import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { ProductList } from '../../components/ProductList/ProductList';
import { Cart } from '../../components/Cart/Cart';

export const ProductsPage = () => {
  const { filteredProducts, searchQuery, setSearchQuery, isLoading } = useProducts();
  const { cart, addToCart, removeFromCart, cartCount } = useCart();

  if (isLoading) return <div style={{ color: '#fff', padding: '20px' }}>Loading...</div>;

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <ProductList products={filteredProducts} onAdd={addToCart} />
        </div>
        <div style={{ width: '280px' }}>
          <Cart cart={cart} onRemove={removeFromCart} count={cartCount} />
        </div>
      </div>
    </>
  );
};
