import React from 'react'
import "./css/BlogSection.scss";
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <div className="blog-section-container">
        <div className='blog-section'>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
   
  )
}

export default BlogSection
