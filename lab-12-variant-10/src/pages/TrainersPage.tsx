import React, { useState, useCallback } from 'react';
import { useTrainers } from '../hooks';
import { TrainerCard } from '../components/molecules/TrainerCard';
import { SearchBar } from '../components/molecules/SearchBar';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';

export function TrainersPage() {
  const { trainers, loading, error } = useTrainers();
  const [search, setSearch] = useState('');
  const [filterSpec, setFilterSpec] = useState<string>('all');

  const handleSearch = useCallback((val: string) => setSearch(val), []);

  const allSpecs = Array.from(new Set(trainers.flatMap((t) => t.specialization)));

  const filtered = trainers.filter((t) => {
    const matchesSearch =
      `${t.firstName} ${t.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      t.bio.toLowerCase().includes(search.toLowerCase()) ||
      t.specialization.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesSpec = filterSpec === 'all' || t.specialization.includes(filterSpec);
    return matchesSearch && matchesSpec;
  });

  if (loading) return <LoadingSpinner text="Loading trainers..." />;
  if (error)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        Error: {error}
      </div>
    );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Our Trainers</h1>
      <p style={{ color: '#707070', marginBottom: '36px', fontSize: '15px' }}>
        Certified professionals ready to guide you.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', maxWidth: '340px' }}>
          <SearchBar placeholder="Search trainers..." onSearch={handleSearch} />
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilterSpec('all')}
            style={{
              background: filterSpec === 'all' ? '#e8ff47' : '#1a1a1a',
              color: filterSpec === 'all' ? '#0f0f0f' : '#a0a0a0',
              border: `1px solid ${filterSpec === 'all' ? '#e8ff47' : '#2a2a2a'}`,
              borderRadius: '6px',
              padding: '8px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            All
          </button>
          {allSpecs.map((spec) => (
            <button
              key={spec}
              onClick={() => setFilterSpec(spec)}
              style={{
                background: filterSpec === spec ? '#e8ff47' : '#1a1a1a',
                color: filterSpec === spec ? '#0f0f0f' : '#a0a0a0',
                border: `1px solid ${filterSpec === spec ? '#e8ff47' : '#2a2a2a'}`,
                borderRadius: '6px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#606060', textAlign: 'center', padding: '60px' }}>No trainers found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((t) => (
            <TrainerCard key={t.id} trainer={t} />
          ))}
        </div>
      )}
    </div>
  );
}

