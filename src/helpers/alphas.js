import { Calculate } from "./calcs";

const lodash = require("lodash");

const UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerLetters = UpperLetters.toLowerCase();

const min = 1;
const max = LowerLetters.length;
const calc = (alpha) => alpha.charAt(Calculate(min, max));

const process = async (arr, alpha, div) => {
  for (let index = 0; index < div; index++) {
    let letter = calc(alpha);
    while (arr.includes(letter)) {
      letter = calc(alpha);
    }
    arr.push(letter);
  }
  return arr;
};

const GetAlphas = async ({ div, total }) => {
  let alphas = [];
  while (alphas.length < total) {
    alphas = process(alphas, UpperLetters, div);
    alphas = process(alphas, LowerLetters, div);
  }
  return lodash.shuffle(alphas).join("");
};

export { UpperLetters, LowerLetters, GetAlphas };
