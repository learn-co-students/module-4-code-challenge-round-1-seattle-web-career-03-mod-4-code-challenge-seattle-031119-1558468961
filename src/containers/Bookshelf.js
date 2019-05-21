import React, {Component} from "react";
import Book from "../components/Book";

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.props.books.map(book => {
              return <Book
                key={book.id}
                book={book}
                handleClick={this.props.handleClick}
              />
            })
          }
        </ul>
      </div>
    );
  }
};

export default Bookshelf;
