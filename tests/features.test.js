// @ts-check

import { AlphaNumericFeature } from "@features/alpha-numeric.feature";
import { DimensionEnum } from "@enums/dimension.enum";
import { OnlyAlphaFeature } from "@features/only-alpha.feature";
import { OnlyNumberFeature } from "@features/only-number.feature";

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

test("Feature - Only Alphas", async () => {
  const four = await OnlyAlphaFeature(DimensionEnum.FOUR);
  const six = await OnlyAlphaFeature(DimensionEnum.SIX);
  const eigth = await OnlyAlphaFeature(DimensionEnum.EIGTH);
  const ten = await OnlyAlphaFeature(DimensionEnum.TEN);
  const twelve = await OnlyAlphaFeature(DimensionEnum.TWELVE);
  const fourteen = await OnlyAlphaFeature(DimensionEnum.FOURTEEN);
  const sixteen = await OnlyAlphaFeature(DimensionEnum.SIXTEEN);
  const eighteen = await OnlyAlphaFeature(DimensionEnum.EIGHTEEN);
  const twenty = await OnlyAlphaFeature(DimensionEnum.TWENTY);

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

test("Feature - Alpha Numerics", async () => {
  const four = await AlphaNumericFeature(DimensionEnum.FOUR);
  const six = await AlphaNumericFeature(DimensionEnum.SIX);
  const eigth = await AlphaNumericFeature(DimensionEnum.EIGTH);
  const ten = await AlphaNumericFeature(DimensionEnum.TEN);
  const twelve = await AlphaNumericFeature(DimensionEnum.TWELVE);
  const fourteen = await AlphaNumericFeature(DimensionEnum.FOURTEEN);
  const sixteen = await AlphaNumericFeature(DimensionEnum.SIXTEEN);
  const eighteen = await AlphaNumericFeature(DimensionEnum.EIGHTEEN);
  const twenty = await AlphaNumericFeature(DimensionEnum.TWENTY);

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

// console.log([
//   [four.length, four],
//   [six.length, six],
//   [eigth.length, eigth],
//   [ten.length, ten],
//   [twelve.length, twelve],
//   [fourteen.length, fourteen],
//   [sixteen.length, sixteen],
//   [eighteen.length, eighteen],
//   [twenty.length, twenty],
// ]);
