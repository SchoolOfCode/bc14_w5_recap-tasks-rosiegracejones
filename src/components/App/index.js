import React, { useState } from "react";
import BlogPost from "../BlogPost/BlogPost";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

function App() {
  const blog = {
    title: "Introduction to React",
    author: "Rosie Jones",
    datePosted: "15/04/2023",
    content: `It's been a week learning React. Props can be confusing, but it's a good job you have .maps to steer you in the right direction.`,
    imageSrc: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
    imageAlt: "frontend vs frontend with react meme",
  };

  /*
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
*/

  // adjust comments using useState (begins as empty array)
  const [commentList, setCommentList] = useState([]);

  // useState to set contentText to empty string
  const [contentText, setContentText] = useState("");

  // useState to set commentAuthor to empty string
  const [commentAuthor, setCommentAuthor] = useState("");

  // function to add comment to list
  // author & content as placeholders - we will enter commentAuthor & contentText when calling function
  function addToCommentList(author, content) {
    // defining newcomment object  and handing in author & content parameters
    const newComment = {
      // generates random id
      id: Date.now().toString(),
      // sets author item and content item to match parameters (commentAuthor & contentText )
      author: author,
      content: content,
    };
    // setCommentList array to be whatever is already in the list, plus newComment
    setCommentList([...commentList, newComment]);
  }

  // function to retrieve content input text
  function contentInputChange(event) {
    setContentText(event.target.value);
    console.log(contentText);
  }

  // function to retrieve author input text and set as commentAuthor
  function authorInputChange(event) {
    setCommentAuthor(event.target.value);
    console.log(commentAuthor);
  }

  // onsubmit function that determine what happens when submit button is clicked
  function onSubmit() {
    // calls add to list function with author & content inputs as parameters
    addToCommentList(commentAuthor, contentText);
    // resets content input box to be empty (author input will remain filled)
    setContentText("");
  }

  return (
    <div className="app">
      <BlogPost blog={blog} />
      <CommentList commentList={commentList} />
      <CommentForm
        contentText={contentText}
        contentInputChange={contentInputChange}
        authorInputChange={authorInputChange}
        commentAuthor={commentAuthor}
        onSubmit={onSubmit}
        blog={blog}
      />
    </div>
  );
}

export default App;
