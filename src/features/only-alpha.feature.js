// @ts-check

import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

const base = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  len: 26,
};

/**
 * Get a number between 0 and 25
 * @returns { number }
 */
const index = function () {
  return Math.floor(Math.random() * base.len);
};

/**
 * Get a character by index
 * @param { string } alphaList
 * @returns { string }
 */
const alpha = function (alphaList) {
  return alphaList.charAt(index());
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
  return fill(base.upper, size).concat(fill(base.lower, size));
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
