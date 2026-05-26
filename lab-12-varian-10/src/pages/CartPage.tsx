import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks';
import { Button } from '../components/atoms/Button';

export function CartPage() {
  const navigate = useNavigate();
  const { items, removeItem, increaseQuantity, decreaseQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🛒</div>
        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Your cart is empty</h2>
        <p style={{ color: '#707070', marginBottom: '32px' }}>Browse our plans and add one to get started.</p>
        <Button onClick={() => navigate('/subscriptions')}>Browse Plans</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>
          Cart <span style={{ color: '#606060', fontSize: '18px', fontWeight: 400 }}>({totalItems})</span>
        </h1>
        <button
          onClick={clearCart}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff4444',
            cursor: 'pointer',
            fontSize: '13px',
            fontFamily: 'inherit',
          }}
        >
          Clear all
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {items.map(({ subscription: s, quantity }) => (
          <div
            key={s.id}
            style={{
              background: '#181818',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>{s.name}</div>
              <div style={{ color: '#707070', fontSize: '13px', marginTop: '2px' }}>
                {s.type} • ₴{s.price}/mo
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => decreaseQuantity(s.id)}
                style={{
                  width: 28,
                  height: 28,
                  background: '#2a2a2a',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                −
              </button>
              <span style={{ width: '24px', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
              <button
                onClick={() => increaseQuantity(s.id)}
                style={{
                  width: 28,
                  height: 28,
                  background: '#2a2a2a',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                +
              </button>
            </div>

            <div style={{ fontWeight: 700, fontSize: '16px', minWidth: '80px', textAlign: 'right' }}>
              ₴{s.price * quantity}
            </div>

            <button
              onClick={() => removeItem(s.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#606060',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '0 4px',
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          background: '#181818',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ color: '#a0a0a0' }}>Subtotal</span>
          <span>₴{totalPrice}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '20px', fontWeight: 700 }}>
          <span>Total</span>
          <span style={{ color: '#e8ff47' }}>₴{totalPrice}</span>
        </div>
        <Button fullWidth size="lg" onClick={() => navigate('/checkout')}>
          Proceed to Checkout →
        </Button>
      </div>
    </div>
  );
}

