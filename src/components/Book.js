import React from "react";

const Book = ({book, handleClick}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img onClick={() => handleClick(book)} src={book.img} alt={book.title} />
    </div>
  );
};

export default Book;
