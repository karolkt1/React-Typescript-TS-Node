import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Login extends React.Component<{}, {}> {

  handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event);
    let data = {
      // username: event.target.username.value,
      password: event.target.password.value,
    };
    // const data = new FormData(event.target);
    // let res = await axios.post("http://localhost:8000/login", data);
    // console.log(res);
  };

  testButton = async (event: any) => {
    let res = await axios.post("http://localhost:8000/login");
    console.log(res);
  };

  render() {
    return (
      <Container>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <p>test button</p>
          <Button variant="primary" type="submit" onClick={this.testButton}>
            Test
          </Button>
        </div>
      </Container>
    );
  }
}

export default Login;
