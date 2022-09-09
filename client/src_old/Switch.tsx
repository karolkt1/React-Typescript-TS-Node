import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom/client";

class Switch extends React.Component<{}, { status: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { status: false };
  }

  handleClick = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  currentStatus = (): string => {
    if (this.state.status) {
      return "ON";
    } else {
      return "OFF";
    }
  };

  render() {
    return (
      <Container>
        <div>
          <button onClick={this.handleClick}>{this.currentStatus()}</button>
        </div>
      </Container>
    );
  }
}

export default Switch;
