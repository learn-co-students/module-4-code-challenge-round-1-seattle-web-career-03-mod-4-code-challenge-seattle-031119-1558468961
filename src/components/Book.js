import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleClick(props.book)}>
      <h4>{props.book.title}</h4>
      <img className="book-covers" src={props.book.img} alt={props.book.title}/>
    </div>
  );
};

export default Book;
