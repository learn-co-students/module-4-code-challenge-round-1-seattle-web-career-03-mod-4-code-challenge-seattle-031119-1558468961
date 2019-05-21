import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API ="http://localhost:3005/books"
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books: [],
      bookshelf: []
    }
  fetch(API)
  .then(res => res.json())
  .then(books => this.setState({ books})
  )
  console.log("hit");
  }

  addBook = (book) => {
    console.log('here')
      if(!this.state.bookshelf.find(clicked => clicked.id === book.id)) {
        console.log('Book Added!')

        const newBook= [...this.state.bookshelf, book]
        this.setState({
          bookshelf: newBook
        },()=>console.log(this.state.bookshelf))
      }
    }


    removeBook = (book) => {
      console.log("Book Removed!")

      const newBook = this.state.bookshelf.filter(clicked => clicked.id !== book.id)
      this.setState({
        bookshelf: newBook
        })
      }


    handleChange =(event) =>{
      this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      const newBook= [...this.state.books, event.value]
      this.setState({
        books: newBook
      })
      // console.log(this.state.book);
    }

  render() {
    return (
      <div className="book-container">
      // Books recieved:{this.state.books.length}
        <BookList
        books={this.state.books}
        addBook={this.addBook}
        />
        <Bookshelf
        bookshelf={this.state.bookshelf}
         removeBook={this.removeBook}
         />
      </div>
    );
  }
}

export default App;
