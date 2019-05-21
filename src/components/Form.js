import React from "react";

class Form extends React.Component {

  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    const book = {
      title: ev.target.elements['title'].value,
      author: ev.target.elements['author'].value,
      img: ev.target.elements['img'].value,
    }

    this.props.addNewBook(book)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="title" placeholder="Title"/>
      <input type="text" name="author" placeholder="Author"/>
      <input type="text" name="img" placeholder="Image URL"/>
      <input type="submit" value="Submit"/>
    </form>;
  }
}

export default Form;
