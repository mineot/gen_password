// @ts-check

import { Constants } from "@core/constants";
import { NumberHelper } from "@helpers/number.helper";

/**
 * Char At
 * @param { string } list
 * @param { number } index
 * @returns { string }
 * @ignore
 */
const charAt = (list, index) => list.charAt(index);

/**
 * A helper to get alpha char
 * @ignore
 */
export const AlphaHelper = {
  /**
   * Get a uppercase alpha char by index
   * @returns { string }
   */
  upper: () => charAt(Constants.alphas.upper, NumberHelper.alphaIndex()),

  /**
   * Get a lowercase alpha char by index
   * @returns { string }
   */
  lower: () => charAt(Constants.alphas.lower, NumberHelper.alphaIndex()),

  /**
   * Get a special alpha char by index
   * @returns { string }
   */
  special: () => charAt(Constants.alphas.special, NumberHelper.specialIndex()),
};
