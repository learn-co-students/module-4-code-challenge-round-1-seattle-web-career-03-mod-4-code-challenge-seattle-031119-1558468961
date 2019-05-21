import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  //Makes a bookshelf with one card per item, passing in removeFromShelf as the
  //click handler
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <div className="ui three cards">
        {props.books.map(book => <Book key={`shelf-${book.id}`}
                                         book={book}
                                         handleClick={props.removeFromShelf}
                                       />)}
      </div>
    </div>
  );
};

export default Bookshelf;
