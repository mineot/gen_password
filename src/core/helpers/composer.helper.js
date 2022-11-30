// @ts-check

import { FillHelper } from "@helpers/fill.helper";

export const ComposerHelper = {
  /**
   * Create an only alpha array
   * @param { number } length
   * @returns  { Array }
   */
  onlyAlpha: (length) => FillHelper.upper(length).concat(FillHelper.lower(length)),

  /**
   * Create an alpha numeric array
   * @param { number } num
   * @param { number } upp
   * @param { number } low
   * @returns { Array }
   */
  alphaNumeric: (num, upp, low) => FillHelper.number(num).concat(FillHelper.upper(upp)).concat(FillHelper.lower(low)),

  /**
   * Create a complex array
   * @param { number } num
   * @param { number } upp
   * @param { number } low
   * @param { number } spc
   * @returns { Array }
   */
  complex: (num, upp, low, spc) => FillHelper.number(num).concat(FillHelper.upper(upp)).concat(FillHelper.lower(low)).concat(FillHelper.special(spc)),
};
