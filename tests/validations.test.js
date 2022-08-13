import { Dimensions, DimensionError, DimensionValidate } from "../src/models/dimensions";
import { Types, TypeError, TypeValidate } from "../src/models/types";

test("Dimension Validate", async () => {
  await expect(DimensionValidate("A")).rejects.toEqual(new DimensionError("Invalid Dimension"));
  await expect(DimensionValidate(9)).rejects.toEqual(new DimensionError("Dimension Not Found"));
  await expect(DimensionValidate(Dimensions.FOUR)).resolves.toEqual(true);
});

test("Type Validate", async () => {
  await expect(TypeValidate("A")).rejects.toEqual(new TypeError("Invalid Type"));
  await expect(TypeValidate(9)).rejects.toEqual(new TypeError("Type Not Found"));
  await expect(TypeValidate(Types.ONLY_ALPHA)).resolves.toEqual(true);
});
