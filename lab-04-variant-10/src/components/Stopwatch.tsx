import { useState, useRef } from 'react';

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    if (running) return;
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  };

  const handleStop = () => {
    if (!running) return;
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTime(0);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div style={{
      backgroundColor: '#212121',
      borderRadius: '12px',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      width: '320px',
    }}>
      <span style={{
        fontSize: '48px',
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'monospace',
        letterSpacing: '2px',
      }}>
        {pad(minutes)}:{pad(seconds)}.{pad(milliseconds)}
      </span>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={handleStart}
          disabled={running}
          style={{
            padding: '10px 24px',
            backgroundColor: running ? '#333' : '#fff',
            color: running ? '#666' : '#0f0f0f',
            border: 'none',
            borderRadius: '6px',
            cursor: running ? 'default' : 'pointer',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!running}
          style={{
            padding: '10px 24px',
            backgroundColor: !running ? '#333' : '#fff',
            color: !running ? '#666' : '#0f0f0f',
            border: 'none',
            borderRadius: '6px',
            cursor: !running ? 'default' : 'pointer',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '10px 24px',
            backgroundColor: 'transparent',
            color: '#aaa',
            border: '1px solid #333',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
