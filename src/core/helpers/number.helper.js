import { Base } from "@core/base";

/**
 * A helper to generate numbers
 */
export const NumberHelper = {
  /**
   * Generate a number with max target
   * @param { number } max
   * @returns { number }
   */
  max: function (max) {
    return Math.floor(Math.random() * max);
  },

  /**
   * Generate a number between two values
   * @param { number } min
   * @param { number } max
   * @returns { number }
   */
  range: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  /**
   * Return a random alpha index
   * @returns { number }
   */
  alphaIndex: function () {
    return NumberHelper.max(Base.sizes.alpha);
  },
};
