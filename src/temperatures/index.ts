export const enum measures {
  celsius = "celsius",
  fahrenheit = "fahrenheit",
}

const temperatures = (
  value: number,
  sourceMeasurement: measures,
  targetMeasurement: measures
) => {
  const isFahrenheitToCelsius =
    sourceMeasurement === measures.fahrenheit &&
    targetMeasurement === measures.celsius;

  const isCelsiusToFahrenheit =
    sourceMeasurement === measures.celsius &&
    targetMeasurement === measures.fahrenheit;

  if (isFahrenheitToCelsius) {
    return ((value - 32) * 5) / 9;
  }

  if (isCelsiusToFahrenheit) {
    return (value * 9) / 5 + 32;
  }

  throw new Error(
    `Cannot convert from ${sourceMeasurement} to ${targetMeasurement}`
  );
};

export default temperatures;
