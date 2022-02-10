const _ = require("lodash");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();

const four_min_max = { div: 2, total: 4 };
const six_min_max = { div: 3, total: 6 };
const eigth_min_max = { div: 4, total: 8 };
const twelve_min_max = { div: 6, total: 12 };

function calc() {
  return parseInt(Math.random() * (25 - 0) + 0).toFixed(0);
}

function process(arr, alpha, x) {
  for (let l = 0; l < x.div; l++) {
    let letter = alpha.charAt(calc());

    while (arr.includes(letter)) {
      letter = alpha.charAt(calc());
    }

    arr.push(letter);
  }
}

function get(x) {
  const letters = [];

  while (letters.length < x.total) {
    process(letters, upper, x);
    process(letters, lower, x);
  }

  return _.shuffle(letters).join("");
}

export default function (dimension) {
  switch (dimension) {
    case 4:
      return get(four_min_max);
    case 6:
      return get(six_min_max);
    case 8:
      return get(eigth_min_max);
    case 12:
      return get(twelve_min_max);
    default:
      throw new Error("generate.password.alpha_only.dimension.not_found");
  }
}
