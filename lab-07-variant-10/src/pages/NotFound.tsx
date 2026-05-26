import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '80px',
        backgroundColor: '#141414',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        padding: '40px',
      }}
    >
      <div style={{ fontSize: '96px', fontWeight: 700, color: '#212121', letterSpacing: '8px' }}>
        404
      </div>
      <h1 style={{ fontSize: '28px', fontWeight: 600, margin: '16px 0 8px' }}>
        Сторінку не знайдено
      </h1>
      <p style={{ color: '#aaaaaa', marginBottom: '32px' }}>
        Схоже, ви перейшли за неіснуючим посиланням.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: '#e8c44a',
          color: '#000000',
          padding: '12px 28px',
          textDecoration: 'none',
          fontWeight: 700,
          borderRadius: '4px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontSize: '14px',
        }}
      >
        Повернутися на головну
      </Link>
    </div>
  );
}
