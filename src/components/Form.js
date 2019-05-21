import React from "react";

class Form extends React.Component {

  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //Handles the submit in-component to keep things cleaner, then submits the new
  //book object up the chain.
  handleSubmit(ev){
    ev.preventDefault()
    const book = {
      title: ev.target.elements['title'].value,
      author: ev.target.elements['author'].value,
      img: ev.target.elements['img'].value,
    }
    this.props.addNewBook(book)
  }

  //Semantic UI form grid using a three input layout.
  render() {
    return <form id="add-book-form" className="ui form" onSubmit={this.handleSubmit}>
      <h2>Add A New Book</h2>
      <div className="three fields">
        <div className="field">
          <input type="text" name="title" placeholder="Title"/>
        </div>
        <div className="field">
          <input type="text" name="author" placeholder="Author"/>
        </div>
        <div className="field">
          <input type="text" name="img" placeholder="Image URL"/>
        </div>
      </div>
      <input className="ui button" type="submit" value="Submit"/>
    </form>;
  }
}

export default Form;
