// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";
import { InvalidTypeError } from "@errors/invalid-type.error";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";

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
