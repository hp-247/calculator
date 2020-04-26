import React from "react";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: "",
      submit: "Type Something....",
      input2: "",
    };
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  reset = () => {
    this.setState((state) => ({
      count: 0,
    }));
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      submit: state.input,
    }));
  };

  handleReset = () => {
    this.setState((state) => ({
      submit: "Type Something...",
      input: "",
    }));
  };

  handleChange2 = (event) => {
    this.setState({
      input2: event.target.value,
    });
  };

  handleReset2 = () => {
    this.setState((state) => ({
      input2: "",
    }));
  };

  times = (event) => {
    const num = event.target.value;
    this.setState((state) => ({
      count: state.count * num,
    }));
  };

  render() {
    return (
      <div>
        <h1>Henry's Amazing App</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <Display count={this.state.count} />
        <button onClick={this.times} value={2}>
          Times 2
        </button>
        <button onClick={this.times} value={5}>
          Times 5
        </button>
        <button onClick={this.times} value={10}>
          Times 10
        </button>
        <hr />
        <h1>Typing Copy</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <p style={{ color: "blue" }}>Content: {this.state.submit}</p>
        </form>
        <button onClick={this.handleReset}>Reset</button>

        <hr />
        <h1>Mirror Typing</h1>
        <input value={this.state.input2} onChange={this.handleChange2} />
        <p style={{ color: "red" }}>Content: {this.state.input2}</p>
        <button onClick={this.handleReset2}>Reset</button>
        <hr />
      </div>
    );
  }
}

export default App;
