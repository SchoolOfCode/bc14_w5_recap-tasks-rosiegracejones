import React, { useState }from 'react';

/*
- JSX elements - form, input(x2), submit button
- enter onSubmit prop from app:
    - create an event key onClick to button elemet

- in button element, call onSubmit function
    - if comment input is empty, do not call onSubmit
    - when called, it should clear comment input but not name

- In App Component:
    - change comments array to be an empty array using useState in App
    - create a 'add to comment list' function using spread operator & setComments
    - create a function that gets text from comment box
    - create onSubmit function that adds text to comment list & resets text
*/

function CommentForm({ onSubmit }) {

// to make comment submit when pressing enter:
// const handleKeyPress = (event) => {
  // if (event.key === "Enter") {
    // onSubmit();
  // }
// }


  return (
    <div className="comment-form">
      <form>
        <input></input>
        {/* <input type="text" value={} onChange={onInputChange} placeholder="Comment goes here" onKeyPress={handleKeyPress}></input> */}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm;
