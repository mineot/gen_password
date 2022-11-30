// @ts-check

import { ComposerHelper } from "@helpers/composer.helper";
import { ShuffleHelper } from "@helpers/shuffle.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

/**
 * Feature to generate only alphas
 * @param { number } dimension
 * @returns { Promise<string> }
 * @ignore
 */
export const OnlyAlphaFeature = async function (dimension) {
  const { mid } = TypeDimension[TypeEnum.ONLY_ALPHAS][dimension];
  const list = ComposerHelper.onlyAlpha(mid);
  return ShuffleHelper(list);
};
