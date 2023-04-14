import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      hovered: 0,
      submit: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert("Submitted data. Email" + this.state.email);
    this.setState({
      submit: this.state.submit + 1,
      email: "",
      phone: "",
    });
  };

  onHover = (e) => {
    this.setState({
      hovered: this.state.hovered + 1,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onMouseEnter={this.onHover}>
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} />
        <label>Phone</label>
        <input type="text" name="phone" value={this.state.phone} />
      </form>
    );
  }
}

export default App;
