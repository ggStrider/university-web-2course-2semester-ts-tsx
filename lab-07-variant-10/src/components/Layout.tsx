import { Outlet, NavLink } from 'react-router';

const navStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  padding: '16px 32px',
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  borderBottom: '1px solid #212121',
};

const logoStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
  fontSize: '20px',
  marginRight: 'auto',
  textDecoration: 'none',
  letterSpacing: '2px',
};

const linkStyle: React.CSSProperties = {
  color: '#aaaaaa',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  padding: '4px 0',
  borderBottom: '2px solid transparent',
  transition: 'color 0.2s',
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: '#ffffff',
  borderBottom: '2px solid #e8c44a',
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  borderTop: '1px solid #212121',
  padding: '20px 32px',
  textAlign: 'center',
  color: '#555555',
  fontSize: '13px',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#141414',
  minHeight: '70vh',
  padding: '40px 32px',
  color: '#ffffff',
};

export default function Layout() {
  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header>
        <nav style={navStyle}>
          <span style={logoStyle}>AUTOHAUS</span>
          <NavLink to="/" end style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
            Головна
          </NavLink>
          <NavLink to="/models" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
            Модельний ряд
          </NavLink>
          <NavLink to="/test-drive" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
            Тест-драйв
          </NavLink>
          <NavLink to="/service" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
            Сервіс
          </NavLink>
        </nav>
      </header>
      <main style={contentStyle}>
        <Outlet />
      </main>
      <footer style={footerStyle}>
        <p>© 2026 AUTOHAUS. Усі права захищено. | Yaroslav Oslam</p>
      </footer>
    </div>
  );
}
