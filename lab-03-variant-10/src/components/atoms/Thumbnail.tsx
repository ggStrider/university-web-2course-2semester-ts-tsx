interface ThumbnailProps {
  src: string;
  alt: string;
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '8px',
      display: 'block',
    }}
  />
);
