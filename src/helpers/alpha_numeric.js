const _ = require("lodash");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();

const four_min_max = { upper: 1, lower: 1, number: 2 };
const six_min_max = { upper: 2, lower: 2, number: 2 };
const eigth_min_max = { upper: 2, lower: 3, number: 3 };
const twelve_min_max = { upper: 4, lower: 4, number: 4 };

function calc(min, max) {
  return parseInt(Math.random() * (max - min) + min).toFixed(0);
}

function process_alpha(arr, data, key, x) {
  for (let idx = 0; idx < x[key]; idx++) {
    arr.push(data.charAt(calc(0, 25)));
  }
}

function process_number(arr, x) {
  for (let idx = 0; idx < x.number; idx++) {
    arr.push(calc(0, 9));
  }
}

function get(x) {
  const letters = [];

  process_alpha(letters, upper, "upper", x);
  process_alpha(letters, lower, "lower", x);
  process_number(letters, x);

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
      throw new Error("generate.password.alpha_numeric.dimension.not_found");
  }
}
