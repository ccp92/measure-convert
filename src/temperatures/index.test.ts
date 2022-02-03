import temperatures, { measures } from "./index";

describe("temperatures", () => {
  it("should return the correct celsius value when given fahrenheit", () => {
    expect(temperatures(32, measures.fahrenheit, measures.celsius)).toBe(0);
    expect(temperatures(212, measures.fahrenheit, measures.celsius)).toBe(100);
  });

  it("should return the correct fahrenheit value when given celsius", () => {
    expect(temperatures(0, measures.celsius, measures.fahrenheit)).toBe(32);
    expect(temperatures(100, measures.celsius, measures.fahrenheit)).toBe(212);
  });

  it("should return an error if both measures are celsius", () => {
    expect(() => temperatures(0, measures.celsius, measures.celsius)).toThrow(
      "Cannot convert from celsius to celsius"
    );
  });

  it("should return an error if both measures are fahrenheit", () => {
    expect(() =>
      temperatures(0, measures.fahrenheit, measures.fahrenheit)
    ).toThrow("Cannot convert from fahrenheit to fahrenheit");
  });
});
