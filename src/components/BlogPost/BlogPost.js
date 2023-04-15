import React from "react";

// enter 'blog' object from App as prop
// JSX - set each blog item as element in a blogpost div
// not calling any other components

function BlogPost({ blog }) {
  return (
    <div id="blogpost">
      <h2>{blog.title}</h2>
      <h3>by {blog.author}</h3>
      <p id="postdate">{blog.date}</p>
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
