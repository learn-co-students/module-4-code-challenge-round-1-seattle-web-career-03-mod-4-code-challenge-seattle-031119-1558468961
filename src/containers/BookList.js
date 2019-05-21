import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  generateBooks(){
    return this.props.books.map(book => {
      return <Book key={`book-${book.id}`} book={book} handleClick={this.props.addBookToShelf}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook}/>
        <ul>{this.generateBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
