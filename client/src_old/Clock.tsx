import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

class Clock extends React.Component<{}, { time: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  tick() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidMount() {
    this.tick();
  }

  render() {
    return (
      <Container>
        <div>
          <h1>{this.state.time}</h1>
        </div>
      </Container>
    );
  }
}

export default Clock;
