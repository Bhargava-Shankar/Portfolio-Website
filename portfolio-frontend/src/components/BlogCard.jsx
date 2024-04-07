import React from 'react'
import "./css/BlogSection.scss";

const BlogCard = () => {
  return (
      <div className='blog-card-container'>
        <div className="thumbnail">
              <h1>Image Goes Here</h1>
          </div>
          <div className="details">
              <div className="title">
                  Dockerizing GoLang Projects
              </div>
              <div className="author-details">
                  Bhargava | 11-01-2024 | 2 min read
              </div>
              <div className="summary">
                  This project is about making Go Projects portable asd asd
              </div>
          </div>
    </div>
  )
}

export default BlogCard
