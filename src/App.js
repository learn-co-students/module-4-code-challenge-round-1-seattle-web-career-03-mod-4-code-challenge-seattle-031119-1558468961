import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      myBooks: []
    }

    this.fetchBooks = this.fetchBooks.bind(this)
    this.addToShelf = this.addToShelf.bind(this)
    this.removeBook = this.removeBook.bind(this)
    this.createBookObject = this.createBookObject.bind(this)
    this.createNewBook = this.createNewBook.bind(this)

    this.fetchBooks()
  }

  fetchBooks() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => {
      this.setState({books: books}, console.log(books))
    })
  }

  addToShelf(book) {
    let myBookList = this.state.myBooks
    if (!myBookList.includes(book)) {
      myBookList.push(book)
      this.setState({myBooks: myBookList})
    }
  }

  removeBook(book) {
    let myBookList = this.state.myBooks
    let bookIndex = myBookList.indexOf(book)
    myBookList.splice(bookIndex,1)
    this.setState({myBooks: myBookList})
  }

  createBookObject(ev) {
    let createID = 10
    ev.preventDefault()
    let book = {
      "id": createID,
      "title": ev.target.elements["title"].value,
      "author": ev.target.elements["author"].value,
      "img": ev.target.elements["img"].value
    }
    this.createNewBook(book)
  }

  createNewBook(book) {
    let updatedBookList = this.state.books
    if (!updatedBookList.includes(book)) {
      updatedBookList.push(book)
      this.setState({books: updatedBookList})
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          handleClick={this.addToShelf}
          handleSubmit={this.createBookObject}
        />
        <Bookshelf
          books={this.state.myBooks}
          handleClick={this.removeBook}
        />
      </div>
    );
  }
}

export default App;
