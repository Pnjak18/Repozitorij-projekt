import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Blog.css';

const BlogSingle = () => {
  const { id } = useParams(); // slug of the post
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=${id}`);
        const data = await response.json();

        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="loader" />;

  if (notFound) return <p>Post nije pronađen.</p>;

  return (
    <div className="single-post container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
