import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBookFormatted={this.props.newBookFormatted}/>
        <ul>{this.props.books.map( book => {
          return <Book key={book.id} book={book} handleClick={this.props.addBook} />
        })}</ul>
      </div>
    );
  }
}

export default BookList;
