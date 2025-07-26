import React from "react";
const BlogCard = ({ blog, onClick }) => (
  <div className="blog-card" onClick={onClick}>
    <h2>{blog.title}</h2>
    <p>{blog.summary}</p>
    <button>Read More →</button>
  </div>
);

export default BlogCard;
