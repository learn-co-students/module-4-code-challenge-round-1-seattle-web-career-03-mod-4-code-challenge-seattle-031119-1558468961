import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {

  //TODO: if this can be put in line, or otherwise worked with, this component could
  //be a function instead of a class.

  //Makes a book for all books in the total array, passing addBookToShelf as their
  //click listener  
  generateBooks(){
    return this.props.books.map(book => {
      return <Book key={`book-${book.id}`} book={book} handleClick={this.props.addBookToShelf}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <div className="ui three cards all-books">{this.generateBooks()}</div>
      </div>
    );
  }
}

export default BookList;
