import React from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <div className="overlay">
        <h1 className="blog-title">Productivity Blog</h1>
        <div className="blog-grid">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => navigate(`/blog/${blog.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
