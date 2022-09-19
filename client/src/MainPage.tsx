import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

class MainPage extends React.Component<{}, { navigate: string }> {
  constructor(props: any) {
    super(props);
    this.state = { navigate: "" };
  }
  navigateState = (link: string) => {
    this.setState({ navigate: link });
  };


  render() {
    return (
      <Container>
        <div>
          <h1>You've successfully logged in</h1>
        </div>
        <Button
          onClick={() => {
            this.navigateState("/tabulator");
          }}
        >
          Tabulator
        </Button>
        <div>
          {this.state.navigate && <Navigate to={this.state.navigate} />}
        </div>
      </Container>
    );
  }
}

export default MainPage;
