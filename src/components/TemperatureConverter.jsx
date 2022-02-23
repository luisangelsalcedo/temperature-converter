import { useEffect, useRef, useState } from "react";
import { formula } from "../asset/utils";
import { UnitSelector } from "./UnitSelector";

export const TemperatureConverter = () => {
  const [isCelsius, setIsCelsius] = useState(false);
  const inputRef = useRef();
  const resultRef = useRef();

  const convertionValue = value => {
    const num = Number(value);

    if (isNaN(num)) return "ingresa solo números";

    return isCelsius
      ? `${num} F° = ${formula.toCelsius(num)} C°`
      : `${num} C° = ${formula.toFahrenheit(num)} F°`;
  };

  // imprimir dentro del div result
  const printResult = str => {
    resultRef.current.innerText = str;
  };

  // actualizamos el estado
  const handleUnitChange = () => {
    setIsCelsius(unit => !unit);
  };

  // cambiamos el valor cuando ingresamos el valor de entrada
  const handleInsertValue = e => {
    const value = e.target.value;
    printResult(convertionValue(value));
  };

  // cambiamos el valor cuando actualizamos el estado
  useEffect(() => {
    const value = inputRef.current.value;
    printResult(convertionValue(value));
  }, [isCelsius]);

  console.log("Componente renderizado");

  return (
    <div className="converter">
      <label>
        {`Enter a value in  ${isCelsius ? "Fahrenheit" : "Celsius"}`}

        <div className="converter__input">
          <input
            ref={inputRef}
            id="inputNum"
            type="text"
            placeholder="0"
            maxLength="3"
            onChange={handleInsertValue}
            pattern=".*^(?:\+|-)?\d+$.*"
            required={true}
          />
          <div className="converter__input--shape"></div>
          <div className="converter__input--unit">
            <span>{isCelsius ? "F°" : "C°"}</span>
          </div>
          <label htmlFor="inputNum" className="converter__label">
            <i class="fa fa-th" aria-hidden="true"></i>
          </label>
        </div>
      </label>
      <UnitSelector
        handle={handleUnitChange}
        defaultValue={`${isCelsius ? "Celsius" : "Fahrenheit"}`}
      />

      <div className="converter__result" ref={resultRef}></div>
    </div>
  );
};
