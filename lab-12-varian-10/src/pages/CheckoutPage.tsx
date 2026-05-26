import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks';
import { api } from '../api/fitnessApi';
import { Button } from '../components/atoms/Button';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z
    .string()
    .min(10, 'Phone must be at least 10 characters')
    .regex(/^[+\d\s\-()]+$/, 'Invalid phone number'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  notes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  background: '#1a1a1a',
  border: `1px solid ${hasError ? '#ff4444' : '#2e2e2e'}`,
  borderRadius: '6px',
  padding: '10px 14px',
  fontSize: '14px',
  color: '#ffffff',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
});

const labelStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#a0a0a0',
  fontWeight: 500,
  marginBottom: '6px',
  display: 'block',
};

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: CheckoutFormData) => {
    if (items.length === 0) return;
    setSubmitting(true);
    try {
      const order = await api.placeOrder({
        items,
        customer: data,
        total: totalPrice,
      });
      setOrderId(order.id ?? 'ORD-????');
      clearCart();
    } catch {
      alert('Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ maxWidth: '540px', margin: '0 auto', padding: '80px 24px', textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Order Confirmed!</h2>
        <p style={{ color: '#707070', marginBottom: '8px' }}>Your membership has been registered.</p>
        <p style={{ color: '#e8ff47', fontFamily: 'monospace', fontSize: '14px', marginBottom: '32px' }}>
          {orderId}
        </p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: '540px', margin: '0 auto', padding: '80px 24px', textAlign: 'center', color: '#fff' }}>
        <p style={{ color: '#707070', marginBottom: '24px' }}>Your cart is empty.</p>
        <Button onClick={() => navigate('/subscriptions')}>Browse Plans</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px' }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr min(340px, 100%)', gap: '32px', alignItems: 'start' }}>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div
            style={{
              background: '#181818',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '32px',
            }}
          >
            <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '24px', color: '#a0a0a0', letterSpacing: '0.06em' }}>
              PERSONAL DETAILS
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>
                  First Name <span style={{ color: '#e8ff47' }}>*</span>
                </label>
                <input {...register('firstName')} style={inputStyle(!!errors.firstName)} placeholder="Yaroslav" />
                {errors.firstName && (
                  <span style={{ fontSize: '12px', color: '#ff4444', marginTop: '4px', display: 'block' }}>
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label style={labelStyle}>
                  Last Name <span style={{ color: '#e8ff47' }}>*</span>
                </label>
                <input {...register('lastName')} style={inputStyle(!!errors.lastName)} placeholder="Oslam" />
                {errors.lastName && (
                  <span style={{ fontSize: '12px', color: '#ff4444', marginTop: '4px', display: 'block' }}>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Email <span style={{ color: '#e8ff47' }}>*</span>
              </label>
              <input {...register('email')} type="email" style={inputStyle(!!errors.email)} placeholder="you@example.com" />
              {errors.email && (
                <span style={{ fontSize: '12px', color: '#ff4444', marginTop: '4px', display: 'block' }}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Phone <span style={{ color: '#e8ff47' }}>*</span>
              </label>
              <input {...register('phone')} type="tel" style={inputStyle(!!errors.phone)} placeholder="+380 50 123 4567" />
              {errors.phone && (
                <span style={{ fontSize: '12px', color: '#ff4444', marginTop: '4px', display: 'block' }}>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Address <span style={{ color: '#e8ff47' }}>*</span>
              </label>
              <input {...register('address')} style={inputStyle(!!errors.address)} placeholder="Odesa, vul. Pushkinska 10" />
              {errors.address && (
                <span style={{ fontSize: '12px', color: '#ff4444', marginTop: '4px', display: 'block' }}>
                  {errors.address.message}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Notes (optional)</label>
              <textarea
                {...register('notes')}
                rows={3}
                placeholder="Any special requests..."
                style={{
                  ...inputStyle(false),
                  resize: 'vertical',
                }}
              />
            </div>

            <Button type="submit" fullWidth size="lg" disabled={!isValid || submitting}>
              {submitting ? 'Placing order...' : 'Confirm Order'}
            </Button>
          </div>
        </form>

        {/* Order summary */}
        <div style={{ background: '#181818', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '20px', color: '#a0a0a0', letterSpacing: '0.06em' }}>
            ORDER SUMMARY
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {items.map(({ subscription: s, quantity }) => (
              <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <div>
                  <div style={{ fontWeight: 500 }}>{s.name}</div>
                  <div style={{ color: '#606060', fontSize: '12px' }}>x{quantity}</div>
                </div>
                <div style={{ fontWeight: 600 }}>₴{s.price * quantity}</div>
              </div>
            ))}
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', margin: '0 0 16px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '18px' }}>
            <span>Total</span>
            <span style={{ color: '#e8ff47' }}>₴{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

