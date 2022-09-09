import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

interface CustomListMethods {
  handleChange: Function;
  handleSubmit: Function;
}

class CustomList extends React.Component<
  {},
  { items: string[]; text: string },
  {}
> {
  constructor(props: any) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.state.text.length > 0) {
      this.setState({
        items: [...this.state.items, this.state.text],
        text: "",
      });
    }
  }

  render() {
    return (
      <Container>
        <div className="todo-list">
          <h1>Todo List</h1>
          {this.state.items.map((item:string) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <button>Add #{this.state.items.length + 1} Item</button>
          </form>
        </div>
      </Container>
    );
  }
}

export default CustomList;
