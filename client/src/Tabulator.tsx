import React from "react";
import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import { ReactTabulator } from "react-tabulator";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

interface SimpleDataFormat {
  firstName: string;
  lastName: string;
}

class Tabulator extends React.Component<{}, { data: string[] }> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }
  getTabulatorData = async (): Promise<SimpleDataFormat[]> => {
    let res = await axios.get("http://localhost:8000/tabulator");
    console.log(res.data);
    this.setState({ data: res.data });
    return res.data;
  };

  columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
  ];

  render() {
    return (
      <div>
        <Container>
          <div>
            <Button onClick={this.getTabulatorData}>Get Data</Button>
          </div>
          <div>
            <ReactTabulator
              data={this.state.data}
              columns={this.columns}
              layout={"fitData"}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Tabulator;
