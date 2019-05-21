import React from "react";

class Form extends React.Component {
  render() {
    return <h3>{
      <div className="form">
        <form onSubmit={(ev) => this.props.handleSubmit(ev)}>
          Title: <input type="text" name="title"></input><br></br>
          Author: <input type="text" name="author"></input><br></br>
          Image Url: <input type="text" name="img"></input><br></br>
          <input type="submit"></input>
        </form>
      </div>}
    </h3>;
  }
}

export default Form;
