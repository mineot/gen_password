const lodash = require("lodash");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();

let list = [];

const four = { div: 2, total: 4 };
const six = { div: 3, total: 6 };
const eigth = { div: 4, total: 8 };
const ten = { div: 5, total: 10 };
const twelve = { div: 6, total: 12 };
const fourteen = { div: 7, total: 14 };
const sixteen = { div: 8, total: 16 };
const eighteenteen = { div: 9, total: 18 };
const twenty = { div: 10, total: 20 };

const calc = async () => parseInt(Math.random() * 26);

const get = async (alpha) => alpha.charAt(await calc());

const get_new_letter = async (alpha) => {
  let letter = await get(alpha);
  while (list.includes(letter)) letter = await get(alpha);
  return letter;
};

const build_list = async (alpha, div) => {
  for (let index = 0; index < div; index++) {
    list.push(await get_new_letter(alpha));
  }
};

// const GetAlphas = async ({ div, total }) => {
//   let alphas = [];
//   while (alphas.length < total) {
//     alphas = process(alphas, UpperLetters, div);
//     alphas = process(alphas, LowerLetters, div);
//   }
//   return lodash.shuffle(alphas).join("");
// };

export default async function (dimension) {
  // switch (dimension) {
  //   case 4:
  //     return GetAlphas(four);
  //   case 6:
  //     return GetAlphas(six);
  //   case 8:
  //     return GetAlphas(eigth);
  //   case 10:
  //     return GetAlphas(ten);
  //   case 12:
  //     return GetAlphas(twelve);
  //   case 14:
  //     return GetAlphas(fourteen);
  //   case 16:
  //     return GetAlphas(sixteen);
  //   case 18:
  //     return GetAlphas(eighteenteen);
  //   case 20:
  //     return GetAlphas(twenty);
  // }
}
