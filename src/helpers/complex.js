const _ = require("lodash");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const chars = "@#!$+&%*|:?";

const four = { upper: 1, lower: 1, number: 1, char: 1 };
const six = { upper: 1, lower: 2, number: 2, char: 1 };
const eigth = { upper: 2, lower: 2, number: 2, char: 2 };
const ten = { upper: 3, lower: 3, number: 2, char: 2 };
const twelve = { upper: 3, lower: 3, number: 3, char: 3 };
const fourteen = { upper: 4, lower: 4, number: 4, char: 2 };
const sixteen = { upper: 4, lower: 4, number: 4, char: 4 };
const eighteenteen = { upper: 5, lower: 5, number: 5, char: 3 };
const twenty = { upper: 5, lower: 5, number: 5, char: 5 };

function calc(min, max) {
  return parseInt(Math.random() * (max - min) + min).toFixed(0);
}

function process_alpha(arr, data, key, x) {
  for (let idx = 0; idx < x[key]; idx++) {
    arr.push(data.charAt(calc(0, data.length - 1)));
  }
}

function process_number(arr, x) {
  for (let idx = 0; idx < x.number; idx++) {
    arr.push(calc(0, 9));
  }
}

function process_char(arr, x) {
  for (let idx = 0; idx < x.char; idx++) {
    arr.push(chars.charAt(calc(0, chars.length - 1)));
  }
}

function get(x) {
  const letters = [];

  process_alpha(letters, upper, "upper", x);
  process_alpha(letters, lower, "lower", x);
  process_number(letters, x);
  process_char(letters, x);

  return _.shuffle(letters).join("");
}

export default function (dimension) {
  switch (dimension) {
    case 4:
      return calc(four);
    case 6:
      return calc(six);
    case 8:
      return calc(eigth);
    case 10:
      return calc(ten);
    case 12:
      return calc(twelve);
    case 14:
      return calc(fourteen);
    case 16:
      return calc(sixteen);
    case 18:
      return calc(eighteenteen);
    case 20:
      return calc(twenty);
    default:
      throw new Error("generate.password.complex.dimension.not_found");
  }
}
