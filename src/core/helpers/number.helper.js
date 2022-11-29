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
   * @param {*} min 
   * @param {*} max 
   * @returns 
   */
  range: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};
