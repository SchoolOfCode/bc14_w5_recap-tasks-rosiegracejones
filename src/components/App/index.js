import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

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

  // create array of objects with comments
  // send to commentList component as prop
  const comments = [
    {
      id: "1",
      author: "Billy Bootcamper",
      content: "Great stuff!",
    },
    {
      id: "2",
      author: "Lizzy Hart",
      content: "Lol",
    },
    {
      id: "3",
      author: "Charlie Green",
      content: "Hello, great post",
    },
    {
      id: "4",
      author: "Nicholas Spring",
      content: "Some useful insights, ta",
    },
  ];

  return (
    <div className="app">
      <BlogPost blog={blog} />
      <CommentList comments={comments} />
      <CommentForm />
    </div>
  );
}

export default App;
