const lodash = require("lodash");

/**
 * Shuffle Array
 * @param { Array } arr 
 * @returns { string }
 * @ignore
 */
export const ShuffleHelper = function (arr) {
  return lodash.shuffle(arr).join("");
};