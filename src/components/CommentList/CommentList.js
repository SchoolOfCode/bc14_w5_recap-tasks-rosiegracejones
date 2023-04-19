import React from "react";
import Comment from "../Comment/Comment";

/* 
- enter comments prop from App, which is an array of objects, each containing id, author, content ✅
- remove 'comment' variable - this will be replaced with comments array in App ✅
- JSX - use comments.map to return multiple Comment components (in CommentList return) ✅
- props have now changed for Comment component - change to author & content ✅
*/

function CommentList({ commentList }) {
  /* const comment = {author: "Charlie Green", content: "React, for frontend? Groundbreaking." }; */

  return (
    <div id="comment-list">
      <ul>
        {commentList.map((comment) => (
          <div key={comment.id}>
            <Comment id={comment.id} author={comment.author} content={comment.content} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
