export const enum weightUnit {
  kg = "kg",
  lbs = "lbs",
}

const weights = (
  value: number,
  sourceMeasurement: weightUnit,
  targetMeasurement: weightUnit,
  rounding: number = 0
) => {
  const isKilogramToPounds =
    sourceMeasurement === weightUnit.kg && targetMeasurement === weightUnit.lbs;

  const isPoundsToKilogram =
    sourceMeasurement === weightUnit.lbs && targetMeasurement === weightUnit.kg;

  if (isKilogramToPounds) {
    return +(value * 2.20462262185).toFixed(rounding);
  }

  if (isPoundsToKilogram) {
    return +(value / 2.20462262185).toFixed(rounding);
  }

  throw new Error(
    `Cannot convert from ${sourceMeasurement} to ${targetMeasurement}`
  );
};

export default weights;
