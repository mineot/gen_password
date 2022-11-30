// @ts-check

import { Constants } from "@/core/constants";
import { NumberHelper } from "@helpers/number.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

/**
 * Get a character by index
 * @param { string } alphaList
 * @returns { string }
 */
const alpha = function (alphaList) {
  return alphaList.charAt(NumberHelper.alphaIndex());
};

/**
 * Create a single list by alpha list (upper or lower) and size
 * @param { string } alphaList
 * @param { number } size
 * @returns { Array }
 */
const fill = function (alphaList, size) {
  return Array(size)
    .fill()
    .map(() => alpha(alphaList));
};

/**
 * Create a array with upper and lower alphas by size
 * @param { number } size
 * @returns { Array }
 */
const compose = (size) => {
  return fill(Constants.alphas.upper, size).concat(fill(Constants.alphas.lower, size));
};

/**
 * Feature to generate only alphas
 * @param { number } dimension
 * @returns { Promise<string> }
 */
export const OnlyAlphaFeature = async function (dimension) {
  const { mid } = TypeDimension[TypeEnum.ONLY_ALPHAS][dimension];
  const list = compose(mid);
  return lodash.shuffle(list).join("");
};
