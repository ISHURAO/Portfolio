import React, { useEffect, useState } from 'react';
import { getBlogs } from '../utils/api';
import '../styles/blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Best practices for building production-ready APIs with Node.js and Express.js.',
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'MongoDB Database Design Patterns',
      excerpt: 'Essential patterns for designing efficient MongoDB schemas and queries.',
      date: '2024-01-05',
    },
  ]);

  useEffect(() => {
    getBlogs()
      .then((res) => setBlogs(res.data))
      .catch(() => console.log('Using default blogs'));
  }, []);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="s-tag">Articles</div>
        <h2 className="s-title">
          Latest <em>Blog Posts</em>
        </h2>
        <div className="s-div"></div>

        <div className="blog-grid">
          {blogs.map((post) => (
            <article key={post.id} className="blog-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                <a href="#" className="blog-read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
