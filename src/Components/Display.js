import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

export default Display;
