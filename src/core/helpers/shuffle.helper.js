const lodash = require("lodash");

/**
 * Shuffle Array
 * @param { Array } arr 
 * @returns { string }
 */
export const ShuffleHelper = function (arr) {
  return lodash.shuffle(arr).join("");
};