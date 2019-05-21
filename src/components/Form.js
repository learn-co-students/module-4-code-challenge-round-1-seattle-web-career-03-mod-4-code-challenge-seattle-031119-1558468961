import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
}
handleSubmit = (event) => {
  event.preventDefault();
  this.props.newBookFormatted(event)
}
  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <label>
              Book Title:
            <input type="text" name="title" onChange={null} />
          </label>

          <label>
            Book Author:
            <input type="text" name="author" onChange={null} />
          </label>
          <label>
            Book Image:
            <input type="text"  name="img" onChange={null} />
          </label>

            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
