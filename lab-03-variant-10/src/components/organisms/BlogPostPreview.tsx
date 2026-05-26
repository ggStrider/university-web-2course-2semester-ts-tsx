import { Thumbnail } from '../atoms/Thumbnail';
import { CategoryBadge } from '../atoms/CategoryBadge';
import { ReadMoreBtn } from '../atoms/ReadMoreBtn';
import { AuthorInfo } from '../molecules/AuthorInfo';

export interface BlogPostData {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  authorName: string;
  publishedAt: string;
}

interface BlogPostPreviewProps {
  post: BlogPostData;
}

export const BlogPostPreview = ({ post }: BlogPostPreviewProps) => (
  <div
    style={{
      backgroundColor: '#212121',
      borderRadius: '10px',
      width: '320px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '0 0 16px 0',
    }}
  >
    <Thumbnail src={post.thumbnailUrl} alt={post.title} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 16px' }}>
      <CategoryBadge category={post.category} />
      <h2 style={{ margin: 0, fontSize: '16px', color: '#fff', fontWeight: 700, lineHeight: 1.4 }}>
        {post.title}
      </h2>
      <AuthorInfo authorName={post.authorName} publishedAt={post.publishedAt} />
      <ReadMoreBtn />
    </div>
  </div>
);
