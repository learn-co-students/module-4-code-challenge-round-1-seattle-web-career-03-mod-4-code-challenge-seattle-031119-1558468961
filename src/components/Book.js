import React from "react";

const Book = (props) => {
  return (
    <div onClick={() => props.handleClick(props.book)}>
      <h2>{props.book.title}</h2>
      <img alt={props.book.title} src={props.book.img}/>
    </div>
  );
};

export default Book;
