// @ts-check

import { ComposerHelper } from "@helpers/composer.helper";
import { ShuffleHelper } from "@helpers/shuffle.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

/**
 * Feature to generate alpha numerics
 * @param { number } dimension
 * @returns { Promise<string> }
 * @ignore
 */
export const AlphaNumericFeature = async function (dimension) {
  const { upp, low, num } = TypeDimension[TypeEnum.ALPHA_NUMERICS][dimension];
  const list = ComposerHelper.alphaNumeric(upp, low, num);
  return ShuffleHelper(list);
};
