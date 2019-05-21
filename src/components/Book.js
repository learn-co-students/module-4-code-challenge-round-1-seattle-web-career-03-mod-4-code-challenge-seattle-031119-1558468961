import React from "react";

const Book = ({book, handleClick}) => {
  //Renders the Book
  return (
    <div className="ui card">
      <div className="image">
        <img onClick={() => handleClick(book)} src={book.img} alt={book.title} />
      </div>
      <div className="content">
        <h2>{book.title}</h2>
      </div>
      <div className="meta">
        <p>By {book.author}</p>
      </div>


    </div>
  );
};

export default Book;
