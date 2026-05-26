import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#181818',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          {title && <h2 style={{ margin: 0, fontSize: '20px', color: '#fff' }}>{title}</h2>}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#606060',
              fontSize: '22px',
              cursor: 'pointer',
              lineHeight: 1,
              marginLeft: 'auto',
              padding: '4px',
            }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

