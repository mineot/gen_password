// @ts-check

import { Constants } from "@core/constants";

/**
 * Math Calc
 * @param { number } max
 * @returns { number }
 */
const calc = (max) => Math.floor(Math.random() * max);

/**
 * Math Calc Range between min and max
 * @param { number } min
 * @param { number } max
 * @returns { number }
 */
const calcRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**
 * A helper to generate numbers
 */
export const NumberHelper = {
  /**
   * Generate a number with max target
   * @param { number } max
   * @returns { number }
   */
  max: (max) => calc(max),

  /**
   * Generate a number between two values
   * @param { number } min
   * @param { number } max
   * @returns { number }
   */
  range: (min, max) => calcRange(min, max),

  /**
   * Get a random number index
   * @returns { number }
   */
  numberIndex: () => calc(Constants.sizes.number),

  /**
   * Get a random alpha index
   * @returns { number }
   */
  alphaIndex: () => calc(Constants.sizes.alpha),

  /**
   * Get a random special index
   * @returns { number }
   */
  specialIndex: () => calc(Constants.sizes.special),
};
