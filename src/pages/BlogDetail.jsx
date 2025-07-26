import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../data/blogData";
import "./Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-content">
        <h1>{blog.title}</h1>
        <p className="blog-detail-author">by {blog.author}</p>
        <p className="blog-detail-body">{blog.content}</p>
        <button className="back-button" onClick={() => navigate("/blog")}>← Back to Blog</button>
      </div>
    </div>
  );
};

export default BlogDetail;
