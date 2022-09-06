import { Dimensions } from "@/models/dimensions";

const lodash = require("lodash");

const data = {
  base: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    num: 10,
    len: 26,
  },
  values: {
    [Dimensions.FOUR]: { upper: 1, lower: 1, number: 2 },
    [Dimensions.SIX]: { upper: 2, lower: 2, number: 2 },
    [Dimensions.EIGTH]: { upper: 2, lower: 3, number: 3 },
    [Dimensions.TEN]: { upper: 4, lower: 4, number: 2 },
    [Dimensions.TWELVE]: { upper: 4, lower: 4, number: 4 },
    [Dimensions.FOURTEEN]: { upper: 5, lower: 5, number: 4 },
    [Dimensions.SIXTEEN]: { upper: 5, lower: 5, number: 6 },
    [Dimensions.EIGHTEENTEEN]: { upper: 6, lower: 6, number: 6 },
    [Dimensions.TWENTY]: { upper: 7, lower: 7, number: 6 },
  },
};

const index = (val) => parseInt(Math.random() * val);

const number = () => index(data.base.num);

const letter = (alpha) => alpha.charAt(index(data.base.len));

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

const builder = ({ upper, lower, number }) => {
  let list = uppers(upper);
  list = list.concat(lowers(lower));
  return list.concat(numbers(number));
};

export default async function (dimension) {
  return lodash.shuffle(builder(data.values[dimension])).join("");
}
