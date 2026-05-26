import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/Button';

export function NotFoundPage() {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '100px 24px',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <div
        style={{
          fontSize: '96px',
          fontWeight: 800,
          color: '#1e1e1e',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          marginBottom: '16px',
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: '24px', marginBottom: '12px' }}>Page not found</h1>
      <p style={{ color: '#707070', marginBottom: '32px', fontSize: '15px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}

