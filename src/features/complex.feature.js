// @ts-check

import { Constants } from "@core/constants";
import { NumberHelper } from "@helpers/number.helper";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

/**
 * Get an alpha char
 * @param { string } alphaList
 * @returns { string }
 */
const alpha = function (alphaList) {
  return alphaList.charAt(NumberHelper.alphaIndex());
};

/**
 * Get a special char
 * @param { string } specialList
 * @returns { string }
 */
const special = function (specialList) {
  return specialList.charAt(NumberHelper.specialIndex());
};

/**
 * Get a number array
 * @param { number } size
 * @returns { Array }
 */
const numberArray = function (size) {
  return Array(size)
    .fill()
    .map(() => NumberHelper.numberIndex());
};

/**
 * Get an alpha upper array
 * @param { number } size
 * @returns { Array }
 */
const alphaUpperArray = function (size) {
  return Array(size)
    .fill()
    .map(() => alpha(Constants.alphas.upper));
};

/**
 * Get an alpha lower array
 * @param { number } size
 * @returns { Array }
 */
const alphaLowerArray = function (size) {
  return Array(size)
    .fill()
    .map(() => alpha(Constants.alphas.lower));
};

/**
 * Get a special array
 * @param { number } size
 * @returns { Array }
 */
const specialArray = function (size) {
  return Array(size)
    .fill()
    .map(() => special(Constants.alphas.special));
};

/**
 * Create a array
 * @param { number } num
 * @param { number } upp
 * @param { number } low
 * @param { number } chr
 * @returns { Array }
 */
const compose = function (num, upp, low, chr) {
  return numberArray(num).concat(alphaUpperArray(upp)).concat(alphaLowerArray(low)).concat(specialArray(chr));
};

/**
 * Feature to generate a complex
 * @param { number } dimension
 * @returns { Promise<string> }
 */
export const ComplexFeature = async function (dimension) {
  const { num, upp, low, chr } = TypeDimension[TypeEnum.COMPLEX][dimension];
  const list = compose(num, upp, low, chr);
  return lodash.shuffle(list).join("");
};
