import React from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <h1>📚 Productivity Blog</h1>
      {blogData.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => navigate(`/blog/${blog.id}`)}
        />
      ))}
    </div>
  );
};

export default Blog;
