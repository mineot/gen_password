// @ts-check

import { GenPassword, TypeEnum, DimensionEnum, GenPasswordError } from "@/index";
import { InvalidTypeError } from "@errors/invalid-type.error";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";

const invalidType = new InvalidTypeError();
const InvalidDimension = new InvalidDimensionError();

test("Main - Invalid's", async () => {
  await expect(GenPassword("ABC", 999)).rejects.toHaveProperty("message", invalidType.message);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, 999)).rejects.toHaveProperty("message", InvalidDimension.message);
});

test("Main - Only Numbers", async () => {
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.FOUR)).resolves.toHaveLength(DimensionEnum.FOUR);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.SIX)).resolves.toHaveLength(DimensionEnum.SIX);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.EIGTH)).resolves.toHaveLength(DimensionEnum.EIGTH);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.TEN)).resolves.toHaveLength(DimensionEnum.TEN);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.TWELVE)).resolves.toHaveLength(DimensionEnum.TWELVE);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.FOURTEEN)).resolves.toHaveLength(DimensionEnum.FOURTEEN);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.SIXTEEN)).resolves.toHaveLength(DimensionEnum.SIXTEEN);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.EIGHTEEN)).resolves.toHaveLength(DimensionEnum.EIGHTEEN);
  await expect(GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.TWENTY)).resolves.toHaveLength(DimensionEnum.TWENTY);
});

test("Main - Only Alphas", async () => {
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.FOUR)).resolves.toHaveLength(DimensionEnum.FOUR);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.SIX)).resolves.toHaveLength(DimensionEnum.SIX);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.EIGTH)).resolves.toHaveLength(DimensionEnum.EIGTH);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.TEN)).resolves.toHaveLength(DimensionEnum.TEN);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.TWELVE)).resolves.toHaveLength(DimensionEnum.TWELVE);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.FOURTEEN)).resolves.toHaveLength(DimensionEnum.FOURTEEN);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.SIXTEEN)).resolves.toHaveLength(DimensionEnum.SIXTEEN);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.EIGHTEEN)).resolves.toHaveLength(DimensionEnum.EIGHTEEN);
  await expect(GenPassword(TypeEnum.ONLY_ALPHAS, DimensionEnum.TWENTY)).resolves.toHaveLength(DimensionEnum.TWENTY);
});

test("Main - Alpha Numerics", async () => {
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.FOUR)).resolves.toHaveLength(DimensionEnum.FOUR);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.SIX)).resolves.toHaveLength(DimensionEnum.SIX);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.EIGTH)).resolves.toHaveLength(DimensionEnum.EIGTH);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.TEN)).resolves.toHaveLength(DimensionEnum.TEN);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.TWELVE)).resolves.toHaveLength(DimensionEnum.TWELVE);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.FOURTEEN)).resolves.toHaveLength(DimensionEnum.FOURTEEN);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.SIXTEEN)).resolves.toHaveLength(DimensionEnum.SIXTEEN);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.EIGHTEEN)).resolves.toHaveLength(DimensionEnum.EIGHTEEN);
  await expect(GenPassword(TypeEnum.ALPHA_NUMERICS, DimensionEnum.TWENTY)).resolves.toHaveLength(DimensionEnum.TWENTY);
});

test("Main - Complex", async () => {
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.FOUR)).resolves.toHaveLength(DimensionEnum.FOUR);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.SIX)).resolves.toHaveLength(DimensionEnum.SIX);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.EIGTH)).resolves.toHaveLength(DimensionEnum.EIGTH);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.TEN)).resolves.toHaveLength(DimensionEnum.TEN);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.TWELVE)).resolves.toHaveLength(DimensionEnum.TWELVE);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.FOURTEEN)).resolves.toHaveLength(DimensionEnum.FOURTEEN);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.SIXTEEN)).resolves.toHaveLength(DimensionEnum.SIXTEEN);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.EIGHTEEN)).resolves.toHaveLength(DimensionEnum.EIGHTEEN);
  await expect(GenPassword(TypeEnum.COMPLEX, DimensionEnum.TWENTY)).resolves.toHaveLength(DimensionEnum.TWENTY);
});
