import React, { useState, useCallback } from 'react';
import { useMembers } from '../hooks';
import { MemberCard } from '../components/molecules/MemberCard';
import { SearchBar } from '../components/molecules/SearchBar';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import type { MemberStatus, MembershipType } from '../types/Member';

export function MembersPage() {
  const { members, loading, error } = useMembers();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<MemberStatus | 'all'>('all');
  const [filterType, setFilterType] = useState<MembershipType | 'all'>('all');

  const handleSearch = useCallback((val: string) => setSearch(val), []);

  const filtered = members.filter((m) => {
    const matchesSearch =
      `${m.firstName} ${m.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'all' || m.status === filterStatus;
    const matchesType = filterType === 'all' || m.membershipType === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const statuses: Array<{ value: MemberStatus | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' },
  ];

  const types: Array<{ value: MembershipType | 'all'; label: string }> = [
    { value: 'all', label: 'All Plans' },
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
  ];

  if (loading) return <LoadingSpinner text="Loading members..." />;
  if (error)
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', color: '#ff4444' }}>
        Error: {error}
      </div>
    );

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Members</h1>
      <p style={{ color: '#707070', marginBottom: '36px', fontSize: '15px' }}>
        {members.length} registered members.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', maxWidth: '340px' }}>
          <SearchBar placeholder="Search members..." onSearch={handleSearch} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        {statuses.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilterStatus(value)}
            style={{
              background: filterStatus === value ? '#e8ff47' : '#1a1a1a',
              color: filterStatus === value ? '#0f0f0f' : '#a0a0a0',
              border: `1px solid ${filterStatus === value ? '#e8ff47' : '#2a2a2a'}`,
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
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {types.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilterType(value)}
            style={{
              background: filterType === value ? '#e8ff47' : '#1a1a1a',
              color: filterType === value ? '#0f0f0f' : '#a0a0a0',
              border: `1px solid ${filterType === value ? '#e8ff47' : '#2a2a2a'}`,
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
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#606060', textAlign: 'center', padding: '60px' }}>No members found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      )}
    </div>
  );
}

