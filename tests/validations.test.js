import { Types, TypeValidator } from "../src/models/types";
import { Dimensions, DimensionValidator } from "../src/models/dimensions";
import { GenPasswordError } from "../src/models/errors";

const Test = async (fn, message, code) => {
  try {
    await fn();
  } catch (err) {
    expect(err).toBeInstanceOf(GenPasswordError);
    expect(err.message).toEqual(message);
    expect(err.code).toEqual(code);
  }
};

test("Type Validation", async () => {
  await Test(async () => await TypeValidator("A"), "type.invalid", 400);
  await Test(async () => await TypeValidator(9), "type.not.found", 404);
  expect(TypeValidator(Types.ONLY_NUMBERS)).resolves.toEqual(true);
});

test("Dimension Validation", async () => {
  await Test(async () => await DimensionValidator("A"), "dimension.invalid", 400);
  await Test(async () => await DimensionValidator(9), "dimension.not.found", 404);
  expect(DimensionValidator(Dimensions.FOUR)).resolves.toEqual(true);
});
