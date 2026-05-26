import { useState } from 'react';
import useStatsStore from '../store/useStatsStore';

const StatsPanel = () => {
  const records = useStatsStore((s) => s.records);
  const removeRecord = useStatsStore((s) => s.removeRecord);
  const clearRecords = useStatsStore((s) => s.clearRecords);
  const filterByMinWeight = useStatsStore((s) => s.filterByMinWeight);

  const [minWeightFilter, setMinWeightFilter] = useState(0);
  const filtered = minWeightFilter > 0 ? filterByMinWeight(minWeightFilter) : records;

  return (
    <div
      style={{
        padding: '1.5rem',
        flex: 1,
        borderLeft: '1px solid #333',
      }}
    >
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Особисті рекорди</h3>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
        <label style={{ color: '#aaa', fontSize: '0.85rem' }}>Фільтр: мін. вага (кг)</label>
        <input
          type="number"
          value={minWeightFilter}
          onChange={(e) => setMinWeightFilter(Number(e.target.value))}
          style={{
            width: '70px',
            padding: '4px 8px',
            background: '#333',
            border: '1px solid #444',
            color: '#fff',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={() => setMinWeightFilter(0)}
          style={{
            padding: '4px 10px',
            background: '#444',
            color: '#aaa',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
          }}
        >
          Скинути
        </button>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#666', padding: '1rem 0' }}>Рекордів немає</p>
      ) : (
        filtered.map((rec) => (
          <div
            key={rec.exerciseName}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#212121',
              border: '1px solid #333',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '0.5rem',
            }}
          >
            <div>
              <strong style={{ color: '#fff' }}>{rec.exerciseName}</strong>
              <p style={{ margin: '2px 0 0', color: '#aaa', fontSize: '0.85rem' }}>
                🏆 {rec.maxWeight} кг · {rec.date}
              </p>
            </div>
            <button
              onClick={() => removeRecord(rec.exerciseName)}
              style={{
                padding: '4px 10px',
                background: '#5f2a2a',
                color: '#ff9999',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              Видалити
            </button>
          </div>
        ))
      )}

      {records.length > 0 && (
        <button
          onClick={clearRecords}
          style={{
            marginTop: '0.75rem',
            padding: '6px 14px',
            background: '#444',
            color: '#ccc',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Очистити рекорди
        </button>
      )}
    </div>
  );
};

export default StatsPanel;
