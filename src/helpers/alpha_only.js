const _ = require("lodash");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();

const four = { div: 2, total: 4 };
const six = { div: 3, total: 6 };
const eigth = { div: 4, total: 8 };
const ten = { div: 5, total: 10 };
const twelve = { div: 6, total: 12 };
const fourteen = { div: 7, total: 14 };
const sixteen = { div: 8, total: 16 };
const eighteenteen = { div: 9, total: 18 };
const twenty = { div: 10, total: 20 };

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
      throw new Error("generate.password.alpha_only.dimension.not_found");
  }
}
