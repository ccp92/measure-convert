export const enum temperatureUnit {
  celsius = "celsius",
  fahrenheit = "fahrenheit",
}

const temperatures = (
  value: number,
  sourceMeasurement: temperatureUnit,
  targetMeasurement: temperatureUnit,
  rounding: number = 0
) => {
  const isFahrenheitToCelsius =
    sourceMeasurement === temperatureUnit.fahrenheit &&
    targetMeasurement === temperatureUnit.celsius;

  const isCelsiusToFahrenheit =
    sourceMeasurement === temperatureUnit.celsius &&
    targetMeasurement === temperatureUnit.fahrenheit;

  if (isFahrenheitToCelsius) {
    return +(((value - 32) * 5) / 9).toFixed(rounding);
  }

  if (isCelsiusToFahrenheit) {
    return +((value * 9) / 5 + 32).toFixed(rounding);
  }

  throw new Error(
    `Cannot convert from ${sourceMeasurement} to ${targetMeasurement}`
  );
};

export default temperatures;
