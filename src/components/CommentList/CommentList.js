import React from "react";
import Comment from "../Comment/Comment";

/* 
- enter comments prop from App, which is an array of objects, each containing id, author, content ✅
- JSX - use commentList.map to return multiple Comment components (in CommentList return) ✅
- props have now changed for Comment component - change to author & content ✅
*/

function CommentList({ commentList }) {

  return (
    <div id="comment-list">
      <ul>
      {/*  Using map method to loop through each item in the commentList array and render a Comment component for each one. */}
        {commentList.map((comment) => (
          <div key={comment.id}>
          {/* comment component render value of each object (as defined by user input when add to list function called in App component) */}
          {/* NOT SURE HOW 'comment' IS WORKING AS ARGUMENT HERE */}
            <Comment id={comment.id} author={comment.author} content={comment.content} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
