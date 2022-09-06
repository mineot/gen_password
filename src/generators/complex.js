import { Dimensions } from "@/models/dimensions";

const lodash = require("lodash");

const data = {
  base: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    chars: "@#!$+&%*|:?)(][}{;,.",
    num: 10,
    len: 26,
    chs: 20,
  },
  values: {
    [Dimensions.FOUR]: { upper: 1, lower: 1, number: 1, char: 1 },
    [Dimensions.SIX]: { upper: 1, lower: 2, number: 2, char: 1 },
    [Dimensions.EIGTH]: { upper: 2, lower: 2, number: 2, char: 2 },
    [Dimensions.TEN]: { upper: 3, lower: 3, number: 2, char: 2 },
    [Dimensions.TWELVE]: { upper: 3, lower: 3, number: 3, char: 3 },
    [Dimensions.FOURTEEN]: { upper: 4, lower: 4, number: 4, char: 2 },
    [Dimensions.SIXTEEN]: { upper: 4, lower: 4, number: 4, char: 4 },
    [Dimensions.EIGHTEENTEEN]: { upper: 5, lower: 5, number: 5, char: 3 },
    [Dimensions.TWENTY]: { upper: 5, lower: 5, number: 5, char: 5 },
  },
};

const index = (val) => parseInt(Math.random() * val);

const number = () => index(data.base.num);

const letter = (alpha) => alpha.charAt(index(data.base.len));

const char = (alpha) => alpha.charAt(index(data.base.chs));

const numbers = (count) =>
  Array(count)
    .fill()
    .map(() => number());

const uppers = (count) =>
  Array(count)
    .fill()
    .map(() => letter(data.base.upper));

const lowers = (count) =>
  Array(count)
    .fill()
    .map(() => letter(data.base.lower));

const chars = (count) =>
  Array(count)
    .fill()
    .map(() => char(data.base.chars));

const builder = ({ upper, lower, number, char }) => {
  let list = uppers(upper);
  list = list.concat(lowers(lower));
  list = list.concat(numbers(number));
  return list.concat(chars(char));
};

export default async function (dimension) {
  return lodash.shuffle(builder(data.values[dimension])).join("");
}
