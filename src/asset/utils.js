export const formula = {
  notationCelsius(value) {
    return `(${value} °C × 9/5) + 32`;
  },

  notationFahrenheit(value) {
    return `(${value} °F − 32) × 5/9 `;
  },

  toCelsius(value) {
    const result = ((value - 32) * 5) / 9;
    return this.floatValided(result);
  },

  toFahrenheit(value) {
    const result = (value * 9) / 5 + 32;
    return this.floatValided(result);
  },

  floatValided(num) {
    // si es un decimal lo reducimos a 4 decimales
    // si es un entero retornamos sin ningun cambio
    return num % 2 !== 0 && num % 2 !== 1 ? num.toFixed(4) : num;
  },
};
