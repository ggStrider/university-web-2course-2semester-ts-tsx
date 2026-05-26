interface ServiceItem {
  title: string;
  description: string;
  price: string;
}

const services: ServiceItem[] = [
  { title: 'Технічне обслуговування', description: 'Планове ТО відповідно до регламенту виробника', price: 'від $80' },
  { title: 'Діагностика', description: 'Комп\'ютерна діагностика всіх систем автомобіля', price: 'від $30' },
  { title: 'Шиномонтаж', description: 'Заміна та балансування шин будь-якого розміру', price: 'від $40' },
  { title: 'Кузовні роботи', description: 'Рихтування, покраска, антикорозійна обробка', price: 'від $200' },
  { title: 'Заміна масла', description: 'Заміна моторного масла та масляного фільтра', price: 'від $50' },
  { title: 'Гарантійний ремонт', description: 'Безкоштовний ремонт в межах гарантії виробника', price: 'безкоштовно' },
];

export default function Service() {
  return (
    <div>
      <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', letterSpacing: '2px' }}>
        Сервіс
      </h1>
      <p style={{ color: '#aaaaaa', marginBottom: '32px', maxWidth: '600px' }}>
        Наш сертифікований сервісний центр обслуговує автомобілі всіх марок.
        Досвідчені механіки та оригінальні запчастини — запорука вашої безпеки.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {services.map((s) => (
          <div
            key={s.title}
            style={{ backgroundColor: '#212121', padding: '24px', borderRadius: '4px' }}
          >
            <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</div>
            <div style={{ color: '#aaaaaa', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>
              {s.description}
            </div>
            <div style={{ color: '#e8c44a', fontWeight: 600 }}>{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
