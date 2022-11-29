// @ts-check

import { OnlyNumberFeature } from "@features/only-number.feature";
import { DimensionEnum } from "@enums/dimension.enum";

test("Feature - Only Numbers", async () => {
  const four = await OnlyNumberFeature(DimensionEnum.FOUR);
  const six = await OnlyNumberFeature(DimensionEnum.SIX);
  const eigth = await OnlyNumberFeature(DimensionEnum.EIGTH);
  const ten = await OnlyNumberFeature(DimensionEnum.TEN);
  const twelve = await OnlyNumberFeature(DimensionEnum.TWELVE);
  const fourteen = await OnlyNumberFeature(DimensionEnum.FOURTEEN);
  const sixteen = await OnlyNumberFeature(DimensionEnum.SIXTEEN);
  const eighteen = await OnlyNumberFeature(DimensionEnum.EIGHTEEN);
  const twenty = await OnlyNumberFeature(DimensionEnum.TWENTY);

  expect(four).toHaveLength(DimensionEnum.FOUR);
  expect(six).toHaveLength(DimensionEnum.SIX);
  expect(eigth).toHaveLength(DimensionEnum.EIGTH);
  expect(ten).toHaveLength(DimensionEnum.TEN);
  expect(twelve).toHaveLength(DimensionEnum.TWELVE);
  expect(fourteen).toHaveLength(DimensionEnum.FOURTEEN);
  expect(sixteen).toHaveLength(DimensionEnum.SIXTEEN);
  expect(eighteen).toHaveLength(DimensionEnum.EIGHTEEN);
  expect(twenty).toHaveLength(DimensionEnum.TWENTY);
});
