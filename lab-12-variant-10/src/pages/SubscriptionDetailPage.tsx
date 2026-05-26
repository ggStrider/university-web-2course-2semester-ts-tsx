import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSubscription, useCart } from '../hooks';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';

export function SubscriptionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { subscription, loading, error } = useSubscription(Number(id));
  const { addItem, isInCart } = useCart();

  if (loading) return <LoadingSpinner text="Loading plan details..." />;
  if (error || !subscription)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        {error ?? 'Plan not found'}
      </div>
    );

  const inCart = isInCart(subscription.id);
  const tierColor: Record<string, string> = {
    basic: '#606060',
    standard: '#4fc3f7',
    premium: '#e8ff47',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'none',
          border: 'none',
          color: '#707070',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '32px',
          padding: 0,
          fontFamily: 'inherit',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        ← Back
      </button>

      <div
        style={{
          background: '#181818',
          border: `1px solid ${subscription.type === 'premium' ? '#e8ff4730' : '#2a2a2a'}`,
          borderRadius: '16px',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <Badge variant={subscription.type === 'premium' ? 'accent' : 'default'}>
              {subscription.type}
            </Badge>
            <h1 style={{ margin: '12px 0 8px', fontSize: '36px', fontWeight: 800 }}>
              {subscription.name}
            </h1>
            <p style={{ margin: 0, color: '#707070', fontSize: '16px', lineHeight: 1.6, maxWidth: '480px' }}>
              {subscription.description}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: tierColor[subscription.type], lineHeight: 1 }}>
              ₴{subscription.price}
            </div>
            <div style={{ color: '#606060', fontSize: '14px', marginTop: '4px' }}>per month</div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', margin: '32px 0' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: '#111', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '12px', color: '#606060', marginBottom: '4px' }}>DURATION</div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>{subscription.duration} month</div>
          </div>
          <div style={{ background: '#111', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '12px', color: '#606060', marginBottom: '4px' }}>VISITS</div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>
              {subscription.maxVisitsPerMonth ?? 'Unlimited'}
            </div>
          </div>
          <div style={{ background: '#111', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '12px', color: '#606060', marginBottom: '4px' }}>PERSONAL TRAINER</div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>
              {subscription.includesTrainer ? '✓ Included' : '✗ Not included'}
            </div>
          </div>
          <div style={{ background: '#111', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '12px', color: '#606060', marginBottom: '4px' }}>SPA ACCESS</div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>
              {subscription.includesSpa ? '✓ Included' : '✗ Not included'}
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#a0a0a0', letterSpacing: '0.04em' }}>
          WHAT'S INCLUDED
        </h3>
        <ul style={{ margin: '0 0 32px', padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {subscription.features.map((feature) => (
            <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#c0c0c0' }}>
              <span style={{ color: '#e8ff47', fontWeight: 700 }}>✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            size="lg"
            variant={inCart ? 'secondary' : 'primary'}
            disabled={inCart}
            onClick={() => { if (!inCart) addItem(subscription); }}
          >
            {inCart ? 'Added to Cart ✓' : 'Add to Cart'}
          </Button>
          {inCart && (
            <Button size="lg" variant="ghost" onClick={() => navigate('/cart')}>
              View Cart →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

