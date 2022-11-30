// @ts-check

import { AlphaNumericFeature } from "@features/alpha-numeric.feature";
import { ComplexFeature } from "@features/complex.feature";
import { DimensionEnum } from "@enums/dimension.enum";
import { DimensionValidator } from "@validators/dimension.validator";
import { GenPasswordError } from "@errors/gen-password.error";
import { OnlyAlphaFeature } from "@features/only-alpha.feature";
import { OnlyNumberFeature } from "@features/only-number.feature";
import { TypeEnum } from "@enums/type.enums";
import { TypeValidator } from "@validators/type.validator";

const features = {
  [TypeEnum.ONLY_NUMBERS]: OnlyNumberFeature,
  [TypeEnum.ONLY_ALPHAS]: OnlyAlphaFeature,
  [TypeEnum.ALPHA_NUMERICS]: AlphaNumericFeature,
  [TypeEnum.COMPLEX]: ComplexFeature,
};

/**
 * Generate Password
 * @param { string } type 
 * @param { number } dimension 
 * @returns { Promise<string> }
 * @throws { GenPasswordError } 
 */
const GenPassword = async function (type, dimension) {
  await TypeValidator(type);
  await DimensionValidator(dimension);
  return await features[type](dimension);
};

export { GenPassword, TypeEnum, DimensionEnum, GenPasswordError };
