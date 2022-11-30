// @ts-check

import { ComposerHelper } from "@helpers/composer.helper";
import { ShuffleHelper } from "@helpers/shuffle.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

/**
 * Feature to generate a complex
 * @param { number } dimension
 * @returns { Promise<string> }
 * @ignore
 */
export const ComplexFeature = async function (dimension) {
  const { num, upp, low, spc } = TypeDimension[TypeEnum.COMPLEX][dimension];
  const list = ComposerHelper.complex(num, upp, low, spc);
  return ShuffleHelper(list);
};
