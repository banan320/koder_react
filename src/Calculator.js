import { React, useState, useMemmo } from "react";

const scaleNames = [{ t: "Цельсия" }, { t: "Фаренгейта" }];

const TemperatureInput = ({ scale, setState, temp }) => {
  return (
    <div>
      <h2>Введите температуру в градусах {scale}:</h2>
      <input value={temp} />
    </div>
  );
};

const Calculator = () => {
  const [fahr, setFahr] = useState(0);
  const [cels, setCels] = useState(0);
  const [scale, setScale] = useState(scaleNames);

  return (
    <div>
      <TemperatureInput
        scale={scale.c}
        temp={cels}
        setCels={(e) => setCels(e.target.value)}
      />
      <TemperatureInput
        scale={scale.f}
        temp={fahr}
        setCels={(e) => setFahr(e.target.value)}
      />
    </div>
  );
};

export default Calculator;
