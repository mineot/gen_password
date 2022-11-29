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
    [DimensionEnum.FOUR]: 2,
    [DimensionEnum.SIX]: 3,
    [DimensionEnum.EIGTH]: 4,
    [DimensionEnum.TEN]: 5,
    [DimensionEnum.TWELVE]: 6,
    [DimensionEnum.FOURTEEN]: 7,
    [DimensionEnum.SIXTEEN]: 8,
    [DimensionEnum.EIGHTEEN]: 9,
    [DimensionEnum.TWENTY]: 10,
  },
  [TypeEnum.ALPHA_NUMERICS]: {
    [DimensionEnum.FOUR]: { upper: 1, lower: 1, number: 2 },
    [DimensionEnum.SIX]: { upper: 2, lower: 2, number: 2 },
    [DimensionEnum.EIGTH]: { upper: 2, lower: 3, number: 3 },
    [DimensionEnum.TEN]: { upper: 4, lower: 4, number: 2 },
    [DimensionEnum.TWELVE]: { upper: 4, lower: 4, number: 4 },
    [DimensionEnum.FOURTEEN]: { upper: 5, lower: 5, number: 4 },
    [DimensionEnum.SIXTEEN]: { upper: 5, lower: 5, number: 6 },
    [DimensionEnum.EIGHTEEN]: { upper: 6, lower: 6, number: 6 },
    [DimensionEnum.TWENTY]: { upper: 7, lower: 7, number: 6 },
  },
  [TypeEnum.COMPLEX]: {
    [DimensionEnum.FOUR]: { upper: 1, lower: 1, number: 1, char: 1 },
    [DimensionEnum.SIX]: { upper: 1, lower: 2, number: 2, char: 1 },
    [DimensionEnum.EIGTH]: { upper: 2, lower: 2, number: 2, char: 2 },
    [DimensionEnum.TEN]: { upper: 3, lower: 3, number: 2, char: 2 },
    [DimensionEnum.TWELVE]: { upper: 3, lower: 3, number: 3, char: 3 },
    [DimensionEnum.FOURTEEN]: { upper: 4, lower: 4, number: 4, char: 2 },
    [DimensionEnum.SIXTEEN]: { upper: 4, lower: 4, number: 4, char: 4 },
    [DimensionEnum.EIGHTEEN]: { upper: 5, lower: 5, number: 5, char: 3 },
    [DimensionEnum.TWENTY]: { upper: 5, lower: 5, number: 5, char: 5 },
  },
};
