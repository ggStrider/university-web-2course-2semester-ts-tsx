import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../hooks';

export function Navbar() {
  const location = useLocation();
  const { totalItems } = useCart();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/subscriptions', label: 'Plans' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/classes', label: 'Classes' },
    { to: '/members', label: 'Members' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav
      style={{
        background: '#111111',
        borderBottom: '1px solid #1e1e1e',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#e8ff47', letterSpacing: '-0.03em' }}>
            FIT<span style={{ color: '#fff' }}>CLUB</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: isActive(to) ? 600 : 400,
                color: isActive(to) ? '#e8ff47' : '#a0a0a0',
                background: isActive(to) ? '#1e1e00' : 'transparent',
                transition: 'color 0.15s, background 0.15s',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/cart"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '14px',
            transition: 'border-color 0.15s',
          }}
        >
          🛒
          {totalItems > 0 && (
            <span
              style={{
                background: '#e8ff47',
                color: '#0f0f0f',
                fontSize: '11px',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '10px',
                minWidth: '18px',
                textAlign: 'center',
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

