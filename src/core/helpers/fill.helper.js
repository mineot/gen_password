// @ts-check

import { AlphaHelper } from "@helpers/alpha.helper";
import { NumberHelper } from "@helpers/number.helper";

/**
 * Fill Array with function value
 * @param { number } length
 * @param { Function } fn
 * @returns { Array }
 */
const fill = (length, fn) =>
  Array(length)
    .fill()
    .map(() => fn());

export const FillHelper = {
  /**
   * Create an array by length and fill with random numbers
   * @param { number } length
   * @returns { Array }
   */
  number: (length) => fill(length, NumberHelper.numberIndex),

  /**
   * Create an array by length and fill with random upper alphas
   * @param { number } length
   * @returns { Array }
   */
  upper: (length) => fill(length, AlphaHelper.upper),

  /**
   * Create an array by length and fill with random lower alphas
   * @param { number } length
   * @returns { Array }
   */
  lower: (length) => fill(length, AlphaHelper.lower),

  /**
   * Create an array by length and fill with random special alphas
   * @param { number } length
   * @returns { Array }
   */
  special: (length) => fill(length, AlphaHelper.special),
};
