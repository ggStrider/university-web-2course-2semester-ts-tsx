import { useState } from 'react';
import useWorkoutStore from '../store/useWorkoutStore';
import useStatsStore from '../store/useStatsStore';

const PRESET_EXERCISES = [
  { id: 1, name: 'Жим лежачи', sets: 4, reps: 8, weight: 80 },
  { id: 2, name: 'Присідання', sets: 4, reps: 10, weight: 100 },
  { id: 3, name: 'Тяга штанги', sets: 3, reps: 8, weight: 90 },
  { id: 4, name: 'Підтягування', sets: 3, reps: 12, weight: 0 },
  { id: 5, name: 'Жим стоячи', sets: 3, reps: 10, weight: 60 },
];

const WorkoutPanel = () => {
  const exercises = useWorkoutStore((s) => s.exercises);
  const addExercise = useWorkoutStore((s) => s.addExercise);
  const removeExercise = useWorkoutStore((s) => s.removeExercise);
  const clearWorkout = useWorkoutStore((s) => s.clearWorkout);
  const filterByMinWeight = useWorkoutStore((s) => s.filterByMinWeight);
  const setRecord = useStatsStore((s) => s.setRecord);

  const [minWeightFilter, setMinWeightFilter] = useState(0);
  const filtered = minWeightFilter > 0 ? filterByMinWeight(minWeightFilter) : exercises;

  const handleSaveRecord = (exerciseName: string, weight: number) => {
    setRecord({
      exerciseName,
      maxWeight: weight,
      date: new Date().toLocaleDateString('uk-UA'),
    });
  };

  return (
    <div style={{ padding: '1.5rem', flex: 1 }}>
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Тренування на сьогодні</h3>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {PRESET_EXERCISES.map((e) => (
          <button
            key={e.id}
            onClick={() => addExercise(e)}
            style={{
              padding: '6px 12px',
              background: '#333',
              color: '#fff',
              border: '1px solid #444',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            + {e.name}
          </button>
        ))}
      </div>

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
        <p style={{ color: '#666', padding: '1rem 0' }}>Вправ немає</p>
      ) : (
        filtered.map((item) => (
          <div
            key={item.id}
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
              <strong style={{ color: '#fff' }}>{item.name}</strong>
              <p style={{ margin: '2px 0 0', color: '#aaa', fontSize: '0.85rem' }}>
                {item.sets} × {item.reps} повт. · {item.weight} кг
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => handleSaveRecord(item.name, item.weight)}
                style={{
                  padding: '4px 10px',
                  background: '#2a5f2a',
                  color: '#7fff7f',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                Рекорд
              </button>
              <button
                onClick={() => removeExercise(item.id)}
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
          </div>
        ))
      )}

      {exercises.length > 0 && (
        <button
          onClick={clearWorkout}
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
          Очистити тренування
        </button>
      )}
    </div>
  );
};

export default WorkoutPanel;
