import { BlogPostPreview } from './components/organisms/BlogPostPreview';
import type { BlogPostData } from './components/organisms/BlogPostPreview';

const posts: BlogPostData[] = [
  {
    id: 1,
    title: 'Title of cool article 1',
    category: 'React',
    thumbnailUrl: 'https://placehold.co/320x180',
    authorName: 'Yaroslav Oslam',
    publishedAt: 'May 20, 2025',
  },
  {
    id: 2,
    title: 'Title of cool article 2',
    category: 'Architecture',
    thumbnailUrl: 'https://placehold.co/320x180',
    authorName: 'Yaroslav Oslam',
    publishedAt: 'May 25, 2025',
  },
];

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f0f0f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        padding: '40px',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {posts.map(post => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
