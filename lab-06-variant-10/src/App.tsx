import React from "react";
import type { ArticleCardProps } from "./components/ArticleCard";
import ArticleCardView from "./components/ArticleCardView";

const articles: ArticleCardProps[] = [
  {
    title: "Cool title 1",
    summary:
      "Cool summary 1",
    author: "Yaroslav Oslam",
    date: "May 24, 2026",
    category: "Frontend",
    thumbnailSrc: "https://picsum.photos/seed/react19/800/450",
    thumbnailAlt: "React 19 article thumbnail",
  },
  {
    title: "Cool title 2",
    summary:
      "Cool summary 2",
    author: "Yaroslav Oslam",
    date: "May 20, 2026",
    category: "TypeScript",
    thumbnailSrc: "https://picsum.photos/seed/ts6/800/450",
    thumbnailAlt: "TypeScript 6 article thumbnail",
  },
  {
    title: "Cool title 3",
    summary:
      "Cool summary 3",
    author: "Yaroslav Oslam",
    date: "May 15, 2026",
    category: "Tooling",
    thumbnailSrc: "https://picsum.photos/seed/vite6/800/450",
    thumbnailAlt: "Vite 6 article thumbnail",
  },
];

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          fontSize: "1.4rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          maxWidth: "600px",
          margin: "0 auto 1.5rem",
        }}
      >
        News Digest
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {articles.map((article, index) => (
          <ArticleCardView key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default App;
