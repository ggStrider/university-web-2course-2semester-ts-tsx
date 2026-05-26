export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', letterSpacing: '2px' }}>
        Ласкаво просимо до AUTOHAUS
      </h1>
      <p style={{ color: '#aaaaaa', fontSize: '18px', maxWidth: '600px', lineHeight: '1.6' }}>
        Ваш надійний автосалон. Ми пропонуємо широкий вибір автомобілів, професійний сервіс
        та незабутній досвід тест-драйву.
      </p>
      <div style={{ marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {[
          { label: 'Моделей у наявності', value: '120+' },
          { label: 'Років на ринку', value: '15' },
          { label: 'Задоволених клієнтів', value: '8 000+' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: '#212121',
              padding: '24px 32px',
              borderRadius: '4px',
              minWidth: '160px',
            }}
          >
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#e8c44a' }}>{stat.value}</div>
            <div style={{ color: '#aaaaaa', fontSize: '13px', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
