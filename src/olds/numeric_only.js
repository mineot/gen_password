const four = { min: 1000, max: 9999 };
const six = { min: 100000, max: 999999 };
const eigth = { min: 10000000, max: 99999999 };
const ten = { min: 1000000000, max: 9999999999 };
const twelve = { min: 100000000000, max: 999999999999 };
const fourteen = { min: 10000000000000, max: 99999999999999 };
const sixteen = { min: 1000000000000000, max: 9999999999999999 };
const eighteenteen = { min: 100000000000000000, max: 999999999999999999 };
const twenty = { min: 10000000000000000000, max: 99999999999999999999 };

function calc(x) {
  return parseInt(Math.random() * (x.max - x.min) + x.min).toFixed(0);
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
      throw "generate.password.number_only.invalid_dimension";
  }
}
