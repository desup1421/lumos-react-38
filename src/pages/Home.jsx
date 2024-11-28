import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Prefetch Page
  const prefetchPage = () => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = "/blog/1";
      document.head.appendChild(link);
      console.log("Prefetching page...");
  }

  return (
    <div className="container">
      <h1>Home</h1>
      <Link onMouseOver={prefetchPage} to="/blog/1">Blog</Link>
    </div>
  );
};

export default Home;
