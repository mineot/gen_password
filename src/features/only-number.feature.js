// @ts-check

import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";
import { DimensionEnum } from "@enums/dimension.enum";

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

  return parseInt(Math.random() * (max - min) + min).toFixed(0);
};
