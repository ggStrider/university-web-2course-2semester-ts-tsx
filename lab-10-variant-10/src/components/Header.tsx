import useWorkoutStore from '../store/useWorkoutStore';
import useStatsStore from '../store/useStatsStore';

const Header = () => {
  const exercises = useWorkoutStore((s) => s.exercises);
  const records = useStatsStore((s) => s.records);

  const totalVolume = exercises.reduce(
    (sum, e) => sum + e.sets * e.reps * e.weight,
    0,
  );

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        background: '#212121',
        color: '#fff',
        borderBottom: '1px solid #333',
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.2rem' }}>💪 SportDiary</h2>
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#aaa' }}>
        <span>Вправ сьогодні: <strong style={{ color: '#fff' }}>{exercises.length}</strong></span>
        <span>Об'єм: <strong style={{ color: '#fff' }}>{totalVolume} кг</strong></span>
        <span>Рекордів: <strong style={{ color: '#fff' }}>{records.length}</strong></span>
      </div>
    </header>
  );
};

export default Header;
