import { Stopwatch } from './components/Stopwatch';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto, sans-serif',
    }}>
      <Stopwatch />
    </div>
  );
}

export default App;
