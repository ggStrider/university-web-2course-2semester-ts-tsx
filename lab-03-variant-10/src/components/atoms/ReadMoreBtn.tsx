interface ReadMoreBtnProps {
  label?: string;
}

export const ReadMoreBtn = ({ label = 'Read More' }: ReadMoreBtnProps) => (
  <button
    style={{
      backgroundColor: 'transparent',
      color: '#aaa',
      border: '1px solid #333',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: 600,
    }}
  >
    {label}
  </button>
);
