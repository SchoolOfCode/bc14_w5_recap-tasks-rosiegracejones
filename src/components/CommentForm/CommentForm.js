/*
- JSX elements - form, input(x2), submit button ✅
- create an event key onClick to button element ✅
    - call onSubmit function ✅
- set comment input as contentText using prop as 'value' ✅

- In App Component:
    - change comments array to be an empty array using useState in App ✅
    - create a 'add to comment list' function using spread operator & setComments ✅
    - create empty string useState with individual comment text ✅
    - create a function that gets text from comment box and assigns to empty string ✅
    - hand down contentText, onSubmit & contentInput Change as props ✅
    - create onSubmit function that when called calls add to comment function & resets input box to empty
*/

import React from "react";

function CommentForm({ contentText, contentInputChange, onSubmit }) {
  return (
    <div className="comment-form">
      {/* <input id="comment-author"></input> */}

      <input
        id="comment-content"
        type="text"
        value={contentText}
        onChange={contentInputChange}
        placeholder="Enter your comment here."
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default CommentForm;
