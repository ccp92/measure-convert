import weights, { weightUnit } from "./index";

describe("temperatures", () => {
  it("should return the correct pounds value when given kilograms", () => {
    expect(weights(1, weightUnit.kg, weightUnit.lbs)).toBe(2);
    expect(weights(80, weightUnit.kg, weightUnit.lbs)).toBe(176);
  });

  it("should return the correct pounds value when given kilograms and a rounding value", () => {
    expect(weights(1, weightUnit.kg, weightUnit.lbs, 3)).toBe(2.205);
    expect(weights(80, weightUnit.kg, weightUnit.lbs, 3)).toBe(176.37);
  });

  it("should return the correct kilograms value when given pounds", () => {
    expect(weights(12, weightUnit.lbs, weightUnit.kg)).toBe(5);
    expect(weights(180, weightUnit.lbs, weightUnit.kg)).toBe(82);
  });

  it("should return the correct kilograms value when given pounds and a rounding value", () => {
    expect(weights(2.2, weightUnit.lbs, weightUnit.kg, 3)).toBe(0.998);
    expect(weights(176.37, weightUnit.lbs, weightUnit.kg, 3)).toBe(80);
  });

  it("should return an error if both measures are kg", () => {
    expect(() => weights(0, weightUnit.kg, weightUnit.kg)).toThrow(
      "Cannot convert from kg to kg"
    );
  });

  it("should return an error if both measures are pounds", () => {
    expect(() => weights(0, weightUnit.lbs, weightUnit.lbs)).toThrow(
      "Cannot convert from lbs to lbs"
    );
  });
});
