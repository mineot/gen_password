// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { TypeEnum } from "@enums/type.enums";

export const TypeDimension = {
  [TypeEnum.ONLY_NUMBERS]: {
    [DimensionEnum.FOUR]: { min: 1000, max: 9999 },
    [DimensionEnum.SIX]: { min: 100000, max: 999999 },
    [DimensionEnum.EIGTH]: { min: 10000000, max: 99999999 },
    [DimensionEnum.TEN]: { min: 1000000000, max: 9999999999 },
    [DimensionEnum.TWELVE]: { min: 100000000000, max: 999999999999 },
    [DimensionEnum.FOURTEEN]: { min: 10000000000000, max: 99999999999999 },
    [DimensionEnum.SIXTEEN]: { min: BigInt("1000000000000000"), max: BigInt("9999999999999999") },
    [DimensionEnum.EIGHTEEN]: { min: BigInt("100000000000000000"), max: BigInt("999999999999999999") },
    [DimensionEnum.TWENTY]: { min: BigInt("10000000000000000000"), max: BigInt("99999999999999999999") },
  },
  [TypeEnum.ONLY_ALPHAS]: {
    [DimensionEnum.FOUR]: { mid: 2 },
    [DimensionEnum.SIX]: { mid: 3 },
    [DimensionEnum.EIGTH]: { mid: 4 },
    [DimensionEnum.TEN]: { mid: 5 },
    [DimensionEnum.TWELVE]: { mid: 6 },
    [DimensionEnum.FOURTEEN]: { mid: 7 },
    [DimensionEnum.SIXTEEN]: { mid: 8 },
    [DimensionEnum.EIGHTEEN]: { mid: 9 },
    [DimensionEnum.TWENTY]: { mid: 10 },
  },
  [TypeEnum.ALPHA_NUMERICS]: {
    [DimensionEnum.FOUR]: { upp: 1, low: 1, num: 2 },
    [DimensionEnum.SIX]: { upp: 2, low: 2, num: 2 },
    [DimensionEnum.EIGTH]: { upp: 2, low: 3, num: 3 },
    [DimensionEnum.TEN]: { upp: 4, low: 4, num: 2 },
    [DimensionEnum.TWELVE]: { upp: 4, low: 4, num: 4 },
    [DimensionEnum.FOURTEEN]: { upp: 5, low: 5, num: 4 },
    [DimensionEnum.SIXTEEN]: { upp: 5, low: 5, num: 6 },
    [DimensionEnum.EIGHTEEN]: { upp: 6, low: 6, num: 6 },
    [DimensionEnum.TWENTY]: { upp: 7, low: 7, num: 6 },
  },
  [TypeEnum.COMPLEX]: {
    [DimensionEnum.FOUR]: { upp: 1, low: 1, num: 1, spc: 1 },
    [DimensionEnum.SIX]: { upp: 1, low: 2, num: 2, spc: 1 },
    [DimensionEnum.EIGTH]: { upp: 2, low: 2, num: 2, spc: 2 },
    [DimensionEnum.TEN]: { upp: 3, low: 3, num: 2, spc: 2 },
    [DimensionEnum.TWELVE]: { upp: 3, low: 3, num: 3, spc: 3 },
    [DimensionEnum.FOURTEEN]: { upp: 4, low: 4, num: 4, spc: 2 },
    [DimensionEnum.SIXTEEN]: { upp: 4, low: 4, num: 4, spc: 4 },
    [DimensionEnum.EIGHTEEN]: { upp: 5, low: 5, num: 5, spc: 3 },
    [DimensionEnum.TWENTY]: { upp: 5, low: 5, num: 5, spc: 5 },
  },
};
