import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
      shelf: []
    }

    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({books}) )

    this.addBookToShelf = this.addBookToShelf.bind(this)
    this.removeFromShelf = this.removeFromShelf.bind(this)
    this.addNewBook = this.addNewBook.bind(this)
  }

  removeFromShelf(bookToRemove){
    const newShelf = this.state.shelf.filter(book => book.id !== bookToRemove.id)
    this.setState({
      shelf: newShelf
    })
  }

  addBookToShelf(book){
    if(!this.state.shelf.includes(book)){
      this.setState({
        shelf: [...this.state.shelf, book]
      })
    }
  }

  addNewBook(newBook){
    fetch('http://localhost:3005/books', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(book => this.setState({
      books: [book, ...this.state.books]
    }))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} addNewBook={this.addNewBook}/>
        <Bookshelf books={this.state.shelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
