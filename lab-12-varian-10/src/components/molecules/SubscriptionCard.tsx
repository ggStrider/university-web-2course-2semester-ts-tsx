import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Subscription } from '../../types/Subscription';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { useCart } from '../../hooks';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(subscription.id);

  const tierColor: Record<string, string> = {
    basic: '#606060',
    standard: '#4fc3f7',
    premium: '#e8ff47',
  };

  return (
    <div
      style={{
        background: '#181818',
        border: `1px solid ${subscription.type === 'premium' ? '#e8ff4730' : '#2a2a2a'}`,
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = tierColor[subscription.type];
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          subscription.type === 'premium' ? '#e8ff4730' : '#2a2a2a';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
      onClick={() => navigate(`/subscription/${subscription.id}`)}
    >
      {subscription.type === 'premium' && (
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#e8ff47',
            color: '#0f0f0f',
            fontSize: '11px',
            fontWeight: 700,
            padding: '3px 12px',
            borderRadius: '0 0 8px 8px',
            letterSpacing: '0.08em',
          }}
        >
          MOST POPULAR
        </div>
      )}

      <div>
        <Badge variant={subscription.type === 'premium' ? 'accent' : subscription.type === 'standard' ? 'default' : 'default'}>
          {subscription.type}
        </Badge>
        <h3 style={{ margin: '12px 0 4px', fontSize: '22px', color: '#fff' }}>{subscription.name}</h3>
        <p style={{ margin: 0, fontSize: '13px', color: '#707070', lineHeight: 1.5 }}>{subscription.description}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontSize: '32px', fontWeight: 700, color: tierColor[subscription.type] }}>
          ₴{subscription.price}
        </span>
        <span style={{ fontSize: '13px', color: '#606060' }}>/ month</span>
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {subscription.features.map((feature) => (
          <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#c0c0c0' }}>
            <span style={{ color: '#e8ff47', fontSize: '11px' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={inCart ? 'secondary' : 'primary'}
        fullWidth
        onClick={(e) => {
          (e as React.MouseEvent).stopPropagation();
          if (!inCart) addItem(subscription);
        }}
        disabled={inCart}
      >
        {inCart ? 'Added to cart ✓' : 'Add to cart'}
      </Button>
    </div>
  );
}

