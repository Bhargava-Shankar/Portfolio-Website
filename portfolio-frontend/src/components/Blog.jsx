import React from 'react'
import ReactMarkdown from "react-markdown";
import { useEffect,useState } from 'react';
const Blog = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/markdown-blogs/blog1.md").then((res) => res.text()).then((text) => setContent(text));
    },[])
  return (
    <div className='blog'>
      <ReactMarkdown children={content}></ReactMarkdown>
    </div>
  )
}

export default Blog
