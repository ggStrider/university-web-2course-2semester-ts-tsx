import React, { useState, useCallback } from 'react';
import { useSubscriptions } from '../hooks';
import { SubscriptionCard } from '../components/molecules/SubscriptionCard';
import { SearchBar } from '../components/molecules/SearchBar';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import type { MembershipType } from '../types/Member';

export function SubscriptionsPage() {
  const { subscriptions, loading, error } = useSubscriptions();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<MembershipType | 'all'>('all');

  const handleSearch = useCallback((val: string) => setSearch(val), []);

  const filtered = subscriptions.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.features.some((f) => f.toLowerCase().includes(search.toLowerCase()));
    const matchesType = filterType === 'all' || s.type === filterType;
    return matchesSearch && matchesType;
  });

  const types: Array<{ value: MembershipType | 'all'; label: string }> = [
    { value: 'all', label: 'All Plans' },
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
  ];

  if (loading) return <LoadingSpinner text="Loading plans..." />;
  if (error)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        Error: {error}
      </div>
    );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Membership Plans</h1>
      <p style={{ color: '#707070', marginBottom: '36px', fontSize: '15px' }}>
        Choose the plan that fits your fitness goals.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', maxWidth: '340px' }}>
          <SearchBar placeholder="Search plans..." onSearch={handleSearch} />
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {types.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilterType(value)}
              style={{
                background: filterType === value ? '#e8ff47' : '#1a1a1a',
                color: filterType === value ? '#0f0f0f' : '#a0a0a0',
                border: `1px solid ${filterType === value ? '#e8ff47' : '#2a2a2a'}`,
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
                fontFamily: 'inherit',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#606060', textAlign: 'center', padding: '60px' }}>No plans found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((s) => (
            <SubscriptionCard key={s.id} subscription={s} />
          ))}
        </div>
      )}
    </div>
  );
}

