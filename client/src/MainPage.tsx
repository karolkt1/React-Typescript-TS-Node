import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

class MainPage extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div>
          <h1>You've successfully logged in</h1>
        </div>
      </Container>
    );
  }
}

export default MainPage
