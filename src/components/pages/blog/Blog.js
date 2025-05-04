import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=28")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container blog">
      <h1 className="blog-title">Blog</h1>
      <div>
        {posts.map(post => (
          <div className="row align-items-center mb-5" key={post.id}>
            <div className="col-md-6">
              <MediaImg id={post.featured_media} size="large" />
            </div>
            <div className="col-md-6 text-white">
              <Link to={`/blog/${post.slug}`} className="blog-link">
                <h2 className="post-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
