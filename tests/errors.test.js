// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";
import { InvalidTypeError } from "@errors/invalid-type.error";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";
import { TypeNotFoundError } from "@errors/type-not-found.error";
import { DimensionNotFoundError } from "@errors/dimension-not-found.error";

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
    throw new DimensionNotFoundError();
  } catch (err) {
    expect(err).toEqual({ name: "GenPasswordError", message: "Dimension Not Found", code: 404 });
  }
});
