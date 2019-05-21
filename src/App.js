import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super()
    this.state ={
      list: [],
      shelf: []
    }
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({list: books}))
  }

  moveToShelf = (bookToMove) => {
    let listCopy = [...this.state.list]
    listCopy = listCopy.filter(book => book.id !== bookToMove.id)

    this.setState({
      list: listCopy,
      shelf: [bookToMove, ...this.state.shelf]
    })
  }

  removeFromShelf = (bookToRemove) => {
    let shelfCopy = [...this.state.shelf]
    shelfCopy = shelfCopy.filter(book => book.id !== bookToRemove.id)

    this.setState({
      list: [bookToRemove, ...this.state.list],
      shelf: shelfCopy
    })
  }

  newBook = (ev) => {
    ev.preventDefault()
    //I give this book an id so that React shuts up about keys on maps.
    //Normally I'd let the database handle that though
    let newBook = {
      title: ev.target.elements[0].value,
      author: ev.target.elements[1].value,
      img: ev.target.elements[2].value,
      id: this.state.list.length + this.state.shelf.length + 1
    }

    //search all books for book with matching title and author
    let allBooks = [...this.state.list, ...this.state.shelf]
    let matchTitle = allBooks.filter(book => book.title === newBook.title)
    let matchAuthor = matchTitle.filter(book => book.author === newBook.author)
    if (matchAuthor.length > 0) return

    this.setState({list: [newBook, ...this.state.list]})
  }

  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="logo-div">
            <img className="App-logo" src={logo}/>
          </div>
          <h1>Dat Book Challenge</h1>
          <Form handleSubmit={this.newBook}/>
          <br></br>
        </div>
        <div className="book-container">
          <BookList list={this.state.list} handleClick={this.moveToShelf}/>
          <Bookshelf shelf={this.state.shelf} handleClick={this.removeFromShelf}/>
        </div>
      </div>
    );
  }
}

export default App;
