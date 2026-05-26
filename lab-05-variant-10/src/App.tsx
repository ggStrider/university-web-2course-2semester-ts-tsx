import { AddProductForm } from './components/AddProductForm';

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
      <AddProductForm />
    </div>
  );
}

export default App;
