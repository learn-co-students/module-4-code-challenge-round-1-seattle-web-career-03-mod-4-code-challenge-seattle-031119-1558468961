import React from "react";

class Form extends React.Component {
  render() {
    return <h3>{
      <div id="newBookForm">
        <form onSubmit={(ev) => this.props.handleSubmit(ev)}>
          <input type="text" name="title" placeholder="Title"></input><br></br>
          <input type="text" name="author" placeholder="Author"></input><br></br>
          <input type="text" name="img" placeholder="Image URL"></input><br></br>
          <input type="submit"></input>
        </form>
      </div>}
    </h3>;
  }
}

export default Form;
