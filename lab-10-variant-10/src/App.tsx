import Header from './components/Header';
import WorkoutPanel from './components/WorkoutPanel';
import StatsPanel from './components/StatsPanel';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <WorkoutPanel />
        <StatsPanel />
      </div>
    </div>
  );
};

export default App;
