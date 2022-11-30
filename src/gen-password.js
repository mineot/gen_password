// @ts-check

import { AlphaNumericFeature } from "@features/alpha-numeric.feature";
import { ComplexFeature } from "@features/complex.feature";
import { DimensionValidator } from "@validators/dimension.validator";
import { OnlyAlphaFeature } from "@features/only-alpha.feature";
import { OnlyNumberFeature } from "@features/only-number.feature";
import { TypeEnum } from "@enums/type.enums";
import { TypeValidator } from "@validators/type.validator";

/**
 * Features
 * @ignore
 */
const features = {
  [TypeEnum.ONLY_NUMBERS]: OnlyNumberFeature,
  [TypeEnum.ONLY_ALPHAS]: OnlyAlphaFeature,
  [TypeEnum.ALPHA_NUMERICS]: AlphaNumericFeature,
  [TypeEnum.COMPLEX]: ComplexFeature,
};

/**
 * Generate Password
 * @param { string } type use {@link TypeEnum}
 * @param { number } dimension use {@link DimensionEnum}
 * @returns { Promise<string> }
 * @throws { GenPasswordError } 
 * @function 
 * @async
 */
export const GenPassword = async function (type, dimension) {
  await TypeValidator(type);
  await DimensionValidator(dimension);
  return await features[type](dimension);
};
