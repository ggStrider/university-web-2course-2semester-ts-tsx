import React, { useState } from 'react';
import { TagListView } from './components/TagListView';
import { calculateTax } from './utils/calculateTax';

const initialTags = ['react', 'typescript', 'vitest', 'vite'];

const App = () => {
  const [tags, setTags] = useState<string[]>(initialTags);

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const taxExample = calculateTax(500, 20);

  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff', padding: '32px', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '24px' }}>Lab 11 - Variant 10</h1>

      <div style={{ backgroundColor: '#212121', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '8px' }}>calculateTax demo</h2>
        <p>calculateTax(500, 20) = {taxExample}</p>
      </div>

      <div style={{ backgroundColor: '#212121', borderRadius: '8px', padding: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>TagList</h2>
        <TagListView tags={tags} onRemoveTag={handleRemoveTag} />
      </div>
    </div>
  );
};

export default App;
