import React from "react";
import ReactDOM from "react-dom/client";
import { Container, ListGroup } from "react-bootstrap";

class ListAndKeys extends React.Component<{numbers:number[]}, {}> {
//   constructor(props: {numbers:[number]}) {
//     super(props);
//   }

  double = (numbers:number[]) => {
    const array1 = numbers;
    const doubleArrayJSX = array1.map((e) => <ListGroup.Item>{e * 2}</ListGroup.Item>);
    return <ListGroup>{doubleArrayJSX}</ListGroup>;
  };

  render() {
    
    return <Container>{this.double(this.props.numbers)}</Container>;
  }
}

export default ListAndKeys;
