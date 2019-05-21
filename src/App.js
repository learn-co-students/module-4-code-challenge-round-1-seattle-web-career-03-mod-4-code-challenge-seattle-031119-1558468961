import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form'
import Banner from './components/Banner'

class App extends Component {

  constructor(props){
    super(props)
    //Books stores the list of all books, shelf stores the books on your personal shelf.
    this.state = {
      books: [],
      shelf: []
    }

    //Fetch all books
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({books}) )

    //Context bindings for callbacks
    this.addBookToShelf = this.addBookToShelf.bind(this)
    this.removeFromShelf = this.removeFromShelf.bind(this)
    this.addNewBook = this.addNewBook.bind(this)
  }

  //Filters the argument book from the shelf array, then sets the state to the result
  removeFromShelf(bookToRemove){
    const newShelf = this.state.shelf.filter(book => book.id !== bookToRemove.id)
    this.setState({
      shelf: newShelf
    })
  }

  //Prepends the given book to the shelf array
  addBookToShelf(book){
    if(!this.state.shelf.includes(book)){
      this.setState({
        shelf: [...this.state.shelf, book]
      })
    }
  }

  //Launches a post to the API containing the book info.
  //If successful, adds the newly added book to the books array in state.

  //NOTE: we do it this way in order to ensure that the book has an id, which
  //it needs to render its unique key.
  addNewBook(newBook){

    //TODO: uncomment this so it can persist data.
    // fetch('http://localhost:3005/books', {
    //   method: "POST",
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(newBook)
    // })
    // .then(res => res.json())
    // .then(book => this.setState({
    //   books: [book, ...this.state.books]
    // }))

    this.setState({
      books: [newBook, ...this.state.books]
    })
  }

  //Render uses a partial to stack elements correctly without additional page clutter.
  render() {
    return (
      <>
        <Banner />
        <Form addNewBook={this.addNewBook}/>
        <div className="book-container">
          <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} addNewBook={this.addNewBook}/>
          <Bookshelf books={this.state.shelf} removeFromShelf={this.removeFromShelf}/>
        </div>
      </>
    );
  }
}

export default App;
