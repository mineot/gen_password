// @ts-check

import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const lodash = require("lodash");

const base = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  chars: "@#!$+&%|?",
  sizes: { number: 10, alpha: 26, special: 9 },
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
 * get an alpha index
 * @returns { number }
 */
const alphaIndex = function () {
  return index(base.sizes.alpha);
};

/**
 * Get a special index
 * @returns { number }
 */
const specialIndex = function () {
  return index(base.sizes.special);
};

/**
 * Get a number
 * @returns { number }
 */
const number = function () {
  return index(base.sizes.number);
};

/**
 * Get an alpha char
 * @param { string } alphaList
 * @returns { string }
 */
const alpha = function (alphaList) {
  return alphaList.charAt(alphaIndex());
};

/**
 * Get a special char
 * @param { string } specialList
 * @returns { string }
 */
const special = function (specialList) {
  return specialList.charAt(specialIndex());
};

/**
 * Get a number array
 * @param { number } size
 * @returns { Array }
 */
const numberArray = function (size) {
  return Array(size)
    .fill()
    .map(() => number());
};

/**
 * Get an alpha upper array
 * @param { number } size
 * @returns { Array }
 */
const alphaUpperArray = function (size) {
  return Array(size)
    .fill()
    .map(() => alpha(base.upper));
};

/**
 * Get an alpha lower array
 * @param { number } size
 * @returns { Array }
 */
const alphaLowerArray = function (size) {
  return Array(size)
    .fill()
    .map(() => alpha(base.lower));
};

/**
 * Get a special array
 * @param { number } size
 * @returns { Array }
 */
const specialArray = function (size) {
  return Array(size)
    .fill()
    .map(() => special(base.chars));
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
