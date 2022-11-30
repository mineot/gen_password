// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { NumberHelper } from "@helpers/number.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

/**
 * Feature to generate only numbers
 * @param { number } dimension
 * @returns { Promise<string> }
 */
export const OnlyNumberFeature = async function (dimension) {
  let { min, max } = TypeDimension[TypeEnum.ONLY_NUMBERS][dimension];
  switch (dimension) {
    case DimensionEnum.SIXTEEN:
    case DimensionEnum.EIGHTEEN:
    case DimensionEnum.TWENTY:
      min = Number(min);
      max = Number(max);
  }
  return NumberHelper.range(min, max).toFixed(0);
};
