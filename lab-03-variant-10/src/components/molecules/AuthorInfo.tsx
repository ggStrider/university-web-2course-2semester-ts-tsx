interface AuthorInfoProps {
  authorName: string;
  publishedAt: string;
}

export const AuthorInfo = ({ authorName, publishedAt }: AuthorInfoProps) => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#aaa', fontSize: '13px' }}>
    <span>{authorName}</span>
    <span style={{ color: '#555' }}>•</span>
    <span>{publishedAt}</span>
  </div>
);
