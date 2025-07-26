import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import "./blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
