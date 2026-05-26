import { useState, useEffect } from 'react';

const API_URL = 'https://6a159ee291ff9a63de08805f.mockapi.io/laptops';

interface Laptop {
  id: string;
  model: string;
  processor: string;
  ram: number;
  price: number;
}

function App() {
  const [laptops, setLaptops] = useState<Laptop[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [newModel, setNewModel] = useState('');
  const [newProcessor, setNewProcessor] = useState('');
  const [newRam, setNewRam] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    const fetchLaptops = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Помилка завантаження даних');
        const data: Laptop[] = await response.json();
        setLaptops(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLaptops();
  }, []);

  const handleAdd = async () => {
    if (!newModel || !newProcessor || !newRam || !newPrice) {
      alert('Заповніть всі поля');
      return;
    }
    const newLaptop = {
      model: newModel,
      processor: newProcessor,
      ram: Number(newRam),
      price: Number(newPrice),
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLaptop),
      });
      if (!response.ok) throw new Error('Помилка при додаванні');
      const saved: Laptop = await response.json();
      setLaptops([...laptops, saved]);
      setNewModel('');
      setNewProcessor('');
      setNewRam('');
      setNewPrice('');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Помилка видалення');
      setLaptops(laptops.filter((l) => l.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: '#212121',
    border: '1px solid #333',
    color: '#ffffff',
    padding: '10px 14px',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#212121',
    padding: '20px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeft: '3px solid #e8c44a',
  };

  return (
    <div
      style={{
        backgroundColor: '#0f0f0f',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        padding: '40px 32px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px', letterSpacing: '2px' }}>
        Каталог ноутбуків
      </h1>

      {/* Форма додавання */}
      <div
        style={{
          backgroundColor: '#212121',
          padding: '24px',
          borderRadius: '4px',
          marginBottom: '32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}
      >
        <input style={inputStyle} placeholder="Модель" value={newModel} onChange={(e) => setNewModel(e.target.value)} />
        <input style={inputStyle} placeholder="Процесор" value={newProcessor} onChange={(e) => setNewProcessor(e.target.value)} />
        <input style={inputStyle} placeholder="ОЗП (ГБ)" type="number" value={newRam} onChange={(e) => setNewRam(e.target.value)} />
        <input style={inputStyle} placeholder="Ціна ($)" type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        <button
          onClick={handleAdd}
          style={{
            gridColumn: '1 / -1',
            backgroundColor: '#e8c44a',
            color: '#000000',
            border: 'none',
            padding: '12px',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Додати ноутбук
        </button>
      </div>

      {/* Стани */}
      {isLoading && <p style={{ color: '#aaaaaa' }}>Завантаження даних...</p>}
      {error && <p style={{ color: '#ff4444' }}>Помилка: {error}</p>}

      {/* Список */}
      {!isLoading && !error && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {laptops.length === 0 && (
            <p style={{ color: '#555' }}>Список порожній. Додайте перший ноутбук.</p>
          )}
          {laptops.map((laptop) => (
            <div key={laptop.id} style={cardStyle}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>{laptop.model}</div>
                <div style={{ color: '#aaaaaa', fontSize: '14px' }}>
                  {laptop.processor} · {laptop.ram} ГБ ОЗП
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span style={{ color: '#e8c44a', fontWeight: 700, fontSize: '18px' }}>${laptop.price}</span>
                <button
                  onClick={() => handleDelete(laptop.id)}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #444',
                    color: '#ff4444',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Видалити
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
