// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { NumberHelper } from "@helpers/number.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const typeKeys = Object.values(TypeEnum);
const dimensionKeys = Object.values(DimensionEnum).map((el) => el.toString());

test("Core - Type Dimension - Validate Key's", () => {
  Object.keys(TypeDimension).forEach((typeKey) => {
    expect(typeKeys.includes(typeKey)).toEqual(true);

    Object.keys(TypeDimension[typeKey]).forEach((dimensionKey) => {
      expect(dimensionKeys.includes(dimensionKey)).toEqual(true);
    });
  });
});

test("Core - Number Helper", () => {
  const max = NumberHelper.max(100);
  expect(max).toBeGreaterThanOrEqual(0);
  expect(max).toBeLessThanOrEqual(100);

  const range = NumberHelper.range(5, 20);
  expect(range).toBeGreaterThanOrEqual(5);
  expect(range).toBeLessThanOrEqual(20);
});
