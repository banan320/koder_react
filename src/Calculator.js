import { React, useState } from "react";

// const scaleNames = [{ t: "Цельсия" }, { t: "Фаренгейта" }];
const scaleNames = {
  c: "Цельсия",
  f: "Фаренгейта",
};

const TemperatureInput = ({ scale, onChange, temp }) => {
  return (
    <div>
      <h2>Введите температуру в градусах {scaleNames[scale]}:</h2>
      <input value={temp} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temp={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temp={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default Calculator;
