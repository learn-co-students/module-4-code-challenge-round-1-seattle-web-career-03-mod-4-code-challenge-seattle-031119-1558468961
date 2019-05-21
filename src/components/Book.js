import React from "react";

const Book = props => {
  console.log(props);
  return (
  <div onClick={()=> props.handleClick(props.book)}>
    <div>
      <h2>{props.book.title}</h2>
    </div>
    <div>
    <img src={props.book.img} alt={props.book.title}/>
      </div>
        </div>

  );
};

export default Book;
