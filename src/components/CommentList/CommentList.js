import React from "react";
import Comment from "../Comment/Comment";

/* 
- enter comments prop from App, which is an array of objects, each containing id, author, content ✅
- remove 'comment' variable - this will be replaced with comments array in App ✅
- JSX - use comments.map to return multiple Comment components (in CommentList return) ✅
- props have now changed for Comment component - change to author & content ✅
*/

function CommentList({ comments }) {
  /* const comment = {author: "Charlie Green", content: "React, for frontend? Groundbreaking." }; */

  return (
    <div id="comment-list">
      {comments.map((item) => {
        return <Comment
            key={item.id}
            author={item.author}
            content={item.content}
          />;
      })}
    </div>
  );
}

export default CommentList;
