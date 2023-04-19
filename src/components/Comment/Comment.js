import React from "react";

/* 
- enter 'comment' object from CommentList as prop 
    - props now changed to author & content from CommentList ✅
- JSX - set each comment item as element in a comment div ✅
- initials function (turning author name into author initials) ✅
    - split() on author string to create names array [first name, second name]
    - use .map function to iterate through array and return first character in each array item [f, s]
    - save this as new array 'initialsArray'
    - return .map result array (initialsArray) in the initials function
- call initials function inside JSX ✅
*/

function Comment({ id, author, content }) {
  /*In the code

/* 
sets initials variable: 

- author.split(' ') splits author name at space character and puts into an array: [first name, last name]

- .map((name) => name[0]) iterates over each name in array and returns new array with first letter of each name: [f, l]

- .join('') is called on new array and concatenates back into one string: 'fl'

- toUpperCase is called on initial string to convert to uppercase: 'FL'
*/

  let initials = author.split(' ').map((name) => name[0]).join('').toUpperCase();

/*
- if length of initials string is greater than 3
    - initials.slice(0,2) returns string containing first two characters of initials string 
    - initials.slice(-1) returns string containing last character of initials string
    - these are then concatenated with + operator to create new string an reassigned to initials variable (initials =)
*/

  if (initials.length > 3) {
    initials = initials.slice(0,2) + initials.slice(-1);
  } 

  return (
    <li id="comment">
      <h3 id="author-initials">{initials}</h3>
      <h4>{author}</h4>
      <h4>{content}</h4>
    </li>
  );
}

export default Comment;
