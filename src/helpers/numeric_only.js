const four_min_max = { min: 1000, max: 9999 };
const six_min_max = { min: 100000, max: 999999 };
const eigth_min_max = { min: 10000000, max: 99999999 };
const twelve_min_max = { min: 100000000000, max: 999999999999 };

function calc(x) {
  return parseInt(Math.random() * (x.max - x.min) + x.min).toFixed(0);
}

export default function (dimension) {
  switch (dimension) {
    case 4:
      return calc(four_min_max);
    case 6:
      return calc(six_min_max);
    case 8:
      return calc(eigth_min_max);
    case 12:
      return calc(twelve_min_max);
    default:
      throw new Error("generate.password.number_only.dimension.not_found");
  }
}
