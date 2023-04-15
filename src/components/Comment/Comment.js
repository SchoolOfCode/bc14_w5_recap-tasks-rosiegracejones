import React, { useState } from "react";
// import CommentList from "../CommentList";
// import CommentForm from "../CommentForm";

/* 
- enter 'comment' object from App as prop
- JSX - set each comment item as element in a comment div
- initials function (turning author name into author initials)
    - split() on author string to create names array [first name, second name]
    - use .map function to iterate through array and return first character in each array item [f, s]
    - save this as new array 'initialsArray'
    - return .map result array (initialsArray) in the initials function
- call initials function inside JSX
*/

function Comment({ comment }) {
  const initials = () => {
    const nameArray = comment.author.split(" ");
    const initialsArray = nameArray.map((name) => {
      return name.charAt(0);
    });

    return initialsArray;
  };

  return (
    <div id="comment">
      <h3 id="author-initials">{initials()}</h3>
      <h4>{comment.author}</h4>
      <h4>{comment.content}</h4>
    </div>
  );
}

export default Comment;
