import { Dimensions } from "@/models/dimensions";

const lodash = require("lodash");

const data = {
  base: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    len: 26,
  },
  values: {
    [Dimensions.FOUR]: 2,
    [Dimensions.SIX]: 3,
    [Dimensions.EIGTH]: 4,
    [Dimensions.TEN]: 5,
    [Dimensions.TWELVE]: 6,
    [Dimensions.FOURTEEN]: 7,
    [Dimensions.SIXTEEN]: 8,
    [Dimensions.EIGHTEENTEEN]: 9,
    [Dimensions.TWENTY]: 10,
  },
};

const index = () => parseInt(Math.random() * data.base.len);

const letter = (alpha) => alpha.charAt(index());

const fill = (alpha, count) =>
  Array(count)
    .fill()
    .map(() => letter(alpha));

const build = (count) => {
  const list = fill(data.base.upper, count);
  return list.concat(fill(data.base.lower, count));
};

export default async function (dimension) {
  return lodash.shuffle(build(data.values[dimension])).join("");
}
