interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => (
  <span
    style={{
      backgroundColor: '#ff0000',
      color: '#fff',
      padding: '3px 10px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    }}
  >
    {category}
  </span>
);
