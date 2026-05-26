import React from "react";
import type { ArticleCardProps } from "./ArticleCard";

const ArticleCardView: React.FC<ArticleCardProps> = ({
  title,
  summary,
  author,
  date,
  category,
  thumbnailSrc,
  thumbnailAlt,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <article
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#212121",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail — top on mobile */}
      <div style={{ width: "100%", flexShrink: 0 }}>
        <picture>
          <source media="(min-width: 768px)" srcSet={thumbnailSrc} />
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            loading="lazy"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </picture>
      </div>

      {/* Text block */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Category badge */}
        <span
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#aaaaaa",
            backgroundColor: "#2e2e2e",
            padding: "3px 12px",
            borderRadius: "999px",
          }}
        >
          {category}
        </span>

        {/* Title */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "17px",
            fontWeight: 700,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {title}
        </h2>

        {/* Summary */}
        <p
          style={{
            color: "#aaaaaa",
            fontSize: "13px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {summary}
        </p>

        {/* Author + date */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#3a3a3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#ffffff",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {author.charAt(0).toUpperCase()}
          </div>
          <span style={{ color: "#aaaaaa", fontSize: "12px" }}>{author}</span>
          <span style={{ color: "#555555", fontSize: "12px" }}>·</span>
          <span style={{ color: "#555555", fontSize: "12px" }}>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCardView;
