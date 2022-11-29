// @ts-check

import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

const base = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  sizes: { numbers: 10, alphas: 26 }
};

/**
 * Get a random number by size
 * @param { number } size 
 * @returns { number }
 */
const index = function (size) {
  return Math.floor(Math.random() * size);
};

/**
 * Return a number index
 * @returns { number }
 */
const numberIndex = function () {
  return index(base.sizes.numbers);
};

/**
 * Return a alpha index
 * @returns { number }
 */
const alphaIndex = function () {
  return index(base.sizes.alphas);
};

/**
 * Get a alpha char from an alpha index
 * @param { string } alphaList 
 * @returns { string }
 */
const alphaChar = function (alphaList) {
  return alphaList.charAt(alphaIndex());
};

/**
 * Create a array of numbers
 * @param { number } size 
 * @returns { Array }
 */
const numberArray = function (size) {
  return Array(size).fill().map(() => numberIndex());
};

/**
 * Create a array of uppercase alpha chars
 * @param { number } size 
 * @returns { Array }
 */
const alphaUpperArray = function (size) {
  return Array(size).fill().map(() => alphaChar(base.upper));
};

/**
 * Create a array of lowercase alpha chars
 * @param { number } size 
 * @returns { Array }
 */
const alphaLowerArray = function (size) {
  return Array(size).fill().map(() => alphaChar(base.lower));
};

/**
 * Create a complete array
 * @param { number } upp 
 * @param { number } low
 * @param { number } num
 * @returns { Array }
 */
const compose = function (upp, low, num) {
  return alphaUpperArray(upp)
    .concat(alphaLowerArray(low))
    .concat(numberArray(num));
};

/**
 * Feature to generate alpha numerics
 * @param { number } dimension 
 * @returns { Promise<string> }
 */
export const AlphaNumericFeature = async function (dimension) {
  const { upp, low, num } = TypeDimension[TypeEnum.ALPHA_NUMERICS][dimension];
  const list = compose(upp, low, num);
  return lodash.shuffle(list).join("");
};
