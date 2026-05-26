interface CarModel {
  name: string;
  type: string;
  price: string;
  engine: string;
}

const models: CarModel[] = [
  { name: 'Audi A4', type: 'Седан', price: 'від $42 000', engine: '2.0 TFSI, 150 кВт' },
  { name: 'BMW 3 Series', type: 'Седан', price: 'від $45 000', engine: '2.0i, 155 кВт' },
  { name: 'Mercedes C-Class', type: 'Седан', price: 'від $47 000', engine: '1.5 EQ Boost, 135 кВт' },
  { name: 'Volkswagen Tiguan', type: 'Кросовер', price: 'від $38 000', engine: '2.0 TDI, 110 кВт' },
  { name: 'Toyota RAV4', type: 'Кросовер', price: 'від $35 000', engine: '2.5 Hybrid, 160 кВт' },
  { name: 'Porsche Cayenne', type: 'SUV', price: 'від $85 000', engine: '3.0 V6, 250 кВт' },
];

export default function Models() {
  return (
    <div>
      <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', letterSpacing: '2px' }}>
        Модельний ряд
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {models.map((car) => (
          <div
            key={car.name}
            style={{
              backgroundColor: '#212121',
              padding: '24px',
              borderRadius: '4px',
              borderLeft: '3px solid #e8c44a',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{car.name}</div>
            <div style={{ color: '#e8c44a', fontSize: '13px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {car.type}
            </div>
            <div style={{ color: '#aaaaaa', fontSize: '14px', marginBottom: '4px' }}>Двигун: {car.engine}</div>
            <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginTop: '12px' }}>{car.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
