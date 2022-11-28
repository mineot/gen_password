// @ts-check
import { GenPasswordError, InvalidTypeError, InvalidDimensionError, TypeNotFoundError } from "../src/core/errors";

test("Error - General", () => {
  try {
    throw new GenPasswordError("ABC", 999);
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "ABC", code: 999 });
  }
});

test("Error - Invalid Type", () => {
  try {
    throw new InvalidTypeError();
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "Invalid Type", code: 400 });
  }
});

test("Error - Dimension Type", () => {
  try {
    throw new InvalidDimensionError();
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "Invalid Dimension", code: 400 });
  }
});

test("Error - Type Not Found", () => {
  try {
    throw new TypeNotFoundError();
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "Type Not Found", code: 404 });
  }
});

test("Error - Dimension Not Found", () => {
  try {
    throw new TypeNotFoundError();
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "Type Not Found", code: 404 });
  }
});
