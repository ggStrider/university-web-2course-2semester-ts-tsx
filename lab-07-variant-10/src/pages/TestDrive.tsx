const steps: string[] = [
  'Оберіть модель автомобіля з нашого каталогу',
  'Зателефонуйте нам або заповніть форму на сайті',
  'Оберіть зручний час та дату',
  'Приїдьте до салону з посвідченням водія',
  'Насолоджуйтесь тест-драйвом разом з нашим фахівцем',
];

const available: string[] = [
  'Audi A4 — доступний щоденно',
  'BMW 3 Series — доступний пн, ср, пт',
  'Mercedes C-Class — доступний вт, чт, сб',
  'Volkswagen Tiguan — доступний щоденно',
  'Toyota RAV4 — доступний щоденно',
  'Porsche Cayenne — тільки за попереднім записом',
];

export default function TestDrive() {
  return (
    <div>
      <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', letterSpacing: '2px' }}>
        Тест-драйв
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <h2 style={{ color: '#e8c44a', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Як записатись
          </h2>
          <ol style={{ paddingLeft: '20px', color: '#aaaaaa', lineHeight: '2' }}>
            {steps.map((step) => (
              <li key={step} style={{ marginBottom: '8px' }}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2 style={{ color: '#e8c44a', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Доступні автомобілі
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {available.map((item) => (
              <li
                key={item}
                style={{
                  backgroundColor: '#212121',
                  padding: '12px 16px',
                  marginBottom: '8px',
                  borderRadius: '4px',
                  color: '#cccccc',
                  fontSize: '14px',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
