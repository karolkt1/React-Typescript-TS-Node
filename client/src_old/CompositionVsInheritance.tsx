import { render } from "@testing-library/react";
import React from "react";

class CompositionVsInheritance extends React.Component {}

class FancyBorder extends React.Component<{ color: string; children: any }> {
  render() {
    console.log(this.props.children);

    return (
      <div className={"FancyBorder FancyBorder-" + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class WelcomeDialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
    );
  }
}

class SplitPane extends React.Component<{ left: any; right: any }> {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">{this.props.left}</div>
        <div className="SplitPane-right">{this.props.right}</div>
      </div>
    );
  }
}

class App extends React.Component {
    render() {
        return (
            <SplitPane left={{}} right={{}} />
        )
    }
}

export default WelcomeDialog;
