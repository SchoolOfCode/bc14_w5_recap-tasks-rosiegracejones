import React, { useState } from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";

function App() {
  const blog = {
    title: "Introduction to React",
    author: "Rosie Jones",
    datePosted: "15/04/2023",
    content: `It's been a week learning React. 
    Props can be confusing, but it's a good job you have .maps to steer you in the right direction.`,
    imageSrc: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
    imageAlt: "frontend vs frontend with react meme",
  };

  return (

  <BlogPost blog={blog} />
  )
}

export default App;
