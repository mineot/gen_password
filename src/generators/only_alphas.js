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

const get_letter = (alpha) => alpha.charAt(index());

const push_letters = (alpha, count) =>
  Array(count)
    .fill()
    .map(() => get_letter(alpha));

const build_list = (count) => {
  const list = push_letters(data.base.upper, count);
  return list.concat(push_letters(data.base.lower, count));
};

export default async function (dimension) {
  return lodash.shuffle(build_list(data.values[dimension])).join("");
}
