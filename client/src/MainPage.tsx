import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

class MainPage extends React.Component<{}, { navigate: string }> {
  constructor(props: any) {
    super(props);
    this.state = { navigate: "" };
  }
  navigateState = (link) => {
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
        {(() => {
          switch (this.state.navigate) {
            case "/tabulator":
              return <Navigate to="/tabulator" />;
            case "/tanstacktable":
              return <Navigate to="/tanstacktable" />;
            default:
              return <Navigate to="/main" />;
          }
        })()}
      </Container>
    );
  }
}

export default MainPage;
