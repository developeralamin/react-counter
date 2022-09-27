import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="count">
        <h1>Count: {count}</h1>
        <div className="countBtn">
          <Button variant="primary" onClick={this.handleIncrement}>
            +
          </Button>
          <Button
            variant="primary"
            onClick={this.handleDecrement}
            disabled={count === 0 ? true : false}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}
