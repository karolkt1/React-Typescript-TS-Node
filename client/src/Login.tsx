import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";

class Login extends React.Component<{}, { email: string; password: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    // const data = new FormData(event.target);
    let res = await axios.post("http://localhost:8000/login", data);
    if (res.data.authenticated == true) {
      localStorage.setItem("authenticated", "true");
      return <Outlet></Outlet>;
    } else {
      localStorage.setItem("authenticated", "false");
      return <Navigate to="/main" />;
    }
  };

  render() {
    return (
      <Container>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                type="email"
                placeholder="Enter email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;
