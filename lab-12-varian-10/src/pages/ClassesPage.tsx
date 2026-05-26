import React, { useState, useCallback } from 'react';
import { useClasses } from '../hooks';
import { ClassCard } from '../components/molecules/ClassCard';
import { SearchBar } from '../components/molecules/SearchBar';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import type { WorkoutClass } from '../types/WorkoutClass';

export function ClassesPage() {
  const { classes, loading, error } = useClasses();
  const [search, setSearch] = useState('');
  const [filterLevel, setFilterLevel] = useState<WorkoutClass['level'] | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleSearch = useCallback((val: string) => setSearch(val), []);

  const allCategories = Array.from(new Set(classes.map((c) => c.category)));

  const filtered = classes.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.trainer.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = filterLevel === 'all' || c.level === filterLevel;
    const matchesCat = filterCategory === 'all' || c.category === filterCategory;
    return matchesSearch && matchesLevel && matchesCat;
  });

  const levels: Array<{ value: WorkoutClass['level'] | 'all'; label: string }> = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  if (loading) return <LoadingSpinner text="Loading classes..." />;
  if (error)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        Error: {error}
      </div>
    );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Group Classes</h1>
      <p style={{ color: '#707070', marginBottom: '36px', fontSize: '15px' }}>
        {classes.length} classes available this week.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', maxWidth: '340px' }}>
          <SearchBar placeholder="Search classes..." onSearch={handleSearch} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {levels.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilterLevel(value)}
            style={{
              background: filterLevel === value ? '#e8ff47' : '#1a1a1a',
              color: filterLevel === value ? '#0f0f0f' : '#a0a0a0',
              border: `1px solid ${filterLevel === value ? '#e8ff47' : '#2a2a2a'}`,
              borderRadius: '6px',
              padding: '7px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            {label}
          </button>
        ))}
        <span style={{ color: '#2a2a2a', padding: '7px 4px' }}>|</span>
        <button
          onClick={() => setFilterCategory('all')}
          style={{
            background: filterCategory === 'all' ? '#e8ff47' : '#1a1a1a',
            color: filterCategory === 'all' ? '#0f0f0f' : '#a0a0a0',
            border: `1px solid ${filterCategory === 'all' ? '#e8ff47' : '#2a2a2a'}`,
            borderRadius: '6px',
            padding: '7px 14px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          All Categories
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            style={{
              background: filterCategory === cat ? '#e8ff47' : '#1a1a1a',
              color: filterCategory === cat ? '#0f0f0f' : '#a0a0a0',
              border: `1px solid ${filterCategory === cat ? '#e8ff47' : '#2a2a2a'}`,
              borderRadius: '6px',
              padding: '7px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#606060', textAlign: 'center', padding: '60px' }}>No classes found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((c) => (
            <ClassCard key={c.id} workoutClass={c} />
          ))}
        </div>
      )}
    </div>
  );
}

