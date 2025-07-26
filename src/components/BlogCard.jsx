import React from "react";
import "../pages/Blog.css";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <h2>{blog.title}</h2>
      <p className="blog-author">by {blog.author}</p>
      <p>{blog.summary}</p>
      <button>Read More →</button>
    </div>
  );
};

export default BlogCard;
