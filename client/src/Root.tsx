import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

class Root extends React.Component<{}, { redirect: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      redirect: false,
    };
  }
  goToLogin = (e) => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    return (
      <Container>
        <Button variant="primary" type="submit" onClick={this.goToLogin}>
          Login
        </Button>
        {this.state.redirect ? <Navigate to="/login" /> : null}
      </Container>
    );
  }
}

export default Root;
