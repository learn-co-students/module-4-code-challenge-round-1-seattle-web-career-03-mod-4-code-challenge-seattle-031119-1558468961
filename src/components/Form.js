import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
}

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <label>
              Book Title:
            <input type="text" value={this.props.title} onChange={this.handleChange} />
          </label>

          <label>
            Book Author:
            <input type="text" value={this.props.author} onChange={this.handleChange} />
          </label>
          <label>
            Book Image:
            <input type="text" value={this.props.img} onChange={this.handleChange} />
          </label>

            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
