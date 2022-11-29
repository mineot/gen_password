import { DimensionEnum } from "@enums/dimension.enum";
import { DimensionValidator } from "@validators/dimension.validator";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";
import { InvalidTypeError } from "@errors/invalid-type.error";
import { TypeEnum } from "@enums/type.enums";
import { TypeValidator } from "@validators/type.validator";

const invalidType = new InvalidTypeError();
const invalidDimension = new InvalidDimensionError();

test("Validator - Invalid Type", async () => {
  await expect(TypeValidator(123)).rejects.toHaveProperty("message", invalidType.message);
  await expect(TypeValidator(new Date())).rejects.toHaveProperty("message", invalidType.message);
  await expect(TypeValidator({})).rejects.toHaveProperty("message", invalidType.message);
  await expect(TypeValidator([])).rejects.toHaveProperty("message", invalidType.message);
  await expect(TypeValidator("ABC")).rejects.toHaveProperty("message", invalidType.message);
});

test("Validator - Invalid Dimension", async () => {
  await expect(DimensionValidator(123)).rejects.toHaveProperty("message", invalidDimension.message);
  await expect(DimensionValidator(new Date())).rejects.toHaveProperty("message", invalidDimension.message);
  await expect(DimensionValidator({})).rejects.toHaveProperty("message", invalidDimension.message);
  await expect(DimensionValidator([])).rejects.toHaveProperty("message", invalidDimension.message);
  await expect(DimensionValidator("ABC")).rejects.toHaveProperty("message", invalidDimension.message);
});

test("Validator - Valid Types", async () => {
  await expect(TypeValidator(TypeEnum.ONLY_NUMBERS)).resolves.toEqual(true);
  await expect(TypeValidator(TypeEnum.ONLY_ALPHAS)).resolves.toEqual(true);
  await expect(TypeValidator(TypeEnum.ALPHA_NUMERICS)).resolves.toEqual(true);
  await expect(TypeValidator(TypeEnum.COMPLEX)).resolves.toEqual(true);
});

test("Validator - Valid Dimensions", async () => {
  await expect(DimensionValidator(DimensionEnum.FOUR)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.SIX)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.EIGTH)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.TEN)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.TWELVE)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.FOURTEEN)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.SIXTEEN)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.EIGHTEEN)).resolves.toEqual(true);
  await expect(DimensionValidator(DimensionEnum.TWENTY)).resolves.toEqual(true);
});
