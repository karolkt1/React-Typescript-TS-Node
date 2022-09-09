import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import _ from "lodash";
import Col from "react-bootstrap/Col";
// import { log } from "console";

class ShoppingList extends React.Component
<
  { name: string },
  { counter: number },
  {}
> {
  constructor(props: { name: string }) {
    super(props);
    this.state = { counter: 0 };
  }

  tick() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  componentDidMount() {
    console.log("componentDidMount");

    setInterval(() => this.tick(), 1000);
  }
  f1 = ():string => {
    let ar1 = [1, 2, 3, 4, 5];
    let ar2 = [1, 2, 3, 4, 5];
    let ar3 = _.concat(ar1, ar2);
    // console.log("ar3", ar3);
    return ar3.toString();
  };

  render() {
    return (
      <Container>
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <h2>{this.state.counter}</h2>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <h3>{this.f1()}</h3>
        </div>
      </Container>
    );
  }
}

export default ShoppingList;
