import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginController extends React.Component<{}, { logged: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { logged: false };
  }
  login = () => {
    this.setState({ logged: true });
  };
  logout = () => {
    this.setState({ logged: false });
  };

  render() {
    let button;
    if (this.state.logged == true) {
      button = (
        <Button variant="secondary" onClick={this.logout}>
          Logout
        </Button>
      );
    } else {
      button = (
        <Button variant="primary" onClick={this.login}>
          Login
        </Button>
      );
    }
    let status;
    if(this.state.logged == true){
      status = <h1>You are logged in</h1>;
    } else {
      status = <h1>You are not logged in</h1>;
    }
    return (
      <Container>
        <div>{button}</div>
        <div>{status}</div>
      </Container>
    );
  }
}

export default LoginController;
