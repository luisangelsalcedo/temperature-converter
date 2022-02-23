import { TemperatureConverter } from "./TemperatureConverter";

export const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">
          Temperature
          <br />
          Converter
        </h1>

        <TemperatureConverter />
      </div>
    </div>
  );
};
