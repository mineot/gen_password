// @ts-check

import { AlphaHelper } from "@helpers/alpha.helper";
import { ComposerHelper } from "@helpers/composer.helper";
import { Constants } from "@core/constants";
import { DimensionEnum } from "@enums/dimension.enum";
import { FillHelper } from "@helpers/fill.helper";
import { NumberHelper } from "@helpers/number.helper";
import { ShuffleHelper } from "@helpers/shuffle.helper";
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

test("Core - Alpha Helper", () => {
  expect(Constants.alphas.upper.split("").includes(AlphaHelper.upper())).toEqual(true);
  expect(Constants.alphas.lower.split("").includes(AlphaHelper.lower())).toEqual(true);
  expect(Constants.alphas.special.split("").includes(AlphaHelper.special())).toEqual(true);
});

test("Core - Fill Helper", () => {
  expect(FillHelper.number(4)).toHaveLength(4);
  expect(FillHelper.upper(4)).toHaveLength(4);
  expect(FillHelper.lower(4)).toHaveLength(4);
  expect(FillHelper.special(4)).toHaveLength(4);
});

test("Core - Composer Helper", () => {
  expect(ComposerHelper.onlyAlpha(4)).toHaveLength(8);
  expect(ComposerHelper.alphaNumeric(4, 4, 4)).toHaveLength(12);
  expect(ComposerHelper.complex(4, 4, 4, 4)).toHaveLength(16);
});

test("Core - Shuffle Helper", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(ShuffleHelper(arr)).not.toEqual(arr.join(""));
});
