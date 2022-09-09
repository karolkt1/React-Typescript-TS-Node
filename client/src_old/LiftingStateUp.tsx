import React from "react";

class BoilingVerdict extends React.Component<{ celsius: number }, {}> {
  render() {
    const celsius = this.props.celsius;
    if (celsius >= 100) {
      return <p>The water would boil.</p>;
    } else {
      return <p>The water would not boil.</p>;
    }
  }
}

class Calculator extends React.Component<
  {},
  { temperature: string; scale: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }
  handleCelsiusChange = (temperature: string) => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature: string) => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    let celsius;
    if (scale === "c") {
      celsius = temperature;
    } else {
      celsius = tryConvert(temperature, toCelsius);
    }
    let fahrenheit;
    if (scale === "f") {
      fahrenheit = temperature;
    } else {
      fahrenheit = tryConvert(temperature, toFahrenheit);
    }
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class TemperatureInput extends React.Component<
  {
    scale: keyof typeof scaleNames;
    temperature: string;
    onTemperatureChange: Function;
  },
  { temperature: string }
> {
  constructor(props: {
    scale: keyof typeof scaleNames;
    temperature: string;
    onTemperatureChange: Function;
  }) {
    super(props);
    this.state = { temperature: "" };
  }

  handleChange = (e: { target: { value: string } }) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature: string, convert: Function) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
export default Calculator;
