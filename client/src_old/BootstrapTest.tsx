import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './App.css';

function BootstrapTest() {
  let now = moment().format('MMMM Do YYYY, h:mm:ss a');
  useEffect(() => {}, [now]);
  return (
    <div className="App">
    <Container>
      <Row>
        <Col><h1>col1</h1> </Col>
        <Col><h1>col2</h1> </Col>
        </Row>

        <Row><h2>{}</h2></Row>
    </Container>
    </div>
  );
}

const f1 = () => {
  console.log('f1');
}

export default BootstrapTest;
