import temperatures, { temperatureUnit } from "./index";

describe("temperatures", () => {
  it("should return the correct celsius value when given fahrenheit", () => {
    expect(temperatures(32, temperatureUnit.fahrenheit, temperatureUnit.celsius)).toBe(0);
    expect(temperatures(212, temperatureUnit.fahrenheit, temperatureUnit.celsius)).toBe(100);
  });

  it("should return the correct fahrenheit value when given celsius", () => {
    expect(temperatures(0, temperatureUnit.celsius, temperatureUnit.fahrenheit)).toBe(32);
    expect(temperatures(100, temperatureUnit.celsius, temperatureUnit.fahrenheit)).toBe(212);
  });

  it("should return an error if both measures are celsius", () => {
    expect(() => temperatures(0, temperatureUnit.celsius, temperatureUnit.celsius)).toThrow(
      "Cannot convert from celsius to celsius"
    );
  });

  it("should return an error if both measures are fahrenheit", () => {
    expect(() =>
      temperatures(0, temperatureUnit.fahrenheit, temperatureUnit.fahrenheit)
    ).toThrow("Cannot convert from fahrenheit to fahrenheit");
  });
});
