export const UnitSelector = ({ handle, defaultValue }) => {
  return (
    <div className="d-flex align-items-center">
      <span>convert to:</span>
      <div className="converter__select">
        <select
          name="temp"
          id="temp"
          onChange={handle}
          defaultValue={defaultValue}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </div>
  );
};
