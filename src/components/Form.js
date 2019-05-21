import React from "react";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author: '',
      img: ''
    }
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    return <div className="new-book-form">
      <form onSubmit={this.props.handleSubmit} >
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
        <input type="text" name="author" value={this.state.author} onChange={this.handleChange} placeholder="author"/>
        <input type="text" name="img" value={this.state.img} onChange={this.handleChange} placeholder="image url"/>
        <input type="submit" value="New Book"/>
      </form>
    </div>
  }
}

export default Form;
